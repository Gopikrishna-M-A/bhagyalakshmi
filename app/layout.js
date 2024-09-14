import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "Bhagyalakshmi Builders",
  description:
    "We specialize in delivering high quality construction projects that meet the evolving needs of our clients and the environment.",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f7f7f5] max-w-6xl mx-auto`}>
        <Header />
        <main className=' '>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
