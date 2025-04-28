import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solat Sunat Tutorial',
  description: 'Created with v0.dev & ChatGPT',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}
      </body>
    </html>
  )
}
