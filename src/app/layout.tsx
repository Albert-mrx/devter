import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Clon de Twiter',
  description: 'genreando moviendo las manos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
