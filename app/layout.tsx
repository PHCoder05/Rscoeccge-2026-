import type React from "react"
import "@/app/globals.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Mountain } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "CCGE-2026 | 2nd International Conference on Computing, Communication, and Green Engineering",
  description:
    "The 2nd International Conference on Computing, Communication, and Green Engineering (CCGE-2026) will be held on 7th & 8th May 2026.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Mountain className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">CCGE-2026</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#call-for-papers" className="text-sm font-medium hover:text-primary transition-colors">
                  Call for Papers
                </Link>
                <Link href="#registration" className="text-sm font-medium hover:text-primary transition-colors">
                  Registration
                </Link>
                <Link href="#speakers" className="text-sm font-medium hover:text-primary transition-colors">
                  Speakers
                </Link>
                <Link href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">
                  Schedule
                </Link>
                <Link href="#venue" className="text-sm font-medium hover:text-primary transition-colors">
                  Venue
                </Link>
                <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
              <div className="md:hidden">
                <button className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}