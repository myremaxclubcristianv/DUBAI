'use server'

import { cookies } from 'next/headers'
import crypto from 'crypto'
import { isSupabaseServerConfigured, createServerClient } from '@/lib/supabase/server'

const ADMIN_COOKIE_NAME = 'dubai_admin_session'

function getExpectedToken(): string | null {
  const secret = process.env.ADMIN_ACCESS_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!secret || secret.trim().length === 0) return null
  return crypto.createHmac('sha256', 'dubai-platform-admin-salt').update(secret.trim()).digest('hex')
}

/**
 * Server-side authorization check for admin access
 */
export async function checkIsAdminAuthenticated(): Promise<{ authenticated: boolean; reason?: 'ADMIN_ACCESS_KEY_UNSET' | 'UNAUTHENTICATED' | 'SESSION_VALID' }> {
  // 1. Check Supabase server session if configured
  if (isSupabaseServerConfigured()) {
    try {
      const supabase = createServerClient()
      if (supabase) {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          const role = user.user_metadata?.role || user.app_metadata?.role
          if (role === 'ADMIN' || role === 'SUPER_ADMIN') {
            return { authenticated: true, reason: 'SESSION_VALID' }
          }
        }
      }
    } catch {
      // Supabase verification error, proceed to token fallback
    }
  }

  // 2. Check Admin Session Cookie
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get(ADMIN_COOKIE_NAME)?.value

  const expected = getExpectedToken()
  if (!expected) {
    return { authenticated: false, reason: 'ADMIN_ACCESS_KEY_UNSET' }
  }

  if (sessionToken && sessionToken.length === expected.length) {
    const isMatch = crypto.timingSafeEqual(Buffer.from(sessionToken), Buffer.from(expected))
    if (isMatch) {
      return { authenticated: true, reason: 'SESSION_VALID' }
    }
  }

  return { authenticated: false, reason: 'UNAUTHENTICATED' }
}

/**
 * Authenticates an administrator using the server-side access key
 */
export async function loginAdminAction(key: string): Promise<{ success: boolean; error?: string }> {
  if (!key || typeof key !== 'string' || key.trim().length === 0) {
    return { success: false, error: 'A valid administrative key is required.' }
  }

  const expected = getExpectedToken()
  if (!expected) {
    return {
      success: false,
      error: 'Administrative desk is locked: ADMIN_ACCESS_KEY is not configured in deployment environment.',
    }
  }

  const providedHash = crypto.createHmac('sha256', 'dubai-platform-admin-salt').update(key.trim()).digest('hex')

  if (crypto.timingSafeEqual(Buffer.from(providedHash), Buffer.from(expected))) {
    const cookieStore = await cookies()
    cookieStore.set(ADMIN_COOKIE_NAME, expected, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 8, // 8 hours
      path: '/admin',
    })
    return { success: true }
  }

  return { success: false, error: 'Invalid administrative key. Access denied.' }
}

/**
 * Terminates the admin session cookie
 */
export async function logoutAdminAction(): Promise<{ success: boolean }> {
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_COOKIE_NAME)
  return { success: true }
}
