import fs from 'fs'
import path from 'path'

const dir = path.resolve('artifacts/lighthouse-prod')

function extractReport(filePath, mode, runNum) {
  if (!fs.existsSync(filePath)) {
    return { error: `File not found: ${filePath}` }
  }
  const report = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  const pScore = Math.round(report.categories?.performance?.score * 100)
  const aScore = Math.round(report.categories?.accessibility?.score * 100)
  const bScore = Math.round(report.categories?.['best-practices']?.score * 100)
  const sScore = Math.round(report.categories?.seo?.score * 100)

  const lcp = report.audits?.['largest-contentful-paint']?.numericValue || 0
  const fcp = report.audits?.['first-contentful-paint']?.numericValue || 0
  const cls = report.audits?.['cumulative-layout-shift']?.numericValue || 0
  const tbt = report.audits?.['total-blocking-time']?.numericValue || 0

  const lcpAudit = report.audits?.['largest-contentful-paint-element']
  const lcpElement =
    lcpAudit?.details?.items?.[0]?.items?.[0]?.node?.snippet ||
    lcpAudit?.details?.items?.[0]?.node?.snippet ||
    'N/A'

  const phases = {}
  const rawPhases = lcpAudit?.details?.items?.[1]?.items || []
  for (const item of rawPhases) {
    phases[item.phase] = {
      timingMs: Math.round(item.timing),
      percent: item.percent,
    }
  }

  const finalUrl = report.finalUrl || report.requestedUrl
  const fetchTime = report.fetchTime
  const runtimeError = report.runtimeError || null

  return {
    mode,
    run: runNum,
    fetchTime,
    finalUrl,
    scores: {
      performance: pScore,
      accessibility: aScore,
      bestPractices: bScore,
      seo: sScore,
    },
    metrics: {
      lcpMs: Math.round(lcp),
      fcpMs: Math.round(fcp),
      cls: Number(cls.toFixed(3)),
      tbtMs: Math.round(tbt),
    },
    lcpElement,
    lcpPhases: {
      ttfb: phases['TTFB'] || { timingMs: 0, percent: '0%' },
      loadDelay: phases['Load Delay'] || { timingMs: 0, percent: '0%' },
      loadTime: phases['Load Time'] || { timingMs: 0, percent: '0%' },
      renderDelay: phases['Render Delay'] || { timingMs: 0, percent: '0%' },
    },
    runtimeError,
  }
}

const median = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b)
  return sorted[Math.floor(sorted.length / 2)]
}

const computeSummary = (runs, mode) => {
  return {
    mode,
    runs,
    median: {
      performance: median(runs.map(r => r.scores.performance)),
      accessibility: median(runs.map(r => r.scores.accessibility)),
      bestPractices: median(runs.map(r => r.scores.bestPractices)),
      seo: median(runs.map(r => r.scores.seo)),
      lcpMs: median(runs.map(r => r.metrics.lcpMs)),
      fcpMs: median(runs.map(r => r.metrics.fcpMs)),
      cls: median(runs.map(r => r.metrics.cls)),
      tbtMs: median(runs.map(r => r.metrics.tbtMs)),
      lcpElement: runs[0].lcpElement,
      ttfbMs: median(runs.map(r => r.lcpPhases.ttfb.timingMs)),
      loadDelayMs: median(runs.map(r => r.lcpPhases.loadDelay.timingMs)),
      loadTimeMs: median(runs.map(r => r.lcpPhases.loadTime.timingMs)),
      renderDelayMs: median(runs.map(r => r.lcpPhases.renderDelay.timingMs)),
    }
  }
}

const mobileRunsBatch1 = [1, 2, 3].map(i => extractReport(path.join(dir, `mobile-${i}.json`), 'mobile', i))
const desktopRunsBatch1 = [1, 2, 3].map(i => extractReport(path.join(dir, `desktop-${i}.json`), 'desktop', i))

const mobileRunsBatch2 = [4, 5, 6].map(i => extractReport(path.join(dir, `mobile-${i}.json`), 'mobile', i))
const desktopRunsBatch2 = [4, 5, 6].map(i => extractReport(path.join(dir, `desktop-${i}.json`), 'desktop', i))

const allMobileRuns = [...mobileRunsBatch1, ...mobileRunsBatch2]
const allDesktopRuns = [...desktopRunsBatch1, ...desktopRunsBatch2]

const summaryBatch1 = {
  mobile: computeSummary(mobileRunsBatch1, 'mobile'),
  desktop: computeSummary(desktopRunsBatch1, 'desktop'),
}

const summaryBatch2 = {
  mobile: computeSummary(mobileRunsBatch2, 'mobile'),
  desktop: computeSummary(desktopRunsBatch2, 'desktop'),
}

const summaryOverall = {
  mobile: computeSummary(allMobileRuns, 'mobile'),
  desktop: computeSummary(allDesktopRuns, 'desktop'),
}

console.log('=== BATCH 1 (RUNS 1-3) MOBILE SUMMARY ===')
console.log(JSON.stringify(summaryBatch1.mobile, null, 2))

console.log('\n=== BATCH 1 (RUNS 1-3) DESKTOP SUMMARY ===')
console.log(JSON.stringify(summaryBatch1.desktop, null, 2))

console.log('\n=== BATCH 2 (RUNS 4-6) MOBILE SUMMARY ===')
console.log(JSON.stringify(summaryBatch2.mobile, null, 2))

console.log('\n=== BATCH 2 (RUNS 4-6) DESKTOP SUMMARY ===')
console.log(JSON.stringify(summaryBatch2.desktop, null, 2))

console.log('\n=== OVERALL 6-RUN MEDIAN SUMMARY ===')
console.log(JSON.stringify(summaryOverall, null, 2))

fs.writeFileSync(path.join(dir, 'summary_all.json'), JSON.stringify({
  batch1: summaryBatch1,
  batch2: summaryBatch2,
  overall: summaryOverall
}, null, 2))
