/**
 * Centralized, Versioned, and Resilient Local Persistence Engine
 * 
 * Manages all browser-side local development state, offline queues,
 * and user preferences with corruption recovery and schema migration.
 */

export const LOCAL_STORAGE_VERSION = 1
const STORAGE_PREFIX = 'dubai_platform_v'

export interface LocalUserState {
  shortlistIds: string[]
  comparisonIds: string[]
  savedSearches: Array<{
    id: string
    name: string
    filters: Record<string, string | number | boolean | undefined>
    created_at: string
  }>
  viewingRequests: Array<{
    id: string
    property_id: string
    property_title?: string
    client_name: string
    client_email: string
    client_phone: string
    requested_date: string
    time_slot: string
    notes?: string
    status: 'NEW' | 'CONTACTED' | 'SCHEDULED' | 'COMPLETED' | 'CANCELLED'
    created_at: string
  }>
  clientIntakes: Array<{
    id: string
    service_category: string
    strategic_objective: string
    budget_tier: string
    target_location: string
    timeline: string
    client_name: string
    client_email: string
    client_phone: string
    tax_residency: string
    notes?: string
    status: string
    created_at: string
  }>
  crmLeads: Array<{
    id: string
    first_name: string
    last_name?: string
    email: string
    phone?: string
    source: string
    budget_min?: number | null
    budget_max?: number | null
    notes?: string
    status: string
    created_at: string
  }>
  localAuditLogs: Array<{
    id: string
    actor: string
    action: string
    entity: string
    entity_id: string
    timestamp: string
    metadata?: Record<string, unknown>
  }>
}

const DEFAULT_STATE: LocalUserState = {
  shortlistIds: [],
  comparisonIds: [],
  savedSearches: [],
  viewingRequests: [],
  clientIntakes: [],
  crmLeads: [],
  localAuditLogs: [],
}

class LocalStorageEngine {
  private key = `${STORAGE_PREFIX}${LOCAL_STORAGE_VERSION}`

  private isAvailable(): boolean {
    if (typeof window === 'undefined') return false
    try {
      const testKey = '__storage_test__'
      window.localStorage.setItem(testKey, testKey)
      window.localStorage.removeItem(testKey)
      return true
    } catch {
      return false
    }
  }

  public getState(): LocalUserState {
    if (!this.isAvailable()) {
      return { ...DEFAULT_STATE }
    }

    try {
      const raw = window.localStorage.getItem(this.key)
      if (!raw) {
        // Check for legacy unversioned keys and migrate
        return this.migrateLegacyData()
      }

      const parsed = JSON.parse(raw) as Partial<LocalUserState>
      return {
        shortlistIds: Array.isArray(parsed.shortlistIds) ? parsed.shortlistIds : [],
        comparisonIds: Array.isArray(parsed.comparisonIds) ? parsed.comparisonIds : [],
        savedSearches: Array.isArray(parsed.savedSearches) ? parsed.savedSearches : [],
        viewingRequests: Array.isArray(parsed.viewingRequests) ? parsed.viewingRequests : [],
        clientIntakes: Array.isArray(parsed.clientIntakes) ? parsed.clientIntakes : [],
        crmLeads: Array.isArray(parsed.crmLeads) ? parsed.crmLeads : [],
        localAuditLogs: Array.isArray(parsed.localAuditLogs) ? parsed.localAuditLogs : [],
      }
    } catch (err) {
      console.warn('[LocalStorageEngine] Recovering from corrupted state:', err)
      return { ...DEFAULT_STATE }
    }
  }

  public setState(updater: (prev: LocalUserState) => LocalUserState): boolean {
    if (!this.isAvailable()) return false

    try {
      const current = this.getState()
      const updated = updater(current)
      window.localStorage.setItem(this.key, JSON.stringify(updated))
      return true
    } catch (err) {
      console.error('[LocalStorageEngine] Failed to persist state (quota or storage error):', err)
      return false
    }
  }

  private migrateLegacyData(): LocalUserState {
    const state: LocalUserState = { ...DEFAULT_STATE }
    try {
      // Legacy shortlist
      const legacyShortlist = window.localStorage.getItem('dubai_shortlist')
      if (legacyShortlist) state.shortlistIds = JSON.parse(legacyShortlist)

      // Legacy comparison
      const legacyComp = window.localStorage.getItem('dubai_comparison')
      if (legacyComp) state.comparisonIds = JSON.parse(legacyComp)

      // Legacy saved searches
      const legacySearches = window.localStorage.getItem('dubai_saved_searches')
      if (legacySearches) state.savedSearches = JSON.parse(legacySearches)

      // Legacy leads
      const legacyLeads = window.localStorage.getItem('dubai_crm_leads')
      if (legacyLeads) state.crmLeads = JSON.parse(legacyLeads)

      // Save into new versioned store
      window.localStorage.setItem(this.key, JSON.stringify(state))
    } catch {
      // Fallback cleanly on parse error
    }
    return state
  }

