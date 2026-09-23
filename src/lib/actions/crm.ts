'use server'

import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase'

export interface LeadSubmissionPayload {
  full_name: string
  email: string
  phone: string
  service_category: string
  budget_min?: number
  budget_max?: number
  notes?: string
  source?: string
}

export interface ViewingRequestPayload {
  property_id: string
  property_title: string
  area_name?: string
  client_name: string
  client_email: string
  client_phone: string
  requested_date: string
  time_slot: string
  notes?: string
}

export interface ActionResult<T = unknown> {
  success: boolean
  data?: T
  error?: string
  code?: 'SUPABASE_NOT_PROVISIONED' | 'VALIDATION_ERROR' | 'DATABASE_ERROR' | 'UNAUTHORIZED'
}

/**
 * Server Action to submit a real CRM lead to Supabase
 */
export async function submitLeadAction(payload: LeadSubmissionPayload): Promise<ActionResult> {
  // Validate input
  if (!payload.full_name || !payload.email || !payload.phone) {
    return {
      success: false,
      error: 'Full name, email address, and contact phone are required.',
      code: 'VALIDATION_ERROR',
    }
  }

  if (!isSupabaseConfigured()) {
    return {
      success: false,
      error: 'Backend database is not provisioned. Server persistence requires Supabase environment credentials.',
      code: 'SUPABASE_NOT_PROVISIONED',
    }
  }

  try {
    const supabase = getSupabaseClient()
    if (!supabase) {
      return {
        success: false,
        error: 'Unable to initialize Supabase client.',
        code: 'SUPABASE_NOT_PROVISIONED',
      }
    }

    const { data, error } = await supabase.from('leads').insert({
      first_name: payload.full_name.split(' ')[0] || payload.full_name,
      last_name: payload.full_name.split(' ').slice(1).join(' ') || '',
      email: payload.email,
      phone: payload.phone,
      source: payload.source || 'WEBSITE_PRIVATE_CLIENT',
      budget_min: payload.budget_min,
      budget_max: payload.budget_max,
      notes: payload.notes || payload.service_category,
      status: 'NEW',
    }).select().single()

    if (error) {
      return {
        success: false,
        error: error.message,
        code: 'DATABASE_ERROR',
      }
    }

    return {
      success: true,
      data,
    }
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown server error',
      code: 'DATABASE_ERROR',
    }
  }
}

/**
 * Server Action to submit a viewing appointment request to Supabase
 */
export async function submitViewingAction(payload: ViewingRequestPayload): Promise<ActionResult> {
  if (!payload.property_id || !payload.client_name || !payload.client_email || !payload.requested_date) {
    return {
      success: false,
      error: 'Property, client details, and requested date are required.',
      code: 'VALIDATION_ERROR',
    }
  }

  if (!isSupabaseConfigured()) {
    return {
      success: false,
      error: 'Backend database is not provisioned. Viewing scheduling requires Supabase environment credentials.',
      code: 'SUPABASE_NOT_PROVISIONED',
    }
  }

  try {
    const supabase = getSupabaseClient()
    if (!supabase) {
      return {
        success: false,
        error: 'Unable to initialize Supabase client.',
        code: 'SUPABASE_NOT_PROVISIONED',
      }
    }

    const { data, error } = await supabase.from('viewings').insert({
      property_id: payload.property_id,
      scheduled_at: `${payload.requested_date}T${payload.time_slot || '10:00'}:00Z`,
      status: 'REQUESTED',
      notes: payload.notes ? `Client: ${payload.client_name} (${payload.client_email}, ${payload.client_phone}) | Notes: ${payload.notes}` : `Client: ${payload.client_name} (${payload.client_email}, ${payload.client_phone})`,
    }).select().single()

    if (error) {
      return {
        success: false,
        error: error.message,
        code: 'DATABASE_ERROR',
      }
    }

    return {
      success: true,
      data,
    }
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown server error',
      code: 'DATABASE_ERROR',
    }
  }
}
