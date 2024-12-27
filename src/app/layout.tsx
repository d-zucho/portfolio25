import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
