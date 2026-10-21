import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Rentals & Executive Relocations in Dubai | Ejari Verified',
  description: 'Confidential luxury tenant representation, corporate residences, and prime waterfront leases with mandatory Ejari compliance.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/rent',
  },
}

export default function RentLayout({ children }: { children: React.ReactNode }) {
  return children
}
