import { createClient, SupabaseClient } from '@supabase/supabase-js'

if (typeof window !== 'undefined') {
  throw new Error('SECURITY VIOLATION: src/lib/supabase/server.ts cannot be imported in client-side code.')
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

/**
 * Checks if Supabase server-side environment is provisioned
 */
export function isSupabaseServerConfigured(): boolean {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    !supabaseUrl.includes('placeholder') &&
    !supabaseUrl.includes('your_supabase_project_url')
  )
}

/**
 * Standard server-side Supabase client using Anon Key
 */
export function createServerClient(): SupabaseClient | null {
  if (!isSupabaseServerConfigured()) {
    return null
  }

  return createClient(supabaseUrl!, supabaseAnonKey!, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

/**
 * Admin server-side Supabase client using Service Role Key
 * STRICTLY FOR USE IN SERVER-SIDE API HANDLERS AND SERVER ACTIONS.
 * NEVER EXPOSE TO THE CLIENT.
 */
export function createAdminClient(): SupabaseClient | null {
  if (
    !isSupabaseServerConfigured() ||
    !supabaseServiceKey ||
    supabaseServiceKey.includes('your_supabase_service_role_key')
  ) {
    return null
  }

  return createClient(supabaseUrl!, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}
