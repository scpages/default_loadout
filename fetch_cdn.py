#!/usr/bin/env python3
"""Fetch ship default loadouts from Erkul.games CDN. Outputs ships_cdn.json."""
import json, time, urllib.request, urllib.error, zlib

CDN = "https://cdn.erkul.games"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://erkul.games/",
}

def fetch(url, retries=3):
    req = urllib.request.Request(url, headers=HEADERS)
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (429, 503) and attempt < retries - 1:
                time.sleep(2 ** attempt)
                continue
            raise
    raise RuntimeError(f"Failed after {retries} attempts: {url}")

def fetch_bin(url):
    return json.loads(zlib.decompress(fetch(url), -15))

def get_blobs():
    catalog = fetch_bin(f"{CDN}/LIVE/catalog.bin")
    group_path = next(g["indexPath"] for g in catalog["groups"] if g["kind"] == "ships")
    group = fetch_bin(f"{CDN}/LIVE/{group_path}")
    return group["blobs"], catalog["dataVersion"]

def extract_slots(ship_data):
    slots = []
    for slot in ship_data.get("slots", []):
        port = slot.get("portName", "")
        if "paint" in port.lower():
            continue
        item = slot.get("item") or {}
        if not item:
            continue
        name = (item.get("i18n") or {}).get("name") or item.get("className", "")
        if not name:
            continue
        slots.append({
            "portName": port,
            "type": item.get("type", ""),
            "category": item.get("category", ""),
            "itemName": name,
            "grade": item.get("grade", ""),
            "size": item.get("size", 0),
        })
    return slots

def main():
    print("Fetching ships index...")
    blobs, version = get_blobs()
    print(f"Game version: {version}  |  Ships: {len(blobs)}")

    ships = []
    for i, blob in enumerate(blobs, 1):
        url = f"{CDN}/LIVE/{blob['path']}"
        print(f"  [{i:3d}/{len(blobs)}] {blob['id']}", end=" ", flush=True)
        try:
            data = fetch_bin(url)
            name = (data.get("i18n") or {}).get("name") or blob["id"]
            slots = extract_slots(data)
            ships.append({"id": blob["id"], "name": name, "slots": slots})
            print(f"({len(slots)} slots)")
        except Exception as e:
            print(f"ERROR: {e}")
            ships.append({"id": blob["id"], "name": blob["id"], "slots": []})
        time.sleep(0.1)

    with open("ships_cdn.json", "w") as f:
        json.dump(ships, f)
    print(f"\nSaved {len(ships)} ships to ships_cdn.json")

if __name__ == "__main__":
    main()
