import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import DesktopNavbar from './components/desktop-navbar'
import MobileNavbar from './components/mobile-navbar'

// const grouppo = Gruppo({
//   subsets: ['latin'],
//   weight: ['400']
// })

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
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
      <body className={`${nunito.className} antialiased`}>
        <DesktopNavbar />
        <MobileNavbar />
        {children}
      </body>
    </html>
  )
}
