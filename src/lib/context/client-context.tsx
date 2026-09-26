'use client'

import * as React from 'react'
import { useToast } from '@/components/ui/toast'

export interface SavedSearchItem {
  id: string
  name: string
  filters: Record<string, string | number | boolean | undefined>
  criteria?: Record<string, string | number | boolean | undefined>
  saved_at: string
  created_at?: string
}

export interface ClientViewingRequest {
  id: string
  property_id: string
  property_title: string
  area_name?: string
  client_name: string
  client_email: string
  client_phone: string
  requested_date: string
  time_slot: string
  notes?: string
  created_at: string
  status: 'REQUESTED' | 'PREPARED_LOCALLY' | 'CONFIRMED'
}

export type SupportedCurrency = 'AED' | 'USD' | 'EUR' | 'GBP'

interface ClientContextType {
  currency: SupportedCurrency
  setCurrency: (c: SupportedCurrency) => void
  formatCurrency: (amountAed: number | undefined | null) => string
  shortlist: string[]
  shortlistIds: string[]
  comparisonIds: string[]
  savedSearches: SavedSearchItem[]
  viewingRequests: ClientViewingRequest[]
  toggleShortlist: (propertyId: string, propertyTitle?: string) => void
  isShortlisted: (propertyId: string) => boolean
  removeFromShortlist: (propertyId: string) => void
  clearShortlist: () => void
  toggleComparison: (propertyId: string, propertyTitle?: string) => boolean
  isCompared: (propertyId: string) => boolean
  isInComparison: (propertyId: string) => boolean
  removeFromComparison: (propertyId: string) => void
  clearComparison: () => void
  saveSearch: (name: string, filters: Record<string, string | number | boolean | undefined>) => void
  removeSearch: (id: string) => void
  removeSavedSearch: (id: string) => void
  addViewingRequest: (request: Omit<ClientViewingRequest, 'id' | 'created_at' | 'status'>) => void
}

function useLocalStorage<T>(key: string, defaultValue: T): [T, (updater: T | ((prev: T) => T)) => void] {
  const subscribe = React.useCallback((callback: () => void) => {
    const handler = () => callback()
    window.addEventListener('storage', handler)
    window.addEventListener(`local-storage-${key}`, handler)
    return () => {
      window.removeEventListener('storage', handler)
      window.removeEventListener(`local-storage-${key}`, handler)
    }
  }, [key])

  const getSnapshot = React.useCallback(() => {
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  }, [key])

  const getServerSnapshot = React.useCallback(() => null, [])

  const raw = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const value = React.useMemo(() => {
    if (!raw) return defaultValue
    try {
      return JSON.parse(raw) as T
    } catch {
      return defaultValue
    }
  }, [raw, defaultValue])

  const setValue = React.useCallback(
    (updater: T | ((prev: T) => T)) => {
      try {
        const currentRaw = localStorage.getItem(key)
        const currentVal = currentRaw ? (JSON.parse(currentRaw) as T) : defaultValue
        const nextVal = typeof updater === 'function' ? (updater as (prev: T) => T)(currentVal) : updater
        localStorage.setItem(key, JSON.stringify(nextVal))
        window.dispatchEvent(new Event(`local-storage-${key}`))
      } catch {}
    },
    [key, defaultValue]
  )

  return [value, setValue]
}

const EMPTY_STRINGS: string[] = []
const EMPTY_SEARCHES: SavedSearchItem[] = []
const EMPTY_VIEWINGS: ClientViewingRequest[] = []

