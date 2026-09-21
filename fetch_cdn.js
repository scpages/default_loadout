#!/usr/bin/env node
const { inflateRawSync } = require("zlib");
const fs = require("fs");

const CDN = "https://cdn.erkul.games";
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  "Accept": "*/*",
  "Accept-Language": "en-US,en;q=0.9",
  "Referer": "https://erkul.games/",
  "Origin": "https://erkul.games",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-site",
};

async function fetchBin(url, retries = 3) {
  for (let attempt = 0; attempt < retries; attempt++) {
    const resp = await fetch(url, { headers: HEADERS });
    if (resp.status === 429 || resp.status === 503) {
      await new Promise(r => setTimeout(r, 1000 * 2 ** attempt));
      continue;
    }
    if (!resp.ok) throw new Error(`HTTP ${resp.status} for ${url}`);
    const buf = await resp.arrayBuffer();
    return JSON.parse(inflateRawSync(Buffer.from(buf)).toString("utf-8"));
  }
  throw new Error(`Failed after ${retries} attempts: ${url}`);
}

async function getBlobs() {
  const catalog = await fetchBin(`${CDN}/LIVE/catalog.bin`);
  const groupPath = catalog.groups.find(g => g.kind === "ships").indexPath;
  const group = await fetchBin(`${CDN}/LIVE/${groupPath}`);
  return { blobs: group.blobs, version: catalog.dataVersion };
}

function extractSlots(shipData) {
  const slots = [];
  for (const slot of shipData.slots || []) {
    const port = slot.portName || "";
    if (port.toLowerCase().includes("paint")) continue;
    const item = slot.item;
    if (!item) continue;
    const name = item.i18n?.name || item.className || "";
    if (!name) continue;
    slots.push({
      portName: port,
      type: item.type || "",
      category: item.category || "",
      itemName: name,
      grade: item.grade || "",
      size: item.size || 0,
    });
  }
  return slots;
}

async function main() {
  console.log("Fetching ships index...");
  const { blobs, version } = await getBlobs();
  console.log(`Game version: ${version}  |  Ships: ${blobs.length}`);

  const ships = [];
  for (let i = 0; i < blobs.length; i++) {
    const blob = blobs[i];
    const url = `${CDN}/LIVE/${blob.path}`;
    process.stdout.write(`  [${String(i + 1).padStart(3)}/${blobs.length}] ${blob.id} `);
    try {
      const data = await fetchBin(url);
      const name = data.i18n?.name || blob.id;
      const slots = extractSlots(data);
      ships.push({ id: blob.id, name, slots });
      console.log(`(${slots.length} slots)`);
    } catch (e) {
      console.log(`ERROR: ${e.message}`);
      ships.push({ id: blob.id, name: blob.id, slots: [] });
    }
    await new Promise(r => setTimeout(r, 100));
  }

  fs.writeFileSync("ships_cdn.json", JSON.stringify({ version, ships }));
  console.log(`\nSaved ${ships.length} ships to ships_cdn.json`);
}

main().catch(e => { console.error(e); process.exit(1); });
