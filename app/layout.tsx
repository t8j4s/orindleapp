import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://orindle.com'),
  title: {
    template: '%s | Orindle',
    default: 'Orindle - Website + WhatsApp Lead System for Local Businesses',
  },
  description: 'Orindle builds mobile-first websites connected with WhatsApp, Google Business Profile, reviews, lead capture forms, and local SEO to help Indian local businesses get more enquiries and convert more customers.',
  applicationName: 'Orindle',
  creator: 'Orindle',
  publisher: 'Orindle',
  keywords: ['Orindle', 'local business website', 'website development India', 'WhatsApp lead system', 'local SEO India', 'Google Business Profile optimization', 'small business website', 'Pune website agency', 'lead generation website', 'review request system', 'website for local businesses'],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Orindle',
    locale: 'en_IN',
    url: 'https://orindle.com',
    title: 'Orindle - Website + WhatsApp Lead System for Local Businesses',
    description: 'Mobile-first websites, WhatsApp lead systems, review requests, Google Business Profile optimization, and local SEO for Indian local businesses.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Orindle - Local Business Growth System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orindle - Website + WhatsApp Lead System for Local Businesses',
    description: 'Orindle helps Indian local businesses capture more enquiries with mobile-first websites, WhatsApp lead flows, reviews, and local SEO.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-gray-900 antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
