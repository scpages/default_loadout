# Default Ship Loadout Generator

Fetches ship loadout data from the Erkul CDN and generates a static HTML page listing all ships with their default components.

Live at: **https://scpages.github.io/default-loadouts/**

## Workflow

```bash
# Generate HTML from local data files
bash main.sh

# Fetch fresh data from Erkul CDN, then commit + push
bash update_loadouts.sh
```

`main.sh` only reads local files and regenerates `index.html`.
`update_loadouts.sh` fetches from the Erkul CDN and pushes if data changed.

## Data Sources

- **Default Ships**: [Erkul CDN](https://cdn.erkul.games/LIVE/) — compressed binary JSON blobs
- **Wikelo Modified Ships**: Manually maintained in `ships_wikelo.json`
- **Executive Hangar Ships**: Manually maintained in `ships_exec-hangar.json`

Wikelo ships spreadsheet:
https://docs.google.com/spreadsheets/d/1ji0q_pp6iW35RG1YyFEsv-lsmZOaCStJXGdIEdLLwhM/edit?gid=481073732#gid=481073732
