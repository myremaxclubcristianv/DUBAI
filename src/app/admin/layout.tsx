import type { Metadata } from 'next'
import { checkIsAdminAuthenticated } from '@/lib/actions/admin'
import { AdminAuthGate } from '@/components/admin/admin-auth-gate'

export const metadata: Metadata = {
  title: 'Platform Administration Desk',
  description: 'Internal platform management and system status desk.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/admin',
  },
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const auth = await checkIsAdminAuthenticated()

  if (!auth.authenticated) {
    return <AdminAuthGate reason={auth.reason} />
  }

  return children
}
