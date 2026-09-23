'use client'

import * as React from 'react'
import { isSupabaseConfigured, getSupabaseClient } from '@/lib/supabase'
import { X, Lock, Mail, Key, User, AlertCircle, CheckCircle2 } from 'lucide-react'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: 'signin' | 'signup' | 'reset'
}

export function AuthModal({ isOpen, onClose, initialMode = 'signin' }: AuthModalProps) {
  const [mode, setMode] = React.useState<'signin' | 'signup' | 'reset'>(initialMode)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [fullName, setFullName] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [message, setMessage] = React.useState<string | null>(null)

  const isConfigured = React.useMemo(() => isSupabaseConfigured(), [])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setMessage(null)

    if (!isConfigured) {
      setError(
        'Supabase authentication is not provisioned. To enable live user authentication, configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.'
      )
      return
    }

    setLoading(true)
    const supabase = getSupabaseClient()
    if (!supabase) {
      setError('Database client initialization failed.')
      setLoading(false)
      return
    }

    try {
      if (mode === 'signup') {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              role: 'CLIENT',
            },
          },
        })

        if (signUpError) throw signUpError
        setMessage(
          data.session
            ? 'Account created successfully! You are now logged in.'
            : 'Registration received! Please check your email to verify your account.'
        )
      } else if (mode === 'signin') {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (signInError) throw signInError
        setMessage('Successfully signed in!')
        setTimeout(() => {
          onClose()
          window.location.reload()
        }, 1000)
      } else if (mode === 'reset') {
        const { error: resetError } = await supabase.auth.resetPasswordForEmail(email)
        if (resetError) throw resetError
        setMessage('Password reset instructions have been dispatched to your email address.')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during authentication.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl border border-border max-w-md w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between bg-surface-subtle">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-accent-subtle text-accent border border-accent-border">
              <Lock className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-text-primary">
                {mode === 'signin' && 'Client & Advisory Sign In'}
                {mode === 'signup' && 'Create Private Client Account'}
                {mode === 'reset' && 'Reset Access Credentials'}
              </h2>
              <p className="text-xs text-text-muted">
                {mode === 'signin' && 'Access shortlisted properties, dossiers, and private desk viewings.'}
                {mode === 'signup' && 'Register for institutional market intelligence and private client services.'}
                {mode === 'reset' && 'Enter your registered email to receive access instructions.'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-primary p-1 rounded-md transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Backend Status Notice */}
        {!isConfigured && (
          <div className="p-4 bg-amber-50 border-b border-amber-200 text-amber-800 text-xs flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Supabase Auth Unprovisioned</span>
              <span>
                Backend credentials are not configured. The form is ready for production credentials.
              </span>
            </div>
          </div>
        )}

        {/* Feedback messages */}
        {error && (
          <div className="m-6 mb-0 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {message && (
          <div className="m-6 mb-0 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{message}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          {mode === 'signup' && (
            <div className="space-y-1.5">
              <label className="font-semibold text-text-primary">Full Legal Name</label>
              <div className="relative">
                <User className="h-3.5 w-3.5 text-text-muted absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alexander Vance"
                  className="w-full pl-9 pr-3 py-2 border border-border rounded-lg bg-white text-text-primary focus:outline-none focus:border-accent"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="font-semibold text-text-primary">Email Address</label>
            <div className="relative">
              <Mail className="h-3.5 w-3.5 text-text-muted absolute left-3 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@familyoffice.com"
                className="w-full pl-9 pr-3 py-2 border border-border rounded-lg bg-white text-text-primary focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          {mode !== 'reset' && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="font-semibold text-text-primary">Password</label>
                {mode === 'signin' && (
                  <button
                    type="button"
                    onClick={() => setMode('reset')}
                    className="text-[11px] text-accent hover:underline"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Key className="h-3.5 w-3.5 text-text-muted absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-3 py-2 border border-border rounded-lg bg-white text-text-primary focus:outline-none focus:border-accent"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 bg-text-primary text-white font-bold rounded-lg hover:bg-black transition-colors disabled:opacity-50 mt-2"
          >
            {loading ? 'Authenticating...' : mode === 'signin' ? 'Sign In' : mode === 'signup' ? 'Create Account' : 'Send Reset Link'}
          </button>
        </form>

        {/* Footer Toggle */}
        <div className="p-4 border-t border-border bg-surface-subtle text-center text-xs text-text-secondary">
          {mode === 'signin' ? (
            <p>
              Don’t have an authorized account?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="font-bold text-accent hover:underline ml-1"
              >
                Register Private Account
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signin')}
                className="font-bold text-accent hover:underline ml-1"
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
