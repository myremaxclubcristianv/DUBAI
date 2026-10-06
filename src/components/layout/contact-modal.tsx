'use client'

import * as React from 'react'
import { X, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react'

export type InterestCategory = 'PROPERTY' | 'INVESTMENT' | 'RESIDENCY' | 'LIFESTYLE' | 'PRIVATE CLIENT'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  initialInterest?: InterestCategory
}

function ContactModalDialog({
  onClose,
  initialInterest = 'PROPERTY',
}: {
  onClose: () => void
  initialInterest?: InterestCategory
}) {
  const [interest, setInterest] = React.useState<InterestCategory>(initialInterest)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [budget, setBudget] = React.useState('')
  const [message, setMessage] = React.useState('')
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
    setStatus('IDLE')
    setErrorMessage(null)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={modalRef}
        className="w-full max-w-[620px] max-h-[92vh] flex flex-col bg-[#0d0d11] border border-white/15 shadow-[0_16px_50px_rgba(0,0,0,0.9)] my-auto text-[#f5f5f7] rounded-sm overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 border-b border-white/10 shrink-0 bg-[#08080a]">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a962] block font-semibold">
              Private Client Desk
            </span>
            <h2 id="contact-modal-title" className="text-base sm:text-lg font-light tracking-tight text-[#f5f5f7]">
              Direct Advisory Intake &amp; Mandate
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#8e8e93] hover:text-[#f5f5f7] transition-colors cursor-pointer rounded-xs hover:bg-white/5"
            aria-label="Close contact dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-5">
          {status === 'SUCCESS' ? (
            <div className="py-10 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 flex items-center justify-center text-[#c9a962]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#c9a962] font-semibold">
                  MANDATE TRANSMITTED
                </h3>
                <p className="text-sm font-light text-[#a1a1aa] max-w-[380px] mx-auto">
                  Your enquiry has been delivered directly to the Private Client Desk. A senior advisor will review your brief confidentially.
                </p>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#c9a962] text-[#08080a] hover:bg-[#dbbe7a] transition-colors text-xs font-mono uppercase tracking-[0.14em] font-semibold rounded-xs cursor-pointer"
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
                <label className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#8e8e93]">
                  Area of Interest <span className="text-[#c9a962]">*</span>
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
                            ? 'bg-[#c9a962] text-[#08080a] border-[#c9a962] font-semibold'
                            : 'bg-[#141418] text-[#a1a1aa] border-white/10 hover:border-[#c9a962]/50 hover:text-[#f5f5f7]'
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
                  <label htmlFor="contact-name" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#8e8e93]">
                    Full Name <span className="text-[#c9a962]">*</span>
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
                    className="w-full px-3.5 py-2.5 bg-[#141418] border border-white/10 focus:border-[#c9a962] outline-none text-xs text-[#f5f5f7] rounded-xs transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#8e8e93]">
                    Email Address <span className="text-[#c9a962]">*</span>
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
                    className="w-full px-3.5 py-2.5 bg-[#141418] border border-white/10 focus:border-[#c9a962] outline-none text-xs text-[#f5f5f7] rounded-xs transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Country Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#8e8e93]">
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
                    className="w-full px-3.5 py-2.5 bg-[#141418] border border-white/10 focus:border-[#c9a962] outline-none text-xs text-[#f5f5f7] rounded-xs transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-country" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#8e8e93]">
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
                    className="w-full px-3.5 py-2.5 bg-[#141418] border border-white/10 focus:border-[#c9a962] outline-none text-xs text-[#f5f5f7] rounded-xs transition-colors"
                  />
                </div>
              </div>

              {/* Budget / Range */}
              <div className="space-y-1.5">
                <label htmlFor="contact-budget" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#8e8e93]">
                  Budget / Mandate Size <span className="text-[10px] text-[#71717a] font-normal">(Optional)</span>
                </label>
                <input
                  id="contact-budget"
                  name="budget"
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. AED 15,000,000 / USD 4M+"
                  className="w-full px-3.5 py-2.5 bg-[#141418] border border-white/10 focus:border-[#c9a962] outline-none text-xs text-[#f5f5f7] rounded-xs transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#8e8e93]">
                  Brief / Requirement Details <span className="text-[#c9a962]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Specify asset types, district preferences, investment horizon or golden residency requirements..."
                  className="w-full px-3.5 py-2.5 bg-[#141418] border border-white/10 focus:border-[#c9a962] outline-none text-xs text-[#f5f5f7] rounded-xs transition-colors resize-none"
                />
              </div>

              {/* Error Alert */}
              {status === 'ERROR' && (
                <div className="p-3 bg-red-950/40 border border-red-500/30 flex items-start gap-2.5 text-red-300 text-xs rounded-xs animate-in fade-in duration-150">
                  <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                      MESSAGE NOT SENT
                    </p>
                    <p className="text-red-200">
                      {errorMessage || 'Please try again or contact the desk directly.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#71717a]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#c9a962]" />
                  <span>Confidential Transmission</span>
                </div>
                <button
                  type="submit"
                  disabled={status === 'SUBMITTING'}
                  className="px-6 py-2.5 bg-[#c9a962] hover:bg-[#dbbe7a] text-[#08080a] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-xs font-mono uppercase tracking-[0.14em] font-semibold cursor-pointer rounded-xs shadow-[0_0_12px_rgba(201,169,98,0.2)]"
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

export function ContactModal({ isOpen, onClose, initialInterest = 'PROPERTY' }: ContactModalProps) {
  if (!isOpen) return null

  return (
    <ContactModalDialog
      key={`${initialInterest}-${isOpen}`}
      onClose={onClose}
      initialInterest={initialInterest}
    />
  )
}
