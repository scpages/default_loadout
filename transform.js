const fs = require("fs");

const { version, ships } = JSON.parse(fs.readFileSync("ships_cdn.json", "utf-8"));

let wikeloShips = [];
try {
  wikeloShips = JSON.parse(fs.readFileSync("ships_wikelo.json", "utf-8")).ships;
  console.log(`Loaded ${wikeloShips.length} Wikelo ships`);
} catch (e) {
  console.log("Wikelo ships not found, skipping...");
}

let execHangarShips = [];
try {
  execHangarShips = JSON.parse(fs.readFileSync("ships_exec-hangar.json", "utf-8")).ships;
  console.log(`Loaded ${execHangarShips.length} Executive Hangar ships`);
} catch (e) {
  console.log("Executive Hangar ships not found, skipping...");
}

const CLASS_ABBR = { Military: "M", Industrial: "I", Stealth: "S", Civilian: "C", Competition: "Co" };

function resolveSlots(slots, type) {
  const seen = new Set();
  const results = [];
  for (const s of slots) {
    if (s.type !== type) continue;
    const name = s.itemName;
    if (!name) continue;
    const cls = CLASS_ABBR[s.class] || s.class || "";
    const grade = s.grade || "";
    const size = s.size ? `S${s.size}` : "";
    const inner = [size, cls && grade ? `${cls}-${grade}` : cls || grade].filter(Boolean).join(" ");
    const suffix = inner ? ` <span class="meta">(${inner})</span>` : "";
    const key = `${name}${size}${cls}${grade}`;
    if (!seen.has(key)) {
      seen.add(key);
      results.push(`${name}${suffix}`);
    }
  }
  return results.length ? results.join(", ") : "-";
}

function resolveWeapons(slots) {
  const counts = new Map();
  for (const s of slots) {
    if (s.type !== "WeaponGun") continue;
    const name = s.itemName;
    if (!name) continue;
    counts.set(name, (counts.get(name) || 0) + 1);
  }
  if (!counts.size) return "-";
  return [...counts.entries()].map(([name, n]) => `${n}x ${name}`).join(", ");
}

let rows = "";
for (const ship of ships) {
  const name = ship.name || "Unknown";
  const slots = ship.slots || [];
  rows += `
    <tr>
      <td class="ship">${name}</td>
      <td>${resolveSlots(slots, "PowerPlant")}</td>
      <td>${resolveSlots(slots, "Shield")}</td>
      <td>${resolveSlots(slots, "Cooler")}</td>
      <td>${resolveSlots(slots, "QuantumDrive")}</td>
      <td>${resolveSlots(slots, "Radar")}</td>
      <td>${resolveWeapons(slots)}</td>
    </tr>
  `;
}

const formatComponent = (comp) => {
  if (comp.name === "-") return null;
  const classInitial = comp.class && comp.class !== "NA" && comp.class !== "-" ? comp.class.charAt(0).toUpperCase() : "";
  const suffix = classInitial && comp.grade && comp.grade !== "-" ? ` (${classInitial}-${comp.grade})` : "";
  return `${comp.name}${suffix}`;
};

const formatComponents = (comps) => {
  if (!comps.length) return "-";
  return comps.map(formatComponent).filter(Boolean).join(", ") || "-";
};

let wikeloRows = "";
for (const ship of wikeloShips) {
  const name = ship.name;
  wikeloRows += `
    <tr>
      <td class="ship">${name}</td>
      <td>${formatComponents(ship.components.filter(c => c.type === "Power Plant"))}</td>
      <td>${formatComponents(ship.components.filter(c => c.type === "Shield"))}</td>
      <td>${formatComponents(ship.components.filter(c => c.type === "Cooler"))}</td>
      <td>${formatComponents(ship.components.filter(c => c.type === "Quantum Drive"))}</td>
      <td>${formatComponents(ship.components.filter(c => c.type === "Weapons"))}</td>
    </tr>
  `;
}

