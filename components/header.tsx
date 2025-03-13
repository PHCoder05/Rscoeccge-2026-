"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Call for Papers", href: "/call-for-papers" },
  { name: "Registration", href: "/registration" },
  { name: "Speakers", href: "/speakers" },
  { name: "Program", href: "/program" },
  { name: "Venue", href: "/venue" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Logo and Title */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/jspm-logo.png" alt="JSPM Logo" width={80} height={80} className="mr-3" />
              <div>
                <h1 className="text-maroon text-xl md:text-2xl font-bold leading-tight">CCGE-2026</h1>
                <p className="text-xs md:text-sm text-gray-700">
                  2<sup>nd</sup> International Conference on Computing, Communication, and Green Engineering
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-maroon hover:bg-gray-50 rounded-md transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Right Logo */}
            <div className="ml-4">
              <Image src="/jspm-logo.png" alt="JSPM Logo" width={80} height={80} />
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-gray-700 hover:text-maroon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-maroon hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Mobile Right Logo */}
            <div className="mt-4 flex justify-center">
              <Image src="/jspm-logo.png" alt="JSPM Logo" width={80} height={80} />
            </div>
          </div>
        </div>
      )}

      {/* Conference Info Banner */}
      <div className="bg-maroon text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
            <div className="mb-2 md:mb-0">
              <span className="font-medium">Technical Sponsorship:</span> IEEE, Pune Section
            </div>
            <div className="mb-2 md:mb-0">
              <span className="font-medium">Conference Record No:</span> 67142 (Approval Awaited)
            </div>
            <div>
              <span className="font-medium">Conference Dates:</span> 7<sup>th</sup> & 8<sup>th</sup> May 2026
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

