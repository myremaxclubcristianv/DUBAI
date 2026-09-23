'use client'

import * as React from 'react'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

export interface ToastMessage {
  id: string
  title: string
  description?: string
  type?: 'success' | 'info' | 'warning' | 'error'
}

type ToastInput =
  | Omit<ToastMessage, 'id'>
  | string

interface ToastContextType {
  toasts: ToastMessage[]
  addToast: (input: ToastInput, type?: 'success' | 'info' | 'warning' | 'error') => void
  removeToast: (id: string) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([])

  const addToast = React.useCallback(
    (input: ToastInput, type?: 'success' | 'info' | 'warning' | 'error') => {
      const id = Math.random().toString(36).substring(2, 9)
      let newToast: ToastMessage

      if (typeof input === 'string') {
        newToast = { id, title: input, type: type || 'info' }
      } else {
        newToast = { ...input, id, type: input.type || type || 'info' }
      }

      setToasts((prev) => [...prev, newToast])
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 4000)
    },
    []
  )

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {/* Toast Notification Floating Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto bg-white rounded-xl border border-border shadow-xl p-3.5 flex items-start gap-3 animate-in slide-in-from-bottom-3 fade-in duration-200"
          >
            {t.type === 'info' && <Info className="h-4 w-4 text-accent shrink-0 mt-0.5" />}
            {t.type === 'warning' && <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />}
            {t.type === 'error' && <AlertCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />}
            {(!t.type || t.type === 'success') && (
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-xs">
              <h4 className="font-bold text-text-primary">{t.title}</h4>
              {t.description && <p className="text-text-secondary mt-0.5 text-[11px]">{t.description}</p>}
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-text-muted hover:text-text-primary p-0.5"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

