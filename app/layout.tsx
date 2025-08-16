import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "AyurVeda Naturals - Healing through Nature",
  description:
    "Premium Ayurvedic products for natural wellness and healing. Discover ancient wisdom with modern quality standards.",
  generator: "v0.app",
  keywords: ["ayurveda", "natural", "wellness", "herbs", "organic", "health", "healing"],
  authors: [{ name: "AyurVeda Naturals" }],
  creator: "AyurVeda Naturals",
  publisher: "AyurVeda Naturals",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayurvedanaturals.com",
    title: "AyurVeda Naturals - Healing through Nature",
    description: "Premium Ayurvedic products for natural wellness and healing",
    siteName: "AyurVeda Naturals",
    images: [
      {
        url: "/ayurvedic-herbs.png",
        width: 1200,
        height: 630,
        alt: "AyurVeda Naturals - Natural Healing Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AyurVeda Naturals - Healing through Nature",
    description: "Premium Ayurvedic products for natural wellness and healing",
    images: ["/ayurvedic-herbs.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0891b2" },
    { media: "(prefers-color-scheme: dark)", color: "#0891b2" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preload" href="/ayurvedic-herbs.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
