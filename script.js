
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
        <th>Weapons</th>
        <th>Radar</th>
      </tr>
    </thead>
    <tbody>
      
    <tr>
      <td class="ship">Avenger Stalker</td>
      <td>PowerBolt</td>
      <td>Shimmer</td>
      <td>Bracer</td>
      <td>Expedition</td>
      <td>Revenant, Omnisky IX</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Avenger Titan</td>
      <td>Endurance</td>
      <td>Bulwark</td>
      <td>Bracer</td>
      <td>Expedition</td>
      <td>Revenant, Omnisky IX</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Avenger Titan Renegade</td>
      <td>Endurance</td>
      <td>Bulwark</td>
      <td>Bracer</td>
      <td>Expedition</td>
      <td>11-Series Broadsword</td>
      <td>Voir</td>
    </tr>
  
    <tr>
      <td class="ship">Avenger Warlock</td>
      <td>Regulus</td>
      <td>Shimmer</td>
      <td>Bracer</td>
      <td>Expedition</td>
      <td>Revenant, Omnisky IX</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Eclipse</td>
      <td>DeltaMax</td>
      <td>Veil</td>
      <td>VaporBlock</td>
      <td>Drift</td>
      <td>CF-227 Badger</td>
      <td>Pelerous</td>
    </tr>
  
    <tr>
      <td class="ship">Gladius</td>
      <td>Regulus</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Beacon</td>
      <td>Mantis GT-220, CF-337 Panther</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Gladius Pirate</td>
      <td>Charger</td>
      <td>SecureHyde</td>
      <td>Polar</td>
      <td>Expedition</td>
      <td>Mantis GT-220, CF-337 Panther</td>
      <td>Voir</td>
    </tr>
  
    <tr>
      <td class="ship">Gladius Valiant</td>
      <td>Regulus</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Beacon</td>
      <td>CF-337 Panther, Omnisky IX</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Hammerhead</td>
      <td>SuperDrive</td>
      <td>Stronghold</td>
      <td>Mercury</td>
      <td>Kama</td>
      <td>Missing</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Idris M</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Idris radar</td>
    </tr>
  
    <tr>
      <td class="ship">Idris P</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Idris radar</td>
    </tr>
  
    <tr>
      <td class="ship">Reclaimer</td>
      <td>Missing</td>
      <td>RS-Barrier</td>
      <td>Algid</td>
      <td>Kama</td>
      <td>Missing</td>
      <td>Surveyor-Max</td>
    </tr>
  
    <tr>
      <td class="ship">Redeemer</td>
      <td>Centurion</td>
      <td>FullStop</td>
      <td>Blizzard</td>
      <td>Crossfield</td>
      <td>C-788</td>
      <td>Epier</td>
    </tr>
  
    <tr>
      <td class="ship">Retaliator</td>
      <td>Maelstrom</td>
      <td>FullStop</td>
      <td>Arctic</td>
      <td>Crossfield</td>
      <td>Missing</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Sabre</td>
      <td>SonicLite</td>
      <td>Shimmer</td>
      <td>Bracer</td>
      <td>Drift</td>
      <td>CF-337 Panther</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Sabre Comet</td>
      <td>SonicLite</td>
      <td>Shimmer</td>
      <td>Bracer</td>
      <td>Drift</td>
      <td>Omnisky IX, PyroBurst</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Sabre Firebird</td>
      <td>Charger, SonicLite</td>
      <td>Shimmer</td>
      <td>Bracer</td>
      <td>Drift</td>
      <td>Mantis GT-220</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Sabre Peregrine</td>
      <td>Charger, SonicLite</td>
      <td>Shimmer</td>
      <td>Bracer</td>
      <td>Drift</td>
      <td>Missing</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Sabre Raven</td>
      <td>Charger, SonicLite</td>
      <td>Shimmer</td>
      <td>Bracer</td>
      <td>Drift</td>
      <td>Quarreler</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Vanguard Harbinger</td>
      <td>TurboDrive</td>
      <td>SecureShield</td>
      <td>Permafrost</td>
      <td>Yeager</td>
      <td>Deadbolt V</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Vanguard Hoplite</td>
      <td>Maelstrom</td>
      <td>FullStop</td>
      <td>Arctic</td>
      <td>Crossfield</td>
      <td>Deadbolt V</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Vanguard Sentinel</td>
      <td>GammaMax</td>
      <td>Sheut</td>
      <td>HeatSink</td>
      <td>Nova</td>
      <td>Attrition-5</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Vanguard Warden</td>
      <td>Maelstrom</td>
      <td>FullStop</td>
      <td>Arctic</td>
      <td>Crossfield</td>
      <td>Deadbolt V, MVSA</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Arrow</td>
      <td>Regulus</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Beacon</td>
      <td>YellowJacket GT-210, CF-337 Panther</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Asgard</td>
      <td>Maelstrom</td>
      <td>FullStop</td>
      <td>Arctic</td>
      <td>Odyssey</td>
      <td>CF-337 Panther</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">C8 Pisces</td>
      <td>Regulus</td>
      <td>Shimmer</td>
      <td>Bracer</td>
      <td>Expedition</td>
      <td>CF-117 Bulldog</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">C8R Pisces Rescue</td>
      <td>Regulus</td>
      <td>Shimmer</td>
      <td>Bracer</td>
      <td>Expedition</td>
      <td>CF-117 Bulldog</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">C8X Pisces Expedition</td>
      <td>Regulus</td>
      <td>Shimmer</td>
      <td>Bracer</td>
      <td>Expedition</td>
      <td>CF-117 Bulldog, FL-11</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Carrack</td>
      <td>Reliance</td>
      <td>Barbican</td>
      <td>Ice-Flush</td>
      <td>Kama</td>
      <td>Missing</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Carrack Expedition</td>
      <td>Reliance</td>
      <td>Barbican</td>
      <td>Ice-Flush</td>
      <td>Kama</td>
      <td>Missing</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">F7A Hornet Mk I</td>
      <td>TurboDrive</td>
      <td>WEB</td>
      <td>ArcticStorm</td>
      <td>Eos</td>
      <td>AD4B</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">F7A Hornet Mk II</td>
      <td>Maelstrom</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Eos</td>
      <td>Revenant</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">F7C Hornet Mk I</td>
      <td>PowerBolt</td>
      <td>WEB</td>
      <td>ArcticStorm</td>
      <td>Eos</td>
      <td>CF-337 Panther</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">F7C Hornet Mk II</td>
      <td>Regulus</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Eos</td>
      <td>Revenant</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">F7C Hornet Wildfire Mk I</td>
      <td>Roughneck</td>
      <td>WEB</td>
      <td>ArcticStorm</td>
      <td>Eos</td>
      <td>Tarantula GT-870 Mk 3</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">F7C-M Hornet Heartseeker Mk I</td>
      <td>OverDrive</td>
      <td>ForceWall</td>
      <td>Polar</td>
      <td>Eos</td>
      <td>Mantis GT-220</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">F7C-M Hornet Heartseeker Mk II</td>
      <td>Maelstrom</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Eos</td>
      <td>Revenant</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">F7C-M Super Hornet Mk I</td>
      <td>Regulus</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Eos</td>
      <td>Mantis GT-220</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">F7C-M Super Hornet Mk II</td>
      <td>Maelstrom</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Eos</td>
      <td>Revenant</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">F7C-R Hornet Tracker Mk I</td>
      <td>LumaCore</td>
      <td>Targa</td>
      <td>IcePlunge</td>
      <td>Eos</td>
      <td>CF-337 Panther</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">F7C-R Hornet Tracker Mk II</td>
      <td>Regulus, Regulus</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Eos</td>
      <td>Revenant</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">F7C-S Hornet Ghost Mk I</td>
      <td>Slipstream</td>
      <td>Shimmer</td>
      <td>HeatSafe</td>
      <td>Eos</td>
      <td>Omnisky IX</td>
      <td>Pelerous</td>
    </tr>
  
    <tr>
      <td class="ship">F7C-S Hornet Ghost Mk II</td>
      <td>SonicLite</td>
      <td>Shimmer</td>
      <td>HeatSafe</td>
      <td>Drift</td>
      <td>Revenant</td>
      <td>Pelerous</td>
    </tr>
  
    <tr>
      <td class="ship">F8A Lightning</td>
      <td>Maelstrom</td>
      <td>Sheut</td>
      <td>Polar</td>
      <td>Expedition</td>
      <td>CF-337 Panther, M6A, M5A</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">F8C Lightning</td>
      <td>Maelstrom</td>
      <td>Sheut</td>
      <td>Polar</td>
      <td>Expedition</td>
      <td>CF-337 Panther, Tarantula GT-870 Mk 3, Tarantula GT-870 Mk 2, CF-227 Badger</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Gladiator</td>
      <td>Maelstrom</td>
      <td>FullStop</td>
      <td>Bracer</td>
      <td>Beacon</td>
      <td>CF-447 Rhino</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Hawk</td>
      <td>Regulus</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Rush</td>
      <td>Suckerpunch, CF-227 Badger</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">Hurricane</td>
      <td>Regulus</td>
      <td>FullStop</td>
      <td>Bracer</td>
      <td>Expedition</td>
      <td>CF-447 Rhino</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Paladin</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
    </tr>
  
    <tr>
      <td class="ship">Terrapin</td>
      <td>DayBreak</td>
      <td>5MA 'Chimalli'</td>
      <td>Polar</td>
      <td>Eos</td>
      <td>Missing</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Terrapin Medic</td>
      <td>DayBreak</td>
      <td>5MA 'Chimalli'</td>
      <td>Polar</td>
      <td>Eos</td>
      <td>Missing</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">Valkyrie</td>
      <td>Maelstrom</td>
      <td>FullStop</td>
      <td>Arctic</td>
      <td>Odyssey</td>
      <td>CF-337 Panther</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Khartu-al</td>
      <td>DynaFlux</td>
      <td>ForceWall</td>
      <td>Polar</td>
      <td>Eos</td>
      <td>CF-447 Rhino</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">Nox</td>
      <td>Radix</td>
      <td>Missing</td>
      <td>Fridan</td>
      <td>Missing</td>
      <td>CF-117 Bulldog</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">Nox Kue</td>
      <td>Radix</td>
      <td>Missing</td>
      <td>Fridan</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">San'tok.yāi</td>
      <td>DynaFlux</td>
      <td>FullStop</td>
      <td>Polar</td>
      <td>Beacon</td>
      <td>Yeng’tu</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">MOLE</td>
      <td>Ginzel</td>
      <td>5CA 'Akura'</td>
      <td>ThermalCore</td>
      <td>Huracan</td>
      <td>CF-227 Badger</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">MOTH</td>
      <td>Ginzel</td>
      <td>5CA 'Akura'</td>
      <td>ThermalCore</td>
      <td>Huracan</td>
      <td>CF-227 Badger</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">MPUV Cargo</td>
      <td>IonWave</td>
      <td>Bulwark</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">MPUV Personnel</td>
      <td>IonWave</td>
      <td>Bulwark</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">MPUV Tractor</td>
      <td>IonWave</td>
      <td>Bulwark</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">RAFT</td>
      <td>Diligence</td>
      <td>Aspis</td>
      <td>CoolCore</td>
      <td>Bolon</td>
      <td>Missing</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">SRV</td>
      <td>Diligence</td>
      <td>5MA 'Chimalli'</td>
      <td>CoolCore</td>
      <td>Huracan</td>
      <td>Missing</td>
      <td>Surveyor-Lite</td>
    </tr>
  
    <tr>
      <td class="ship">Defender</td>
      <td>IonBurst</td>
      <td>Sukoran</td>
      <td>Polar</td>
      <td>Beacon</td>
      <td>Singe-3</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">HoverQuad</td>
      <td>Radix</td>
      <td>Missing</td>
      <td>Fridan</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">Mustang Alpha</td>
      <td>ZapJet</td>
      <td>INK</td>
      <td>Winter-Star</td>
      <td>Rush</td>
      <td>Missing</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">Mustang Beta</td>
      <td>Roughneck</td>
      <td>INK</td>
      <td>Hydrocel</td>
      <td>Rush</td>
      <td>Missing</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">Mustang Delta</td>
      <td>OverDrive</td>
      <td>SecureHyde</td>
      <td>Winter-Star</td>
      <td>Rush</td>
      <td>CF-227 Badger</td>
      <td>Fleming</td>
    </tr>
  
    <tr>
      <td class="ship">Mustang Gamma</td>
      <td>LumaCore</td>
      <td>Falco</td>
      <td>QuikCool</td>
      <td>Rush</td>
      <td>CF-117 Bulldog</td>
      <td>SNS-R6</td>
    </tr>
  
    <tr>
      <td class="ship">Mustang Omega</td>
      <td>LumaCore</td>
      <td>Falco</td>
      <td>QuikCool</td>
      <td>Rush</td>
      <td>CF-117 Bulldog</td>
      <td>SNS-R6</td>
    </tr>
  
    <tr>
      <td class="ship">Nomad</td>
      <td>IonBurst</td>
      <td>WEB, WEB</td>
      <td>Ultra-Flow</td>
      <td>Expedition</td>
      <td>CF-337 Panther</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">A1 Spirit</td>
      <td>UltraFlux</td>
      <td>FullStop</td>
      <td>Boreal</td>
      <td>Yeager</td>
      <td>M5A</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">A2 Hercules Starlifter</td>
      <td>SuperDrive</td>
      <td>FullBlock</td>
      <td>Mercury</td>
      <td>Pontes</td>
      <td>M7A</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Ares Star Fighter Inferno</td>
      <td>Maelstrom</td>
      <td>FullStop</td>
      <td>Arctic</td>
      <td>Crossfield</td>
      <td>Missing</td>
      <td>Epier</td>
    </tr>
  
    <tr>
      <td class="ship">Ares Star Fighter Ion</td>
      <td>Maelstrom</td>
      <td>FullStop</td>
      <td>Arctic</td>
      <td>Crossfield</td>
      <td>Missing</td>
      <td>Epier</td>
    </tr>
  
    <tr>
      <td class="ship">C1 Spirit</td>
      <td>UltraFlux</td>
      <td>FullStop</td>
      <td>Boreal</td>
      <td>Yeager</td>
      <td>M5A</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">C2 Hercules Starlifter</td>
      <td>Ginzel</td>
      <td>Stronghold</td>
      <td>ThermalCore</td>
      <td>Kama</td>
      <td>M7A</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Intrepid</td>
      <td>LightBlossom</td>
      <td>HEX</td>
      <td>BlastChill</td>
      <td>FoxFire</td>
      <td>CF-447 Rhino</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">M2 Hercules Starlifter</td>
      <td>SuperDrive</td>
      <td>FullBlock</td>
      <td>Mercury</td>
      <td>Pontes</td>
      <td>M7A</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Mercury Star Runner</td>
      <td>Diligence</td>
      <td>Stronghold</td>
      <td>CoolCore</td>
      <td>Bolon</td>
      <td>CF-337 Panther</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Buccaneer</td>
      <td>JS-300</td>
      <td>WEB</td>
      <td>Polar</td>
      <td>Rush</td>
      <td>Revenant, YellowJacket GT-210, CF-337 Panther</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Caterpillar</td>
      <td>Ginzel</td>
      <td>Stronghold</td>
      <td>ThermalCore</td>
      <td>Pontes</td>
      <td>M5A, CF-337 Panther</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Caterpillar Pirate</td>
      <td>Ginzel</td>
      <td>Stronghold</td>
      <td>ThermalCore</td>
      <td>Pontes</td>
      <td>M5A, CF-337 Panther</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Clipper</td>
      <td>ZapJet</td>
      <td>INK</td>
      <td>BlastChill</td>
      <td>Flood</td>
      <td>Mantis GT-220, Omnisky IX</td>
      <td>Fleming</td>
    </tr>
  
    <tr>
      <td class="ship">Corsair</td>
      <td>DayBreak</td>
      <td>5CA 'Akura'</td>
      <td>Frost-Star EX</td>
      <td>Torrent</td>
      <td>M6A, M7A</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Cutlass Black</td>
      <td>DayBreak</td>
      <td>STOP</td>
      <td>ColdSnap</td>
      <td>Odyssey</td>
      <td>Mantis GT-220, CF-337 Panther</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Cutlass Blue</td>
      <td>TurboDrive</td>
      <td>Aspis</td>
      <td>Graupel</td>
      <td>Bolon</td>
      <td>Mantis GT-220, DR Model-XJ3</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Cutlass Red</td>
      <td>Diligence</td>
      <td>Aspis</td>
      <td>CoolCore</td>
      <td>Bolon</td>
      <td>Mantis GT-220, CF-337 Panther</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Cutlass Steel</td>
      <td>TurboDrive</td>
      <td>FullStop</td>
      <td>Arctic</td>
      <td>Crossfield</td>
      <td>Mantis GT-220, CF-337 Panther</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Cutter</td>
      <td>LightBlossom</td>
      <td>HEX</td>
      <td>BlastChill</td>
      <td>FoxFire</td>
      <td>CF-227 Badger</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Cutter Rambler</td>
      <td>LightBlossom</td>
      <td>HEX</td>
      <td>BlastChill</td>
      <td>FoxFire</td>
      <td>CF-227 Badger</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Cutter Scout</td>
      <td>ExoGen</td>
      <td>HEX</td>
      <td>Boreal</td>
      <td>FoxFire</td>
      <td>CF-227 Badger</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Dragonfly</td>
      <td>Radix</td>
      <td>Missing</td>
      <td>Fridan</td>
      <td>Missing</td>
      <td>Havoc</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">Dragonfly Star Kitten</td>
      <td>Radix</td>
      <td>Missing</td>
      <td>Fridan</td>
      <td>Missing</td>
      <td>Havoc</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">Dragonfly Yellowjacket</td>
      <td>Radix</td>
      <td>Missing</td>
      <td>Fridan</td>
      <td>Missing</td>
      <td>Havoc</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">Golem</td>
      <td>Fortitude</td>
      <td>Bulwark</td>
      <td>Thermax</td>
      <td>Goliath</td>
      <td>CF-117 Bulldog</td>
      <td>Surveyor-Lite</td>
    </tr>
  
    <tr>
      <td class="ship">Golem OX</td>
      <td>Fortitude</td>
      <td>Bulwark</td>
      <td>Thermax</td>
      <td>Goliath</td>
      <td>CF-117 Bulldog</td>
      <td>Surveyor-Lite</td>
    </tr>
  
    <tr>
      <td class="ship">Herald</td>
      <td>Slipstream</td>
      <td>Shimmer</td>
      <td>HeatSafe</td>
      <td>Expedition</td>
      <td>Mantis GT-220, CF-227 Badger</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">Vulture</td>
      <td>Fortitude</td>
      <td>Bulwark</td>
      <td>Thermax</td>
      <td>Goliath</td>
      <td>CF-117 Bulldog</td>
      <td>Surveyor-Lite</td>
    </tr>
  
    <tr>
      <td class="ship">Blade</td>
      <td>Charger</td>
      <td>AllStop</td>
      <td>IcePlunge</td>
      <td>Rush</td>
      <td>'WARLORD', 'WHIP'</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Glaive</td>
      <td>Fierell Cascade</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Beacon</td>
      <td>Missing</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Prowler</td>
      <td>Eclipse</td>
      <td>Obscura, Obscura</td>
      <td>HeatSink</td>
      <td>Nova</td>
      <td>Deadbolt V</td>
      <td>Surveyor-Lite</td>
    </tr>
  
    <tr>
      <td class="ship">Prowler Utility</td>
      <td>Eclipse</td>
      <td>Obscura, Obscura</td>
      <td>HeatSink</td>
      <td>Nova</td>
      <td>Lightstrike IV</td>
      <td>Surveyor-Lite</td>
    </tr>
  
    <tr>
      <td class="ship">Stinger</td>
      <td>Fortitude</td>
      <td>FullStop</td>
      <td>Eco-Flow</td>
      <td>Bolon</td>
      <td>Lightstrike IV, Lightstrike II, 'WRATH'</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Talon</td>
      <td>Slipstream</td>
      <td>Shimmer</td>
      <td>VaporBlock</td>
      <td>Drift</td>
      <td>Lightstrike IV</td>
      <td>Pelerous</td>
    </tr>
  
    <tr>
      <td class="ship">Talon Shrike</td>
      <td>Slipstream</td>
      <td>Shimmer</td>
      <td>VaporBlock</td>
      <td>Drift</td>
      <td>Lightstrike II</td>
      <td>Pelerous</td>
    </tr>
  
    <tr>
      <td class="ship">Syulen</td>
      <td>LightBlossom</td>
      <td>HEX</td>
      <td>BlastChill</td>
      <td>FoxFire</td>
      <td>CF-337 Panther</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Shiv</td>
      <td>DayBreak</td>
      <td>STOP</td>
      <td>ColdSnap</td>
      <td>Odyssey</td>
      <td>Breakneck S4</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">L-21 Wolf</td>
      <td>LightBlossom</td>
      <td>HEX</td>
      <td>BlastChill</td>
      <td>FoxFire</td>
      <td>Relentless L-21</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">L-22 Alpha Wolf</td>
      <td>LightBlossom</td>
      <td>HEX</td>
      <td>BlastChill</td>
      <td>VK-00</td>
      <td>Axiom L-22</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">P-52 Merlin</td>
      <td>LightBlossom</td>
      <td>SecureHyde</td>
      <td>Frost-Star</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">P-72 Archimedes</td>
      <td>Charger</td>
      <td>Targa</td>
      <td>Bracer</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">P-72 Archimedes Emerald</td>
      <td>Charger</td>
      <td>Targa</td>
      <td>Bracer</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">Fury</td>
      <td>Roughneck</td>
      <td>Cloak</td>
      <td>Hydrocel</td>
      <td>Missing</td>
      <td>CF-227 Badger</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Fury LX</td>
      <td>Roughneck</td>
      <td>Falco</td>
      <td>IcePlunge</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Fury MX</td>
      <td>Roughneck</td>
      <td>Cloak</td>
      <td>Hydrocel</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Guardian</td>
      <td>OverDrive</td>
      <td>FullStop</td>
      <td>Arctic</td>
      <td>Crossfield</td>
      <td>M7A</td>
      <td>Epier</td>
    </tr>
  
    <tr>
      <td class="ship">Guardian MX</td>
      <td>Maelstrom</td>
      <td>FullStop</td>
      <td>Bracer, Arctic</td>
      <td>Crossfield</td>
      <td>CF-447 Rhino</td>
      <td>Epier</td>
    </tr>
  
    <tr>
      <td class="ship">Guardian QI</td>
      <td>Regulus</td>
      <td>FullStop</td>
      <td>Arctic</td>
      <td>Crossfield</td>
      <td>M7A</td>
      <td>Epier</td>
    </tr>
  
    <tr>
      <td class="ship">Pulse</td>
      <td>Radix</td>
      <td>Missing</td>
      <td>Fridan</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">Pulse LX</td>
      <td>Radix</td>
      <td>Missing</td>
      <td>Fridan</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">Razor</td>
      <td>StarHeart</td>
      <td>Targa</td>
      <td>IcePlunge</td>
      <td>LightFire</td>
      <td>CF-227 Badger</td>
      <td>SNS-R6</td>
    </tr>
  
    <tr>
      <td class="ship">Razor EX</td>
      <td>SonicLite</td>
      <td>Shimmer</td>
      <td>HeatSafe</td>
      <td>Drift</td>
      <td>Hellion</td>
      <td>Pelerous</td>
    </tr>
  
    <tr>
      <td class="ship">Razor LX</td>
      <td>StarHeart</td>
      <td>Targa</td>
      <td>IcePlunge</td>
      <td>LightFire</td>
      <td>CF-227 Badger</td>
      <td>SNS-R6</td>
    </tr>
  
    <tr>
      <td class="ship">Fortune</td>
      <td>Trommel</td>
      <td>Bulwark</td>
      <td>Snowfall</td>
      <td>Goliath</td>
      <td>CF-117 Bulldog</td>
      <td>Surveyor-Lite</td>
    </tr>
  
    <tr>
      <td class="ship">Freelancer</td>
      <td>DayBreak</td>
      <td>5MA 'Chimalli'</td>
      <td>Frost-Star EX</td>
      <td>Odyssey</td>
      <td>M5A</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Freelancer DUR</td>
      <td>DayBreak</td>
      <td>5MA 'Chimalli'</td>
      <td>Frost-Star EX</td>
      <td>Odyssey</td>
      <td>Missing</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Freelancer MAX</td>
      <td>DayBreak</td>
      <td>5MA 'Chimalli'</td>
      <td>Frost-Star EX</td>
      <td>Odyssey</td>
      <td>Missing</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Freelancer MIS</td>
      <td>Maelstrom</td>
      <td>FullStop</td>
      <td>Arctic</td>
      <td>Crossfield</td>
      <td>M5A</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Hull A</td>
      <td>IonBurst</td>
      <td>Armada</td>
      <td>ArcticStorm</td>
      <td>Goliath</td>
      <td>Missing</td>
      <td>Surveyor-Lite</td>
    </tr>
  
    <tr>
      <td class="ship">Hull C</td>
      <td>Missing</td>
      <td>Stronghold</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Prospector</td>
      <td>Trommel</td>
      <td>Bulwark</td>
      <td>Snowfall</td>
      <td>Goliath</td>
      <td>CF-117 Bulldog</td>
      <td>Surveyor-Lite</td>
    </tr>
  
    <tr>
      <td class="ship">Reliant Kore</td>
      <td>IonBurst</td>
      <td>WEB</td>
      <td>ArcticStorm</td>
      <td>Rush</td>
      <td>CF-227 Badger</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">Reliant Mako</td>
      <td>IonBurst</td>
      <td>Shimmer</td>
      <td>HeatSafe</td>
      <td>Drift</td>
      <td>CF-227 Badger</td>
      <td>Pelerous</td>
    </tr>
  
    <tr>
      <td class="ship">Reliant Sen</td>
      <td>IonBurst</td>
      <td>Bulwark</td>
      <td>Thermax</td>
      <td>Goliath</td>
      <td>CF-227 Badger</td>
      <td>Surveyor-Lite</td>
    </tr>
  
    <tr>
      <td class="ship">Reliant Tana</td>
      <td>IonBurst</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Beacon</td>
      <td>CF-227 Badger</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Starfarer</td>
      <td>Ginzel</td>
      <td>Stronghold</td>
      <td>ThermalCore</td>
      <td>Kama</td>
      <td>Missing</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Starfarer Gemini</td>
      <td>SuperDrive</td>
      <td>Stronghold</td>
      <td>Mercury</td>
      <td>Pontes</td>
      <td>Missing</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Starlancer MAX</td>
      <td>LuxCore</td>
      <td>Stronghold</td>
      <td>AbsoluteZero</td>
      <td>SparkFire</td>
      <td>Missing</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Starlancer TAC</td>
      <td>Centurion</td>
      <td>Stronghold</td>
      <td>Blizzard</td>
      <td>SparkFire</td>
      <td>Missing</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">100i</td>
      <td>PowerBolt</td>
      <td>WEB</td>
      <td>ArcticStorm</td>
      <td>Expedition</td>
      <td>CF-337 Panther</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">125a</td>
      <td>Regulus</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Expedition</td>
      <td>CF-337 Panther</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">135c</td>
      <td>Fortitude</td>
      <td>Bulwark</td>
      <td>Thermax</td>
      <td>Expedition</td>
      <td>CF-337 Panther</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">300i</td>
      <td>PowerBolt</td>
      <td>WEB</td>
      <td>ArcticStorm</td>
      <td>Expedition</td>
      <td>M5A, SW16BR3 "Shredder"</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">315p</td>
      <td>SonicLite</td>
      <td>Shimmer</td>
      <td>HeatSafe</td>
      <td>Goliath</td>
      <td>SW16BR3 "Shredder"</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">325a</td>
      <td>Regulus</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Beacon</td>
      <td>M6A, SW16BR3 "Shredder"</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">350r</td>
      <td>SunFlare</td>
      <td>Targa</td>
      <td>QuikCool</td>
      <td>Eos</td>
      <td>M5A, CF-337 Panther</td>
      <td>SNS-R6</td>
    </tr>
  
    <tr>
      <td class="ship">400i</td>
      <td>Sedulity</td>
      <td>GUARD</td>
      <td>Snowfall</td>
      <td>Torrent</td>
      <td>CF-447 Rhino</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">600i</td>
      <td>Durango</td>
      <td>Stronghold</td>
      <td>FrostBurn</td>
      <td>Odyssey</td>
      <td>M7A</td>
      <td>Capsulo</td>
    </tr>
  
    <tr>
      <td class="ship">600i Executive Edition</td>
      <td>Durango</td>
      <td>Stronghold</td>
      <td>FrostBurn</td>
      <td>Odyssey</td>
      <td>M7A</td>
      <td>Capsulo</td>
    </tr>
  
    <tr>
      <td class="ship">600i Touring</td>
      <td>Durango</td>
      <td>Stronghold</td>
      <td>FrostBurn</td>
      <td>Odyssey</td>
      <td>M7A</td>
      <td>Capsulo</td>
    </tr>
  
    <tr>
      <td class="ship">85X Limited</td>
      <td>PowerBolt</td>
      <td>Targa</td>
      <td>IcePlunge</td>
      <td>Beacon</td>
      <td>CF-117 Bulldog</td>
      <td>SNS-R6</td>
    </tr>
  
    <tr>
      <td class="ship">890 Jump</td>
      <td>Missing</td>
      <td>Glacis</td>
      <td>Missing</td>
      <td>Allegro</td>
      <td>Missing</td>
      <td>BroadSpec-Max</td>
    </tr>
  
    <tr>
      <td class="ship">M50 Interceptor</td>
      <td>LumaCore</td>
      <td>Targa</td>
      <td>IcePlunge</td>
      <td>LightFire</td>
      <td>CF-227 Badger</td>
      <td>SNS-R6</td>
    </tr>
  
    <tr>
      <td class="ship">X1</td>
      <td>Radix</td>
      <td>Missing</td>
      <td>Fridan</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">X1 Force</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Fridan</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">X1 Velocity</td>
      <td>Radix</td>
      <td>Missing</td>
      <td>Fridan</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">Apollo Medivac</td>
      <td>FullForce</td>
      <td>STOP</td>
      <td>ColdSnap</td>
      <td>Odyssey</td>
      <td>CF-447 Rhino</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Apollo Triage</td>
      <td>FullForce</td>
      <td>STOP</td>
      <td>ColdSnap</td>
      <td>Odyssey</td>
      <td>CF-447 Rhino</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Aurora Mk I  LX</td>
      <td>LumaCore</td>
      <td>Targa</td>
      <td>QuikCool</td>
      <td>Eos</td>
      <td>CF-117 Bulldog</td>
      <td>SNS-R6</td>
    </tr>
  
    <tr>
      <td class="ship">Aurora Mk I CL</td>
      <td>Roughneck</td>
      <td>Bulwark</td>
      <td>Hydrocel</td>
      <td>Eos</td>
      <td>CF-117 Bulldog</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">Aurora Mk I ES</td>
      <td>ZapJet</td>
      <td>INK</td>
      <td>BlastChill</td>
      <td>Eos</td>
      <td>9-Series Longsword</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">Aurora Mk I LN</td>
      <td>Charger</td>
      <td>SecureHyde</td>
      <td>Bracer</td>
      <td>Eos</td>
      <td>CF-117 Bulldog</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Aurora Mk I MR</td>
      <td>Roughneck</td>
      <td>Bulwark</td>
      <td>Hydrocel</td>
      <td>Eos</td>
      <td>CF-117 Bulldog</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">Aurora Mk I SE</td>
      <td>Charger</td>
      <td>SecureHyde</td>
      <td>Bracer</td>
      <td>Eos</td>
      <td>CF-117 Bulldog</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Aurora Mk II</td>
      <td>PowerBolt</td>
      <td>5SA 'Rhada'</td>
      <td>Frost-Star</td>
      <td>Eos</td>
      <td>CF-227 Badger</td>
      <td>Capston</td>
    </tr>
  
    <tr>
      <td class="ship">Constellation Andromeda</td>
      <td>DayBreak</td>
      <td>5CA 'Akura'</td>
      <td>Frost-Star EX</td>
      <td>Bolon</td>
      <td>CF-557 Galdereen</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Constellation Aquila</td>
      <td>DayBreak</td>
      <td>5CA 'Akura'</td>
      <td>Frost-Star EX</td>
      <td>Bolon</td>
      <td>M7A</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Constellation Phoenix</td>
      <td>DayBreak</td>
      <td>5CA 'Akura'</td>
      <td>Frost-Star EX</td>
      <td>Bolon</td>
      <td>Omnisky XV</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Constellation Phoenix Emerald</td>
      <td>DayBreak</td>
      <td>5CA 'Akura'</td>
      <td>Frost-Star EX</td>
      <td>Bolon</td>
      <td>Omnisky XV</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Constellation Taurus</td>
      <td>Diligence</td>
      <td>Stronghold</td>
      <td>CoolCore</td>
      <td>Bolon</td>
      <td>CF-557 Galdereen</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Hermes</td>
      <td>FullForce</td>
      <td>STOP</td>
      <td>ColdSnap</td>
      <td>Odyssey</td>
      <td>CF-447 Rhino</td>
      <td>Chernykh</td>
    </tr>
  
    <tr>
      <td class="ship">Mantis</td>
      <td>Regulus</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Beacon</td>
      <td>FL-33</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Meteor</td>
      <td>Regulus</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Beacon</td>
      <td>FL-33, Leonids</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Perseus</td>
      <td>Centurion</td>
      <td>SureStop</td>
      <td>Mercury</td>
      <td>Pontes</td>
      <td>Missing</td>
      <td>Epier</td>
    </tr>
  
    <tr>
      <td class="ship">Polaris</td>
      <td>Stellate</td>
      <td>Glacis</td>
      <td>Serac</td>
      <td>Erebos</td>
      <td>Missing</td>
      <td>Polaris radar</td>
    </tr>
  
    <tr>
      <td class="ship">Salvation</td>
      <td>Fortitude</td>
      <td>Bulwark</td>
      <td>Eco-Flow</td>
      <td>Colossus</td>
      <td>CF-117 Bulldog</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Scorpius</td>
      <td>Regulus</td>
      <td>FullStop</td>
      <td>Polar</td>
      <td>Eos</td>
      <td>CF-337 Panther</td>
      <td>Observer-Lite</td>
    </tr>
  
    <tr>
      <td class="ship">Scorpius Antares</td>
      <td>Regulus</td>
      <td>FullStop</td>
      <td>Polar</td>
      <td>Eos</td>
      <td>CF-337 Panther</td>
      <td>Observer-Lite</td>
    </tr>
  
    <tr>
      <td class="ship">Zeus Mk II CL</td>
      <td>Diligence</td>
      <td>Aspis</td>
      <td>CoolCore</td>
      <td>Khaos</td>
      <td>Omnisky XII</td>
      <td>Surveyor</td>
    </tr>
  
    <tr>
      <td class="ship">Zeus Mk II ES</td>
      <td>FullForce</td>
      <td>5MA 'Chimalli'</td>
      <td>ColdSnap</td>
      <td>Khaos</td>
      <td>Omnisky XII</td>
      <td>Lephari</td>
    </tr>
  
    <tr>
      <td class="ship">Scythe</td>
      <td>Fierell Cascade</td>
      <td>AllStop</td>
      <td>Bracer</td>
      <td>Beacon</td>
      <td>Missing</td>
      <td>Ecouter</td>
    </tr>
  
    <tr>
      <td class="ship">Ballista</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Ballista Dunestalker</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Ballista Snowblind</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Centurion</td>
      <td>Defiant, OverDrive</td>
      <td>Castra</td>
      <td>Cryo-Star SL, Frost-Star</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Spartan</td>
      <td>Defiant</td>
      <td>Castra</td>
      <td>Cryo-Star SL</td>
      <td>Missing</td>
      <td>Unknown</td>
      <td>Sens</td>
    </tr>
  
    <tr>
      <td class="ship">CSV-SM</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
    </tr>
  
    <tr>
      <td class="ship">Mule</td>
      <td>Steadfast</td>
      <td>Missing</td>
      <td>Winter-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">MDC</td>
      <td>Defiant</td>
      <td>PIN</td>
      <td>Cryo-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">MTC</td>
      <td>Defiant</td>
      <td>PIN</td>
      <td>Cryo-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">PTV</td>
      <td>Radix</td>
      <td>Missing</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Missing</td>
    </tr>
  
    <tr>
      <td class="ship">ROC</td>
      <td>Steadfast</td>
      <td>Missing</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Surveyor-Go</td>
    </tr>
  
    <tr>
      <td class="ship">ROC-DS</td>
      <td>Steadfast</td>
      <td>Missing</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Surveyor-Go</td>
    </tr>
  
    <tr>
      <td class="ship">STV</td>
      <td>Radix</td>
      <td>Missing</td>
      <td>Cryo-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Denning</td>
    </tr>
  
    <tr>
      <td class="ship">Lynx</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Ursa</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Ursa Fortuna</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Ursa Medivac</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Cyclone</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Cyclone AA</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Cyclone MT</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Cyclone RC</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Cyclone RN</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Cyclone TR</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Nova</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Storm</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    <tr>
      <td class="ship">Storm AA</td>
      <td>Radix</td>
      <td>PIN</td>
      <td>Frost-Star SL</td>
      <td>Missing</td>
      <td>Missing</td>
      <td>Prevenir</td>
    </tr>
  
    </tbody>
  </table>

</body>
</html>
