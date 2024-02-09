import { Inter } from 'next/font/google';
import "./globals.css";
import { Header } from './components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Isaac Arias CV',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="icon" type="image/png" href="cv_isaac/icons/cv_icon.png"/>
    <body className={inter.className}>{children}
    <Header />
    </body>
    </html>
  )
}
