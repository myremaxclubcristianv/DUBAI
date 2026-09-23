'use client'

import * as React from 'react'
import { PropertyRecord } from '@/types/provenance'
import { CheckCircle2, ShieldCheck } from 'lucide-react'

interface ViewingModalProps {
  property: PropertyRecord
  isOpen: boolean
  onClose: () => void
}

export function ViewingModal({ property, isOpen, onClose }: ViewingModalProps) {
  const [date, setDate] = React.useState('')
  const [timeSlot, setTimeSlot] = React.useState('10:00 AM - 11:30 AM')
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [notes, setNotes] = React.useState('')
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const viewingRequest = {
      id: `view-${Date.now()}`,
      property_id: property.id,
      property_title: property.title,
      area_name: property.area_name,
      client_name: fullName,
      client_email: email,
      client_phone: phone,
      requested_date: date || 'Next available viewing slot',
      time_slot: timeSlot,
      notes,
      created_at: new Date().toISOString(),
      status: 'PREPARED',
    }

    try {
      const existing = JSON.parse(localStorage.getItem('dubai_viewing_requests') || '[]')
      localStorage.setItem('dubai_viewing_requests', JSON.stringify([viewingRequest, ...existing]))
    } catch {}

    setIsSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-xl shadow-2xl border border-border p-6 space-y-5 text-left relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-text-primary text-sm p-1 rounded-md hover:bg-surface-elevated"
        >
          ✕
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                Private Client Viewing Desk
              </span>
              <h3 className="text-lg font-bold text-text-primary mt-0.5">
                Schedule Private Viewing
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                {property.title} • {property.area_name}
              </p>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-surface border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 bg-surface border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                  >
                    <option value="10:00 AM - 11:30 AM">Morning (10:00 AM)</option>
                    <option value="02:00 PM - 03:30 PM">Afternoon (02:00 PM)</option>
                    <option value="05:00 PM - 06:30 PM">Sunset / Twilight (05:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">Full Legal Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Alexander Wright"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 bg-surface border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="client@familyoffice.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-surface border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-surface border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-primary mb-1">
                  Specific Requests / Escort Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Chauffeur pickup required, building architect meeting..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-surface border border-border rounded-md text-xs text-text-primary focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div className="p-3 bg-surface-elevated rounded-lg border border-border text-[11px] text-text-secondary flex items-start gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                All viewing arrangements are conducted in strict confidentiality with authorized DLD license verification and owner clearance.
              </span>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-white border border-border hover:bg-surface text-text-secondary text-xs font-semibold rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-text-primary hover:bg-black text-white text-xs font-semibold rounded-md transition-colors"
              >
                Prepare Viewing Request
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary">Viewing Request Prepared</h3>
              <p className="text-xs text-text-secondary mt-1 max-w-sm mx-auto">
                Your private viewing request for <strong className="text-text-primary">{property.title}</strong> has been prepared and queued locally on this device. Our private client advisor will contact you directly to confirm building security clearance and escort logistics.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-text-primary hover:bg-black text-white text-xs font-semibold rounded-md transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
