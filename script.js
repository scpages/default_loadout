const fs = require("fs");

// Load JSON files
const ships = JSON.parse(fs.readFileSync("ships.json", "utf-8"));
const powerPlants = JSON.parse(fs.readFileSync("power.json", "utf-8"));
let shields = [];
let coolers = [];
let qdrives = [];

try {
  shields = JSON.parse(fs.readFileSync("shield.json", "utf-8"));
} catch (e) {}

try {
  coolers = JSON.parse(fs.readFileSync("cooler.json", "utf-8"));
} catch (e) {}

try {
  qdrives = JSON.parse(fs.readFileSync("qdrives.json", "utf-8"));
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

// Resolve helper
function resolve(ids, map) {
  if (!ids.length) return "Missing";

  return ids.map(id => {
    if (!id) return "N/A";
    const match = map.get(id);
    return match?.name || `UNKNOWN(${id})`;
  }).join(", ");
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

  for (const item of loadout) {
    findByType(item, "PowerPlant", powerIds);
    findByType(item, "Shield", shieldIds);
    findByType(item, "Cooler", coolerIds);
    findByType(item, "QuantumDrive", qdriveIds);
  }

  rows += `
    <tr>
      <td class="ship">${name}</td>
      <td>${resolve(powerIds, powerMap)}</td>
      <td>${resolve(shieldIds, shieldMap)}</td>
      <td>${resolve(coolerIds, coolerMap)}</td>
      <td>${resolve(qdriveIds, qdriveMap)}</td>
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

  <h1>Ship Components</h1>

  <table>
    <thead>
      <tr>
        <th>Ship</th>
        <th>Power Plants</th>
        <th>Shields</th>
        <th>Coolers</th>
        <th>Quantum Drives</th>
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
