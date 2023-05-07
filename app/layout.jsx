import Nav from '@/components/nav'
import '../style/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My First Next Application',
  description: 'Testing my next js skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}</body>
    </html>
  )
}
