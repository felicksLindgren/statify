import NextAuthProvider from '@/components/nextauth-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Statify by @felix',
  description: 'Spotify statistics for your account',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} overflow-y-scroll`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
