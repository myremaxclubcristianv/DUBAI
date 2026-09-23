import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    !supabaseUrl.includes('placeholder') &&
    !supabaseUrl.includes('your_supabase_project_url')
  )
}

export const getSupabaseClient = (): SupabaseClient | null => {
  if (!isSupabaseConfigured()) {
    return null
  }
  return createClient(supabaseUrl!, supabaseAnonKey!)
}

export const getSupabaseAdmin = (): SupabaseClient | null => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!isSupabaseConfigured() || !serviceKey || serviceKey.includes('your_supabase_service_role_key')) {
    return null
  }
  return createClient(supabaseUrl!, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

// Fallback client export for backwards compatibility (null-safe or placeholder-safe)
export const supabase = isSupabaseConfigured()
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null