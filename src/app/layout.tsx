import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BgGradient from '@/components/BgGradient'
import Header from '@/sections/Header'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Danny Libor',
  description: 'Fullstack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className}antialiased relative overflow-hidden`}
      >
        <BgGradient className='z-0' />
        <Header />

        {children}
      </body>
    </html>
  )
}
