'use client'

import * as React from 'react'
import Link from 'next/link'
import { X, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react'

export type InterestCategory = 'PROPERTY' | 'INVESTMENT' | 'RESIDENCY' | 'LIFESTYLE' | 'PRIVATE CLIENT'

export interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  initialInterest?: InterestCategory
  initialMessage?: string
  initialBudget?: string
  title?: string
  eyebrow?: string
}

function ContactModalDialog({
  onClose,
  initialInterest = 'PROPERTY',
  initialMessage = '',
  initialBudget = '',
  title = 'Direct Advisory Intake & Mandate',
  eyebrow = 'Private Client Desk',
}: {
  onClose: () => void
  initialInterest?: InterestCategory
  initialMessage?: string
  initialBudget?: string
  title?: string
  eyebrow?: string
}) {
  const [interest, setInterest] = React.useState<InterestCategory>(initialInterest)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [budget, setBudget] = React.useState(initialBudget)
  const [message, setMessage] = React.useState(initialMessage)
  const [consent, setConsent] = React.useState(false)
  const [honeypot, setHoneypot] = React.useState('')

  const [status, setStatus] = React.useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE')
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  const nameInputRef = React.useRef<HTMLInputElement>(null)
  const modalRef = React.useRef<HTMLDivElement>(null)

  // Autofocus first input on mount
  React.useEffect(() => {
    nameInputRef.current?.focus()
  }, [])

  // ESC key listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('SUBMITTING')
    setErrorMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          country,
          interest,
          budget,
          message,
          consent,
          b_website: honeypot, // Honeypot
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR')
        if (data.error === 'service_unavailable') {
          setErrorMessage('Contact service is temporarily unavailable.')
        } else if (typeof data.error === 'string') {
          setErrorMessage(data.error)
        } else {
          setErrorMessage('Please try again or use the direct contact option.')
        }
      }
    } catch {
      setStatus('ERROR')
      setErrorMessage('Please try again or use the direct contact option.')
    }
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setPhone('')
    setCountry('')
    setBudget('')
    setMessage('')
    setConsent(false)
    setStatus('IDLE')
    setErrorMessage(null)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={modalRef}
        className="w-full max-w-[620px] max-h-[92vh] flex flex-col bg-white border border-slate-200 shadow-2xl my-auto text-slate-900 rounded-sm overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 border-b border-slate-200 shrink-0 bg-gradient-to-r from-[#f0f7ff] to-white">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0284c7] block font-semibold">
              {eyebrow}
            </span>
            <h2 id="contact-modal-title" className="text-base sm:text-lg font-light tracking-tight text-slate-900 font-serif">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer rounded-xs hover:bg-slate-100"
            aria-label="Close contact dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-5">
          {status === 'SUCCESS' ? (
            <div className="py-10 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-12 h-12 mx-auto rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284c7]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284c7] font-semibold">
                  MANDATE TRANSMITTED
                </h3>
                <p className="text-sm font-light text-slate-600 max-w-[380px] mx-auto">
                  Your enquiry has been delivered directly to the Private Client Desk. A senior advisor will review your brief confidentially.
                </p>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0284c7] text-white hover:bg-[#0369a1] transition-colors text-xs font-mono uppercase tracking-[0.14em] font-semibold rounded-xs cursor-pointer shadow-xs"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Anti-Spam Honeypot (Hidden) */}
              <input
                type="text"
                name="b_website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Interest Selector */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-[0.12em] text-slate-500 font-semibold">
                  Area of Interest <span className="text-[#0284c7]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(['PROPERTY', 'INVESTMENT', 'RESIDENCY', 'LIFESTYLE', 'PRIVATE CLIENT'] as InterestCategory[]).map(
                    (cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setInterest(cat)}
                        className={`px-3 py-2 text-left text-[10px] font-mono uppercase tracking-[0.08em] border rounded-xs transition-colors cursor-pointer ${
                          interest === cat
                            ? 'bg-[#0284c7] text-white border-[#0284c7] font-semibold'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#0284c7]/50 hover:text-slate-900'
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-slate-500 font-semibold">
                    Full Name <span className="text-[#0284c7]">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Lord Harrington"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#0284c7] focus:bg-white outline-none text-xs text-slate-900 rounded-xs transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-slate-500 font-semibold">
                    Email Address <span className="text-[#0284c7]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. client@familyoffice.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#0284c7] focus:bg-white outline-none text-xs text-slate-900 rounded-xs transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Country Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-slate-500 font-semibold">
                    Phone (with country code)
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +971 50 000 0000"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#0284c7] focus:bg-white outline-none text-xs text-slate-900 rounded-xs transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-country" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-slate-500 font-semibold">
                    Country of Residence
                  </label>
                  <input
                    id="contact-country"
                    name="country"
                    type="text"
                    autoComplete="country-name"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. United Kingdom / Monaco"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#0284c7] focus:bg-white outline-none text-xs text-slate-900 rounded-xs transition-colors"
                  />
                </div>
              </div>

              {/* Budget / Range */}
              <div className="space-y-1.5">
                <label htmlFor="contact-budget" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-slate-500 font-semibold">
                  Budget / Mandate Size <span className="text-[10px] text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="contact-budget"
                  name="budget"
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. AED 15,000,000 / USD 4M+"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#0284c7] focus:bg-white outline-none text-xs text-slate-900 rounded-xs transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-slate-500 font-semibold">
                  Brief / Requirement Details <span className="text-[#0284c7]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Specify asset types, district preferences, investment horizon or golden residency requirements..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#0284c7] focus:bg-white outline-none text-xs text-slate-900 rounded-xs transition-colors resize-none"
                />
              </div>

              {/* Data Processing & Explicit Privacy Consent (Unselected by Default) */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <label htmlFor="contact-consent" className="flex items-start gap-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="contact-consent"
                    name="consent"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded-xs border-slate-300 text-[#0284c7] focus:ring-[#0284c7] cursor-pointer shrink-0"
                  />
                  <span className="text-[11px] text-slate-600 font-light leading-relaxed">
                    I consent to the collection and confidential processing of my contact details for the sole purpose of evaluating and responding to this advisory mandate, in accordance with the{' '}
                    <Link href="/privacy" target="_blank" className="text-[#0284c7] underline hover:text-[#0369a1]">
                      Privacy Policy
                    </Link>
                    . Data is not shared with or sold to third parties.
                  </span>
                </label>
              </div>

              {/* Direct Advisory Desk Alternative */}
              <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xs space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block font-semibold">
                  DIRECT PRINCIPAL CHANNELS (IMMEDIATE INTAKE)
                </span>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono">
                  <a
                    href="mailto:cristianvaduva@duck.com"
                    className="text-slate-800 hover:text-[#0284c7] transition-colors underline"
                  >
                    cristianvaduva@duck.com
                  </a>
                  <span className="text-slate-400">•</span>
                  <a
                    href="https://wa.me/436509536345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-800 hover:text-[#0284c7] transition-colors underline"
                  >
                    WhatsApp: +43 650 953 6345
                  </a>
                </div>
              </div>

              {/* Error Alert */}
              {status === 'ERROR' && (
                <div className="p-3 bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-xs rounded-xs animate-in fade-in duration-150">
                  <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                      MESSAGE NOT SENT
                    </p>
                    <p className="text-red-700">
                      {errorMessage || 'Please try again or contact the desk directly via WhatsApp/email above.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#0284c7]" />
                  <span>Confidential Transmission</span>
                </div>
                <button
                  type="submit"
                  disabled={status === 'SUBMITTING' || !consent}
                  className="px-6 py-2.5 bg-[#0284c7] hover:bg-[#0369a1] text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all text-xs font-mono uppercase tracking-[0.14em] font-semibold cursor-pointer rounded-xs shadow-xs"
                >
                  {status === 'SUBMITTING' ? 'Transmitting…' : 'Submit Mandate'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export function ContactModal({
  isOpen,
  onClose,
  initialInterest = 'PROPERTY',
  initialMessage = '',
  initialBudget = '',
  title = 'Direct Advisory Intake & Mandate',
  eyebrow = 'Private Client Desk',
}: ContactModalProps) {
  if (!isOpen) return null

  return (
    <ContactModalDialog
      key={`${initialInterest}-${isOpen}-${initialMessage.slice(0, 30)}`}
      onClose={onClose}
      initialInterest={initialInterest}
      initialMessage={initialMessage}
      initialBudget={initialBudget}
      title={title}
      eyebrow={eyebrow}
    />
  )
}
