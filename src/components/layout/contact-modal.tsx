'use client'

import * as React from 'react'
import { X, CheckCircle2, AlertCircle } from 'lucide-react'

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={modalRef}
        className="w-full max-w-[620px] max-h-[92vh] flex flex-col bg-[#ffffff] border border-[#e5e5ea] shadow-2xl my-auto text-[#111111] overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 border-b border-[#e5e5ea] shrink-0">
          <div className="space-y-0.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#9f8144] block">
              Private Client Desk
            </span>
            <h2 id="contact-modal-title" className="text-base sm:text-lg font-light tracking-tight text-[#111111]">
              Direct Advisory Intake
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#8e8e93] hover:text-[#111111] transition-colors cursor-pointer"
            aria-label="Close contact dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto">
          {status === 'SUCCESS' ? (
            <div className="py-10 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#9f8144]/10 flex items-center justify-center text-[#9f8144]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-[#111111] font-semibold">
                  MESSAGE RECEIVED
                </h3>
                <p className="text-sm font-light text-[#6b6b6b] max-w-[380px] mx-auto">
                  Your enquiry has been sent to the Private Client Desk.
                </p>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#111111] text-[#ffffff] hover:bg-[#9f8144] transition-colors text-xs font-mono uppercase tracking-[0.12em]"
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
                <label className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#6b6b6b]">
                  Area of Interest <span className="text-[#9f8144]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(['PROPERTY', 'INVESTMENT', 'RESIDENCY', 'LIFESTYLE', 'PRIVATE CLIENT'] as InterestCategory[]).map(
                    (cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setInterest(cat)}
                        className={`px-3 py-2 text-left text-[11px] font-mono uppercase tracking-[0.08em] border transition-colors cursor-pointer ${
                          interest === cat
                            ? 'bg-[#111111] text-[#ffffff] border-[#111111]'
                            : 'bg-[#fafaf8] text-[#6b6b6b] border-[#e5e5ea] hover:border-[#111111] hover:text-[#111111]'
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
                  <label htmlFor="contact-name" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#6b6b6b]">
                    Full Name <span className="text-[#9f8144]">*</span>
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
                    placeholder="e.g. John Smith"
                    className="w-full px-3.5 py-2.5 bg-[#fafaf8] border border-[#e5e5ea] focus:border-[#111111] focus:bg-[#ffffff] outline-none text-xs text-[#111111] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#6b6b6b]">
                    Email Address <span className="text-[#9f8144]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. john@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#fafaf8] border border-[#e5e5ea] focus:border-[#111111] focus:bg-[#ffffff] outline-none text-xs text-[#111111] transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Country Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#6b6b6b]">
                    Phone (with country code)
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +44 7700 900123"
                    className="w-full px-3.5 py-2.5 bg-[#fafaf8] border border-[#e5e5ea] focus:border-[#111111] focus:bg-[#ffffff] outline-none text-xs text-[#111111] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-country" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#6b6b6b]">
                    Country of Residence
                  </label>
                  <input
                    id="contact-country"
                    name="country"
                    type="text"
                    autoComplete="country-name"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. United Kingdom"
                    className="w-full px-3.5 py-2.5 bg-[#fafaf8] border border-[#e5e5ea] focus:border-[#111111] focus:bg-[#ffffff] outline-none text-xs text-[#111111] transition-colors"
                  />
                </div>
              </div>

              {/* Budget / Range */}
              <div className="space-y-1.5">
                <label htmlFor="contact-budget" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#6b6b6b]">
                  Budget / Mandate Size <span className="text-[10px] text-[#8e8e93] font-normal">(Optional)</span>
                </label>
                <input
                  id="contact-budget"
                  name="budget"
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="e.g. AED 5,000,000 / USD 1.5M+"
                  className="w-full px-3.5 py-2.5 bg-[#fafaf8] border border-[#e5e5ea] focus:border-[#111111] focus:bg-[#ffffff] outline-none text-xs text-[#111111] transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-[11px] font-mono uppercase tracking-[0.12em] text-[#6b6b6b]">
                  Brief / Requirement Details <span className="text-[#9f8144]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Specify asset types, district preferences, investment horizon or residency requirements..."
                  className="w-full px-3.5 py-2.5 bg-[#fafaf8] border border-[#e5e5ea] focus:border-[#111111] focus:bg-[#ffffff] outline-none text-xs text-[#111111] transition-colors resize-none"
                />
              </div>

              {/* Error Alert */}
              {status === 'ERROR' && (
                <div className="p-3 bg-[#fafaf8] border border-[#e5e5ea] flex items-start gap-2.5 text-[#111111] text-xs animate-in fade-in duration-150">
                  <AlertCircle className="h-4 w-4 text-[#8e8e93] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                      MESSAGE NOT SENT
                    </p>
                    <p className="text-[#6b6b6b]">
                      {errorMessage || 'Please try again or use the direct contact option.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="pt-2 flex items-center justify-between border-t border-[#e5e5ea]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e8e93]">
                  Confidential Transmission
                </span>
                <button
                  type="submit"
                  disabled={status === 'SUBMITTING'}
                  className="px-6 py-2.5 bg-[#111111] text-[#ffffff] hover:bg-[#9f8144] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs font-mono uppercase tracking-[0.12em] font-medium cursor-pointer"
                >
                  {status === 'SUBMITTING' ? 'Sending…' : 'Submit Enquiry'}
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
