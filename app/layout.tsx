import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Bikash Gautam — CS Student & AI Builder',
    template: '%s | Bikash Gautam',
  },
  description:
    'I build modern, functional applications with clean code and thoughtful design. CS student focused on AI, ML research, and full-stack development.',
  keywords: [
    'Bikash Gautam',
    'portfolio',
    'software engineer',
    'AI',
    'machine learning',
    'full-stack developer',
    'computer science',
    'Next.js',
    'React',
    'PyTorch',
  ],
  authors: [{ name: 'Bikash Gautam', url: 'https://github.com/bkshgtm' }],
  creator: 'Bikash Gautam',
  openGraph: {
    title: 'Bikash Gautam — CS Student & AI Builder',
    description:
      'I build modern, functional applications with clean code and thoughtful design.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Bikash Gautam',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bikash Gautam — CS Student & AI Builder',
    description:
      'I build modern, functional applications with clean code and thoughtful design.',
    creator: '@bkshgtm',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-[#080808]">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
