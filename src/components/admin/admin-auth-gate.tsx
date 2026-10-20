'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ShieldAlert, KeyRound, Lock, ArrowLeft, Loader2, AlertCircle } from 'lucide-react'
import { loginAdminAction } from '@/lib/actions/admin'

interface AdminAuthGateProps {
  reason?: 'ADMIN_ACCESS_KEY_UNSET' | 'UNAUTHENTICATED' | 'SESSION_VALID'
}

export function AdminAuthGate({ reason }: AdminAuthGateProps) {
  const router = useRouter()
  const [key, setKey] = React.useState('')
  const [error, setError] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!key.trim()) {
      setError('Please provide the administrative access key.')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const res = await loginAdminAction(key)
      if (res.success) {
        router.refresh()
      } else {
        setError(res.error || 'Authentication failed. Please verify your administrative key.')
      }
    } catch {
      setError('A secure connection error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 selection:bg-amber-500/30 selection:text-white">
      <div className="w-full max-w-md space-y-8">
        {/* Top Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-2">
            <Lock className="w-7 h-7" />
          </div>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-zinc-900 border border-zinc-800 text-zinc-400">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>RESTRICTED ACCESS &bull; PROTOCOL 401</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-white font-serif">
            Administrative Desk
          </h1>

          <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mx-auto">
            Platform governance diagnostics, provenance audits, and internal data registries require server-side cryptographic authentication.
          </p>
        </div>

        {/* Status Callout if Key is Unset */}
        {reason === 'ADMIN_ACCESS_KEY_UNSET' && (
          <div className="p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 text-xs text-amber-200 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-amber-300">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Server Environment Locked</span>
            </div>
            <p className="text-[11px] leading-relaxed text-amber-200/90">
              The environment variable <code className="px-1.5 py-0.5 rounded bg-black/50 font-mono text-amber-300">ADMIN_ACCESS_KEY</code> is unprovisioned in production settings. Unauthenticated direct access is blocked by server-side policy.
            </p>
          </div>
        )}

        {/* Authentication Form */}
        <div className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950/80 shadow-2xl backdrop-blur-sm space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="admin-key" className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                Administrative Access Key
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                  <KeyRound className="h-4 w-4" />
                </div>
                <input
                  id="admin-key"
                  type="password"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  placeholder="Enter authorized key..."
                  disabled={isLoading || reason === 'ADMIN_ACCESS_KEY_UNSET'}
                  autoComplete="current-password"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-black border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-xs text-red-300 flex items-start gap-2 animate-in fade-in duration-200">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || reason === 'ADMIN_ACCESS_KEY_UNSET'}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-500/10 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Session...</span>
                </>
              ) : (
                <span>Authenticate Operator</span>
              )}
            </button>
          </form>

          <div className="border-t border-zinc-800 pt-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Directory</span>
            </Link>
          </div>
        </div>

        {/* Legal & Security Disclosures */}
        <p className="text-[10px] text-center text-zinc-600 font-mono tracking-wide">
          All administrative operations and access attempts are logged with server timestamp and IP provenance.
        </p>
      </div>
    </div>
  )
}