const ClientContext = React.createContext<ClientContextType | undefined>(undefined)

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const { addToast } = useToast()

  const [currency, setCurrency] = useLocalStorage<SupportedCurrency>('dubai_client_currency', 'AED')
  const [shortlistIds, setShortlistIds] = useLocalStorage<string[]>('dubai_client_shortlist', EMPTY_STRINGS)
  const [comparisonIds, setComparisonIds] = useLocalStorage<string[]>('dubai_client_comparison', EMPTY_STRINGS)
  const [savedSearches, setSavedSearches] = useLocalStorage<SavedSearchItem[]>('dubai_saved_searches', EMPTY_SEARCHES)
  const [viewingRequests, setViewingRequests] = useLocalStorage<ClientViewingRequest[]>('dubai_viewing_requests', EMPTY_VIEWINGS)

  const formatCurrency = React.useCallback(
    (amountAed: number | undefined | null) => {
      if (amountAed === undefined || amountAed === null || isNaN(amountAed)) {
        return 'Price On Request'
      }

      switch (currency) {
        case 'USD': {
          const usdVal = Math.round(amountAed / 3.6725)
          return `$${usdVal.toLocaleString('en-US')}`
        }
        case 'EUR': {
          const eurVal = Math.round(amountAed / 4.0)
          return `€${eurVal.toLocaleString('en-US')}`
        }
        case 'GBP': {
          const gbpVal = Math.round(amountAed / 4.7)
          return `£${gbpVal.toLocaleString('en-US')}`
        }
        case 'AED':
        default:
          return `AED ${amountAed.toLocaleString('en-US')}`
      }
    },
    [currency]
  )

  const toggleShortlist = React.useCallback(
    (propertyId: string, propertyTitle?: string) => {
      setShortlistIds((prev) => {
        const exists = prev.includes(propertyId)
        let next: string[]
        if (exists) {
          next = prev.filter((id) => id !== propertyId)
          addToast({
            title: 'Removed from Saved Properties',
            description: propertyTitle ? `${propertyTitle} removed from local device.` : undefined,
            type: 'info',
          })
        } else {
          next = [...prev, propertyId]
          addToast({
            title: 'Property Saved to Local Device',
            description: propertyTitle ? `${propertyTitle} saved locally on this browser.` : 'Saved locally on this device.',
            type: 'success',
          })
        }
        try {
          localStorage.setItem('dubai_client_shortlist', JSON.stringify(next))
        } catch {}
        return next
      })
    },
    [addToast, setShortlistIds]
  )

  const isShortlisted = React.useCallback((id: string) => shortlistIds.includes(id), [shortlistIds])

  const removeFromShortlist = React.useCallback(
    (propertyId: string) => {
      setShortlistIds((prev) => {
        const next = prev.filter((id) => id !== propertyId)
        try {
          localStorage.setItem('dubai_client_shortlist', JSON.stringify(next))
        } catch {}
        return next
      })
    },
    [setShortlistIds]
  )

  const clearShortlist = React.useCallback(() => {
    setShortlistIds([])
    try {
      localStorage.removeItem('dubai_client_shortlist')
    } catch {}
    addToast({ title: 'Shortlist Cleared', type: 'info' })
  }, [addToast, setShortlistIds])

  const toggleComparison = React.useCallback(
    (propertyId: string, propertyTitle?: string): boolean => {
      let added = false
      setComparisonIds((prev) => {
        const exists = prev.includes(propertyId)
        let next: string[]
        if (exists) {
          next = prev.filter((id) => id !== propertyId)
          addToast({
            title: 'Removed from Comparison',
            description: propertyTitle ? `${propertyTitle} removed.` : undefined,
            type: 'info',
          })
        } else {
          if (prev.length >= 4) {
            addToast({
              title: 'Comparison Limit Reached',
              description: 'You can compare up to 4 properties at a time.',
              type: 'warning',
            })
            return prev
          }
          next = [...prev, propertyId]
          added = true
          addToast({
            title: 'Added to Comparison Desk',
            description: propertyTitle ? `${propertyTitle} added (Total: ${next.length}/4).` : `Total: ${next.length}/4.`,
            type: 'success',
          })
        }
        try {
          localStorage.setItem('dubai_client_comparison', JSON.stringify(next))
        } catch {}
        return next
      })
      return added
    },
    [addToast, setComparisonIds]
  )

  const isCompared = React.useCallback((id: string) => comparisonIds.includes(id), [comparisonIds])
  const isInComparison = isCompared

  const removeFromComparison = React.useCallback(
    (propertyId: string) => {
      setComparisonIds((prev) => {
        const next = prev.filter((id) => id !== propertyId)
        try {
          localStorage.setItem('dubai_client_comparison', JSON.stringify(next))
        } catch {}
        return next
      })
    },
    [setComparisonIds]
  )

  const clearComparison = React.useCallback(() => {
    setComparisonIds([])
    try {
      localStorage.removeItem('dubai_client_comparison')
    } catch {}
    addToast({ title: 'Comparison Cleared', type: 'info' })
  }, [addToast, setComparisonIds])

  const saveSearch = React.useCallback(
    (name: string, filters: Record<string, string | number | boolean | undefined>) => {
      const now = new Date().toISOString()
      const newItem: SavedSearchItem = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        filters,
        criteria: filters,
        saved_at: now,
        created_at: now,
      }
      setSavedSearches((prev) => {
        const next = [newItem, ...prev]
        try {
          localStorage.setItem('dubai_saved_searches', JSON.stringify(next))
        } catch {}
        return next
      })
      addToast({
        title: 'Search Query Saved',
        description: `"${name}" saved to local device.`,
        type: 'success',
      })
    },
    [addToast, setSavedSearches]
  )

  const removeSearch = React.useCallback(
    (id: string) => {
      setSavedSearches((prev) => {
        const next = prev.filter((s) => s.id !== id)
        try {
          localStorage.setItem('dubai_saved_searches', JSON.stringify(next))
        } catch {}
        return next
      })
      addToast({ title: 'Saved Search Removed', type: 'info' })
    },
    [addToast, setSavedSearches]
  )
  const removeSavedSearch = removeSearch

  const addViewingRequest = React.useCallback(
    (request: Omit<ClientViewingRequest, 'id' | 'created_at' | 'status'>) => {
      const newItem: ClientViewingRequest = {
        ...request,
        id: Math.random().toString(36).substring(2, 9),
        created_at: new Date().toISOString(),
        status: 'PREPARED_LOCALLY',
      }
      setViewingRequests((prev) => {
        const next = [newItem, ...prev]
        try {
          localStorage.setItem('dubai_viewing_requests', JSON.stringify(next))
        } catch {}
        return next
      })
      addToast({
        title: 'Viewing Request Prepared',
        description: `Scheduled for ${request.requested_date} (${request.time_slot}).`,
        type: 'success',
      })
    },
    [addToast, setViewingRequests]
  )

  return (
    <ClientContext.Provider
      value={{
        currency,
        setCurrency,
        formatCurrency,
        shortlist: shortlistIds,
        shortlistIds,
        comparisonIds,
        savedSearches,
        viewingRequests,
        toggleShortlist,
        isShortlisted,
        removeFromShortlist,
        clearShortlist,
        toggleComparison,
        isCompared,
        isInComparison,
        removeFromComparison,
        clearComparison,
        saveSearch,
        removeSearch,
        removeSavedSearch,
        addViewingRequest,
      }}
    >
      {children}
    </ClientContext.Provider>
  )
}

export function useClient() {
  const context = React.useContext(ClientContext)
  if (!context) {
    throw new Error('useClient must be used within a ClientProvider')
  }
  return context
}
