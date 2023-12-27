import type { Metadata } from 'next'

import './globals.css'

//? Layout is Top level file of this Application

export const metadata: Metadata = {
  title: 'Disney 2.0 Clone',
  description: 'A Movie & OTT Platform with Open AI and Azure services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
