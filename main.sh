#!/bin/bash

echo "Starting data download and HTML generation..."
echo ""

echo "Fetching game data from cdn.erkul.games..."
python3 fetch_cdn.py

echo ""
echo "Generating HTML from data..."
node transform.js

echo ""
echo "Done! Open index.html in your browser to view the results."
