import Navbar from '@/components/navbar/nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CapyBara',
  description: 'This is a Test App. You can watch how to build this on https://www.youtube.com/watch?v=VE8BkImUciY&t=7662s or just search Lama Dev on youtube. Thank You',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <div className='container'>
          <Navbar/>
          {children}
          <Footer/>
        </div>

      </body>
    </html>
  )
}
