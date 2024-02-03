import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Official Website of Stock Sessions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className='relative flex min-h-screen flex-col bg-background'>
          <NavBar />
          <main className='h-full container'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
