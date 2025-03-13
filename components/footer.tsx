import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-maroon text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/jspm-logo.png" alt="JSPM Logo" width={60} height={60} className="mr-3" />
              <h3 className="text-xl font-bold">CCGE-2026</h3>
            </div>
            <p className="text-gray-300 mb-4">
              2<sup>nd</sup> International Conference on Computing, Communication, and Green Engineering
            </p>
            <p className="text-gray-300">
              7<sup>th</sup> & 8<sup>th</sup> May 2026
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold">
                  About
                </Link>
              </li>
              <li>
                <Link href="/call-for-papers" className="text-gray-300 hover:text-gold">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-gray-300 hover:text-gold">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-gray-300 hover:text-gold">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-300 hover:text-gold">
                  Program
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">More Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/venue" className="text-gray-300 hover:text-gold">
                  Venue
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-gray-300 hover:text-gold">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-gold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-gold">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link
                href="#"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-gold hover:text-maroon transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-gold hover:text-maroon transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-gold hover:text-maroon transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-gold hover:text-maroon transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-gray-300">
              <strong>Email:</strong> ccge2026@jspmrscoe.edu.in
            </p>
            <p className="text-gray-300">
              <strong>Phone:</strong> +91 20 2293 2600
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} CCGE-2026. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2">Organized by JSPM's Rajarshi Shahu College of Engineering, Pune</p>
        </div>
      </div>
    </footer>
  )
}

