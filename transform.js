const fs = require("fs");

// Load JSON files
const ships = JSON.parse(fs.readFileSync("ships.json", "utf-8"));
const powerPlants = JSON.parse(fs.readFileSync("power.json", "utf-8"));
let shields = [];
let coolers = [];
let qdrives = [];
let weapons = [];
let radars = [];

try {
  shields = JSON.parse(fs.readFileSync("shield.json", "utf-8"));
} catch (e) {}

try {
  coolers = JSON.parse(fs.readFileSync("cooler.json", "utf-8"));
} catch (e) {}

try {
  qdrives = JSON.parse(fs.readFileSync("qdrives.json", "utf-8"));
} catch (e) {}

try {
  weapons = JSON.parse(fs.readFileSync("weapons.json", "utf-8"));
} catch (e) {}

try {
  radars = JSON.parse(fs.readFileSync("radars.json", "utf-8"));
} catch (e) {}

// Build lookup maps
function buildMap(items) {
  const map = new Map();
  for (const p of items) {
    if (p.localName) map.set(p.localName, p.data);
    if (p.data?.ref) map.set(p.data.ref, p.data);
  }
  return map;
}

const powerMap = buildMap(powerPlants);
const shieldMap = buildMap(shields);
const coolerMap = buildMap(coolers);
const qdriveMap = buildMap(qdrives);
const weaponMap = buildMap(weapons);
const radarMap = buildMap(radars);

// Recursive search
function findByType(node, type, results = []) {
  if (!node) return results;

  if (node.itemTypes && node.itemTypes.some(t => t.type === type)) {
    const id = node.localName || node.localReference;
    if (id) results.push(id);
  }

  if (node.loadout && Array.isArray(node.loadout)) {
    for (const child of node.loadout) {
      findByType(child, type, results);
    }
  }

  return results;
}

// Find weapons - collect all references and filter for actual weapons later
function findAllReferences(node, results = []) {
  if (!node) return results;

  // Collect localName or localReference from this node
  const id = node.localName || node.localReference;
  if (id) {
    results.push(id);
  }

  // Recursively traverse loadout
  if (node.loadout && Array.isArray(node.loadout)) {
    for (const child of node.loadout) {
      findAllReferences(child, results);
    }
  }

  return results;
}

// Filter references to only include actual weapons
function findWeapons(node, weaponMap) {
  const allRefs = findAllReferences(node);
  const weapons = [];

  for (const ref of allRefs) {
    const item = weaponMap.get(ref);
    if (item && item.type === "WeaponGun") {
      weapons.push(ref);
    }
  }

  return weapons;
}

// Resolve helper
function resolve(ids, map) {
  if (!ids.length) return "-";

  const unique = [...new Set(ids)];

  const resolved = unique
    .map(id => {
      if (!id) return null;
      const match = map.get(id);
      return match?.name || match?.shortName || null;
    })
    .filter(Boolean);

  return resolved.length ? resolved.join(", ") : "-";
}

// Build table rows
let rows = "";

for (const ship of ships) {
  const name = ship?.data?.name || "Unknown";
  const loadout = ship?.data?.loadout || [];

  let powerIds = [];
  let shieldIds = [];
  let coolerIds = [];
  let qdriveIds = [];
  let weaponIds = [];
  let radarIds = [];

  for (const item of loadout) {
    findByType(item, "PowerPlant", powerIds);
    findByType(item, "Shield", shieldIds);
    findByType(item, "Cooler", coolerIds);
    findByType(item, "QuantumDrive", qdriveIds);
    const itemWeapons = findWeapons(item, weaponMap);
    weaponIds.push(...itemWeapons);
    findByType(item, "Radar", radarIds);
  }

  rows += `
    <tr>
      <td class="ship">${name}</td>
      <td>${resolve(powerIds, powerMap)}</td>
      <td>${resolve(shieldIds, shieldMap)}</td>
      <td>${resolve(coolerIds, coolerMap)}</td>
      <td>${resolve(qdriveIds, qdriveMap)}</td>
      <td>${resolve(weaponIds, weaponMap)}</td>
      <td>${resolve(radarIds, radarMap)}</td>
    </tr>
  `;
}

// HTML output
const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Ship Components</title>
  <style>
    body {
      background-color: #121212;
      color: #e0e0e0;
      font-family: Arial, sans-serif;
      padding: 20px;
    }

    h1 {
      color: #ffffff;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      margin-top: 20px;
    }

    th, td {
      border: 1px solid #333;
      padding: 10px;
      text-align: left;
    }

    th {
      background-color: #1f1f1f;
      color: #ffffff;
    }

    tr:nth-child(even) {
      background-color: #1a1a1a;
    }

    tr:hover {
      background-color: #2a2a2a;
    }

    .ship {
      font-weight: bold;
      color: #4fc3f7;
    }
  </style>
</head>
<body>

  <h1>Default Ship Components</h1>

  <table>
    <thead>
      <tr>
        <th>Ship</th>
        <th>Power Plants</th>
        <th>Shields</th>
        <th>Coolers</th>
        <th>Quantum Drives</th>
        <th>Weapons</th>
        <th>Radar</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>

</body>
</html>
`;

fs.writeFileSync("index.html", html);

console.log("✅ index.html generated successfully");
