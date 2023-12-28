import type { Metadata } from 'next'

import './globals.css'
import Header from '@/components/ui/Header'

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

      <body >
        <Header />

        {children}
      </body>
    </html>
  )
}
