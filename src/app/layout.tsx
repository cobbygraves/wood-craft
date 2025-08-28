import type { Metadata } from 'next'
import { Gruppo } from 'next/font/google'
import './globals.css'
import DesktopNavbar from './components/desktop-navbar'
import MobileNavbar from './components/mobile-navbar'

const grouppo = Gruppo({
  subsets: ['latin'],
  weight: ['400']
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
      <body className={`${grouppo.className} antialiased`}>
        <DesktopNavbar />
        <MobileNavbar />
        {children}
      </body>
    </html>
  )
}
