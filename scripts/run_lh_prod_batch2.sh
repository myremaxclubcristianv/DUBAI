#!/usr/bin/env bash
set -e

mkdir -p artifacts/lighthouse-prod

echo "=========================================================="
echo "RUNNING BATCH 2 (RUNS 4, 5, 6) OF PRODUCTION LIGHTHOUSE"
echo "=========================================================="

for i in 4 5 6; do
  echo ""
  echo ">>> [Mobile Run #$i] Starting audit..."
  npx lighthouse https://dubai.cristianvaduva.com \
    --only-categories=performance,accessibility,best-practices,seo \
    --form-factor=mobile \
    --throttling-method=simulate \
    --output=json \
    --output-path="artifacts/lighthouse-prod/mobile-${i}.json" \
    --chrome-flags="--headless=new --no-sandbox" \
    --quiet
  echo ">>> [Mobile Run #$i] Completed. Saved to artifacts/lighthouse-prod/mobile-${i}.json"
  sleep 3
done

for i in 4 5 6; do
  echo ""
  echo ">>> [Desktop Run #$i] Starting audit..."
  npx lighthouse https://dubai.cristianvaduva.com \
    --only-categories=performance,accessibility,best-practices,seo \
    --preset=desktop \
    --output=json \
    --output-path="artifacts/lighthouse-prod/desktop-${i}.json" \
    --chrome-flags="--headless=new --no-sandbox" \
    --quiet
  echo ">>> [Desktop Run #$i] Completed. Saved to artifacts/lighthouse-prod/desktop-${i}.json"
  sleep 3
done

echo ""
echo "Batch 2 completed successfully."
