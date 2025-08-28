import type { Metadata } from 'next'
import { Geist, Geist_Mono, Alumni_Sans_Pinstripe } from 'next/font/google'
import './globals.css'
import DesktopNavbar from './components/desktop-navbar'
import MobileNavbar from './components/mobile-navbar'

const alumini_sans = Alumni_Sans_Pinstripe({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-alumni-sans'
})

export const metadata: Metadata = {
  title: 'Your carpentry works',
  description: 'Generappated by KCrafts '
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${alumini_sans.variable} antialiased`}>
        <DesktopNavbar />
        <MobileNavbar />
        {children}
      </body>
    </html>
  )
}