let execHangarRows = "";
for (const ship of execHangarShips) {
  const name = ship.name;
  execHangarRows += `
    <tr>
      <td class="ship">${name}</td>
      <td>${formatComponents(ship.components.filter(c => c.type === "Power Plant"))}</td>
      <td>${formatComponents(ship.components.filter(c => c.type === "Shield"))}</td>
      <td>${formatComponents(ship.components.filter(c => c.type === "Cooler"))}</td>
      <td>${formatComponents(ship.components.filter(c => c.type === "Quantum Drive"))}</td>
      <td>${formatComponents(ship.components.filter(c => c.type === "Weapons"))}</td>
    </tr>
  `;
}

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Default Ship Components - Star Citizen</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🚀%3C/text%3E%3C/svg%3E">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
      color: #e8e8e8;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 0;
      min-height: 100vh;
    }
    .container { max-width: 1400px; margin: 0 auto; padding: 20px; }
    header {
      background: rgba(10, 14, 39, 0.8);
      backdrop-filter: blur(10px);
      border-bottom: 2px solid #2a9fd6;
      padding: 20px 0;
      margin-bottom: 30px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }
    h1 {
      color: #ffffff;
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      text-shadow: 0 0 20px rgba(42, 159, 214, 0.5);
    }
    .subtitle { text-align: center; color: #a0a0a0; font-size: 0.9rem; margin-top: 8px; }
    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      background: rgba(20, 25, 45, 0.6);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    }
    th {
      background: linear-gradient(180deg, #1e3a5f 0%, #152840 100%);
      color: #ffffff;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 0.5px;
      padding: 16px 12px;
      text-align: left;
      border-bottom: 2px solid #2a9fd6;
    }
    td {
      padding: 14px 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      color: #d0d0d0;
      font-size: 0.9rem;
    }
    tr:hover { background-color: rgba(42, 159, 214, 0.1); transition: background-color 0.2s ease; }
    tr:last-child td { border-bottom: none; }
    .ship { font-weight: 600; color: #2a9fd6; font-size: 1rem; }
    .meta { color: #5a6a7a; font-size: 0.8em; }
    .footer {
      margin-top: 50px;
      padding: 20px 0;
      border-top: 1px solid rgba(42, 159, 214, 0.3);
      color: #888;
      font-size: 0.85rem;
      text-align: center;
    }
    .footer a { color: #2a9fd6; text-decoration: none; margin: 0 8px; transition: color 0.2s ease; }
    .footer a:hover { color: #4fc3f7; text-decoration: underline; }
    .section-header {
      background: rgba(42, 159, 214, 0.1);
      border-left: 4px solid #2a9fd6;
      padding: 15px 20px;
      margin: 40px 0 20px 0;
      border-radius: 4px;
    }
    .section-header h2 { color: #2a9fd6; font-size: 1.5rem; font-weight: 600; margin-bottom: 5px; }
    .section-header p { color: #a0a0a0; font-size: 0.9rem; margin: 0; }
    @media (max-width: 768px) {
      table { font-size: 0.8rem; }
      th, td { padding: 10px 8px; }
      h1 { font-size: 1.5rem; }
    }
  </style>
</head>
<body>

  <header>
    <div class="container">
      <h1>Default Ship Components</h1>
      <div class="subtitle">Star Citizen - Default Loadouts Database</div>
    </div>
  </header>

  <div class="container">
    <div class="section-header">
      <h2>Default Ship Components</h2>
      <p>Factory default components as sold in-game</p>
    </div>

    <table>
      <thead>
        <tr>
          <th>Ship</th>
          <th>Power Plants</th>
          <th>Shields</th>
          <th>Coolers</th>
          <th>Quantum Drives</th>
          <th>Radar</th>
          <th>Weapons</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>

  ${wikeloRows ? `
    <div class="section-header">
      <h2>Wikelo Modified Ships</h2>
    </div>

    <table>
      <thead>
        <tr>
          <th>Ship</th>
          <th>Power Plants</th>
          <th>Shields</th>
          <th>Coolers</th>
          <th>Quantum Drives</th>
          <th>Weapons</th>
        </tr>
      </thead>
      <tbody>
        ${wikeloRows}
      </tbody>
    </table>
  ` : ""}

  ${execHangarRows ? `
    <div class="section-header">
      <h2>Executive Hangar Ships</h2>
    </div>

    <table>
      <thead>
        <tr>
          <th>Ship</th>
          <th>Power Plants</th>
          <th>Shields</th>
          <th>Coolers</th>
          <th>Quantum Drives</th>
          <th>Weapons</th>
        </tr>
      </thead>
      <tbody>
        ${execHangarRows}
      </tbody>
    </table>
  ` : ""}

    <div class="footer">
      Generated: ${new Date().toUTCString()}${version ? ` | Game version: ${version}` : ""} |
      <a href="https://github.com/scpages/default_loadout" target="_blank">GitHub Repository</a> |
      Data from <a href="https://www.erkul.games" target="_blank">erkul.games</a>
    </div>

  </div>

</body>
</html>
`;

fs.writeFileSync("index.html", html);
console.log("index.html generated successfully");
