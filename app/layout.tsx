import type { Metadata } from 'next'

import './globals.css'
import Header from '@/components/ui/Header'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

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

      <body className='bg-white dark:bg-[#15171E]' >

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Header />
        </ThemeProvider>
      </body>
    </html>
  )
}
