import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BgGradient from '@/components/BgGradient'
import Header from '@/components/Header'

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
        <BgGradient className='w-fit h-fit absolute top-0 left-1/2 -translate-x-1/2' />
        <Header />

        {children}
      </body>
    </html>
  )
}
