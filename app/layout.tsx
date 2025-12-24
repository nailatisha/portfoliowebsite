import type { Metadata } from 'next'
import { Inter, Playfair_Display, Bebas_Neue, Dancing_Script } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
})

const bebas = Bebas_Neue({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

const dancing = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-script',
})

export const metadata: Metadata = {
  title: 'Portfolio | Creative Professional',
  description: 'Personal portfolio showcasing creative work and achievements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${bebas.variable} ${dancing.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

