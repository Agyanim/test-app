import Nav from '@/components/nav'
import '../style/globals.css'


export const metadata = {
  title: 'My First Next Application',
  description: 'Testing my next js skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}</body>
    </html>
  )
}
