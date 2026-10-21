import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Automotive & Supercars in Dubai | Lifestyle Directory',
  description: 'Exotic car showrooms, bespoke automotive concierge, track facilities, and supercar clubs in Dubai.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/lifestyle/cars',
  },
}

export default function CarsLayout({ children }: { children: React.ReactNode }) {
  return children
}
