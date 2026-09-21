#!/bin/bash
set -e
cd "$(dirname "$0")"

echo "Fetching ship data from cdn.erkul.games..."
node fetch_cdn.js

echo ""
git add ships_cdn.json

if git diff --staged --quiet; then
  echo "No changes in ship data."
  exit 0
fi

VERSION=$(node -e "const d=require('./ships_cdn.json'); console.log(d[0]?.dataVersion || '')" 2>/dev/null || echo "")
MSG="Update ship data${VERSION:+ (v$VERSION)}"

git commit -m "$MSG"
git push
echo "Ship data updated and pushed."
