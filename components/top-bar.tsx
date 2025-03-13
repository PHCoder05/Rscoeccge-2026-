import Link from "next/link"
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-maroon text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="tel:+912022932600" className="flex items-center text-xs hover:text-gold">
            <Phone className="h-3 w-3 mr-1" />
            +91 20 2293 2600
          </Link>
          <Link href="mailto:ccge2026@jspmrscoe.edu.in" className="text-xs hover:text-gold">
            ccge2026@jspmrscoe.edu.in
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="#" className="text-white hover:text-gold">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-white hover:text-gold">
            <Instagram className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-white hover:text-gold">
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link href="/admission-enquiry" className="text-xs hover:text-gold ml-4">
            Admission Enquiry
          </Link>
          <Link href="/nirf" className="text-xs hover:text-gold">
            NIRF
          </Link>
          <Link href="/campus-life" className="text-xs hover:text-gold">
            Campus Life
          </Link>
        </div>
      </div>
    </div>
  )
}

