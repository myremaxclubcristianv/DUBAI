import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ToastProvider } from "@/components/ui/toast";
import { ClientProvider } from "@/lib/context/client-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dubai Real Estate & Investment Intelligence | Cristian Văduva",
    template: "%s | Dubai Real Estate & Investment Intelligence",
  },
  description: "Institutional Dubai real estate discovery, statutory investment intelligence, and private client desk with complete data provenance.",
  metadataBase: new URL("https://dubai.cristianvaduva.com"),
  keywords: [
    "Dubai Real Estate",
    "Dubai Penthouses",
    "Dubai Luxury Villas",
    "Dubai Land Department Fees",
    "Dubai Golden Visa",
    "Dubai Rental Yields",
    "Cristian Vaduva",
  ],
  openGraph: {
    title: "Dubai Real Estate & Investment Intelligence",
    description: "Verified Dubai property assets, statutory investment intelligence, and private client advisory.",
    type: "website",
    locale: "en_US",
    siteName: "Dubai Real Estate & Investment Platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Real Estate & Investment Intelligence",
    description: "Verified Dubai property assets, statutory investment intelligence, and private client advisory.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ToastProvider>
          <ClientProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ClientProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