  // --- SHORTLIST OPERATIONS ---
  public toggleShortlist(propertyId: string): string[] {
    let result: string[] = []
    this.setState((prev) => {
      const exists = prev.shortlistIds.includes(propertyId)
      const shortlistIds = exists
        ? prev.shortlistIds.filter((id) => id !== propertyId)
        : [...prev.shortlistIds, propertyId]
      result = shortlistIds
      return { ...prev, shortlistIds }
    })
    this.logAudit('USER', existsInArray(result, propertyId) ? 'SHORTLIST_ADD' : 'SHORTLIST_REMOVE', 'property', propertyId)
    return result
  }

  public getShortlist(): string[] {
    return this.getState().shortlistIds
  }

  // --- COMPARISON OPERATIONS ---
  public toggleComparison(propertyId: string, maxLimit = 4): string[] {
    let result: string[] = []
    this.setState((prev) => {
      const exists = prev.comparisonIds.includes(propertyId)
      let comparisonIds: string[]
      if (exists) {
        comparisonIds = prev.comparisonIds.filter((id) => id !== propertyId)
      } else {
        comparisonIds = prev.comparisonIds.length < maxLimit
          ? [...prev.comparisonIds, propertyId]
          : prev.comparisonIds
      }
      result = comparisonIds
      return { ...prev, comparisonIds }
    })
    return result
  }

  // --- SAVED SEARCHES ---
  public saveSearch(name: string, filters: Record<string, string | number | boolean | undefined>): void {
    const searchRecord = {
      id: `search-${Date.now()}`,
      name,
      filters,
      created_at: new Date().toISOString(),
    }
    this.setState((prev) => ({
      ...prev,
      savedSearches: [searchRecord, ...prev.savedSearches.filter((s) => s.name !== name)],
    }))
    this.logAudit('USER', 'SAVED_SEARCH_CREATE', 'saved_search', searchRecord.id, { name })
  }

  public removeSavedSearch(id: string): void {
    this.setState((prev) => ({
      ...prev,
      savedSearches: prev.savedSearches.filter((s) => s.id !== id),
    }))
    this.logAudit('USER', 'SAVED_SEARCH_DELETE', 'saved_search', id)
  }

  // --- CRM & INTAKES ---
  public saveCrmLead(lead: {
    first_name: string
    last_name?: string
    email: string
    phone?: string
    source: string
    notes?: string
    status?: string
    budget_min?: number | null
    budget_max?: number | null
  }): void {
    const leadRecord = {
      id: `lead-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      first_name: lead.first_name,
      last_name: lead.last_name,
      email: lead.email,
      phone: lead.phone,
      source: lead.source,
      notes: lead.notes,
      status: lead.status || 'NEW',
      budget_min: lead.budget_min,
      budget_max: lead.budget_max,
      created_at: new Date().toISOString(),
    }
    this.setState((prev) => ({
      ...prev,
      crmLeads: [leadRecord, ...prev.crmLeads],
    }))
    this.logAudit('USER', 'CRM_LEAD_CREATE', 'lead', leadRecord.id, { email: lead.email, source: lead.source })
  }

  public saveClientIntake(intake: {
    service_category: string
    strategic_objective: string
    budget_tier: string
    target_location: string
    timeline: string
    client_name: string
    client_email: string
    client_phone: string
    tax_residency: string
    notes?: string
    status?: string
  }): void {
    const intakeRecord = {
      id: `intake-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      ...intake,
      status: intake.status || 'CONFIDENTIAL_QUEUE',
      created_at: new Date().toISOString(),
    }
    this.setState((prev) => ({
      ...prev,
      clientIntakes: [intakeRecord, ...prev.clientIntakes],
    }))
    this.logAudit('USER', 'CLIENT_INTAKE_CREATE', 'intake', intakeRecord.id, { client_name: intake.client_name })
  }

  // --- AUDIT LOGGING ---
  public logAudit(actor: string, action: string, entity: string, entity_id: string, metadata?: Record<string, unknown>): void {
    const auditRecord = {
      id: `audit-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      actor,
      action,
      entity,
      entity_id,
      timestamp: new Date().toISOString(),
      metadata,
    }
    this.setState((prev) => ({
      ...prev,
      localAuditLogs: [auditRecord, ...prev.localAuditLogs.slice(0, 99)], // keep last 100
    }))
  }
}

function existsInArray(arr: string[], item: string): boolean {
  return arr.includes(item)
}

export const LocalStore = new LocalStorageEngine()
