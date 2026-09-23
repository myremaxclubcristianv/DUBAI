import { ProvenanceMetadata } from '@/types/provenance'

export type DataQualityStatus =
  | 'VERIFIED'
  | 'SOURCE_AUDITED'
  | 'SOURCE_MISSING'
  | 'STALE_DATA'
  | 'CONFLICTING_DATA'
  | 'PRICE_ON_REQUEST'
  | 'CALCULATED'

export interface QualityReport {
  entityId: string
  entityType: 'property' | 'project' | 'developer' | 'area' | 'lifestyle' | 'regulation'
  status: DataQualityStatus
  sourcePresent: boolean
  sourceUrlPresent: boolean
  verifiedAtPresent: boolean
  requiredFieldsComplete: boolean
  isStale: boolean
  issues: string[]
}

/**
 * Known official publisher domain patterns for verification checks
 */
const OFFICIAL_DOMAIN_PATTERNS = [
  '.gov.ae',
  'dubailand.gov.ae',
  'icp.gov.ae',
  'tax.gov.ae',
  'dcaa.gov.ae',
  'pcfc.ae',
  'michelin.com',
]

/**
 * Evaluates entity data quality without arbitrary pseudo-precision confidence numbers.
 * 
 * AUDIT POLICIES:
 * 1. 180-Day Audit Cycle: An internal platform data freshness standard requiring periodic re-audit.
 *    (Note: This is an application-level operational governance rule, not a universal statutory mandate).
 * 2. Source Provenance: An entity cannot be marked 'VERIFIED' without a verified source name,
 *    official URL, and valid verification timestamp.
 */
export function evaluateDataQuality(
  entityId: string,
  entityType: 'property' | 'project' | 'developer' | 'area' | 'lifestyle' | 'regulation',
  data: Record<string, unknown>,
  provenance?: ProvenanceMetadata
): QualityReport {
  const issues: string[] = []

  const sourcePresent = Boolean(provenance?.source_name && provenance.source_name.trim() !== '')
  const sourceUrlPresent = Boolean(provenance?.source_url && provenance.source_url.trim() !== '')
  const verifiedAtPresent = Boolean(provenance?.verified_at && provenance.verified_at.trim() !== '')

  if (!sourcePresent) issues.push('Source name is missing from entity provenance')
  if (!sourceUrlPresent) issues.push('Official source URL is not documented')
  if (!verifiedAtPresent) issues.push('Last verification timestamp is missing')

  // Check URL authenticity
  let isOfficialDomain = false
  if (provenance?.source_url) {
    try {
      const parsedUrl = new URL(provenance.source_url)
      isOfficialDomain = OFFICIAL_DOMAIN_PATTERNS.some((domain) => parsedUrl.hostname.includes(domain))
    } catch {
      issues.push('Source URL format is invalid')
    }
  }

  // Check staleness (internal platform 180-day review cycle)
  let isStale = false
  if (provenance?.verified_at) {
    const verifiedDate = new Date(provenance.verified_at).getTime()
    if (isNaN(verifiedDate)) {
      issues.push('Verification timestamp date format is unparseable')
    } else {
      const ageDays = (Date.now() - verifiedDate) / (1000 * 60 * 60 * 24)
      if (ageDays > 180) {
        isStale = true
        issues.push(`Data verification is ${Math.round(ageDays)} days old (exceeds platform 180-day review standard)`)
      }
    }
  }

  // Required physical specifications check
  let requiredFieldsComplete = true
  if (entityType === 'property') {
    if (!data.title || !data.area_name || !data.bedrooms || !data.bathrooms || !data.internal_area_sqft) {
      requiredFieldsComplete = false
      issues.push('Required property physical specifications are incomplete')
    }
  }

  // Determine truthful factual quality status
  let status: DataQualityStatus = 'SOURCE_AUDITED'
  if (!sourcePresent) {
    status = 'SOURCE_MISSING'
  } else if (isStale) {
    status = 'STALE_DATA'
  } else if (requiredFieldsComplete && sourcePresent && sourceUrlPresent && verifiedAtPresent && isOfficialDomain) {
    status = 'VERIFIED'
  }

  return {
    entityId,
    entityType,
    status,
    sourcePresent,
    sourceUrlPresent,
    verifiedAtPresent,
    requiredFieldsComplete,
    isStale,
    issues,
  }
}
