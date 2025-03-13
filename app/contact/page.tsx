import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact Us" subtitle="Get in touch with the CCGE-2026 organizing committee" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-maroon p-3 rounded-full mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Address</h3>
                      <p className="text-gray-600">
                        JSPM's Rajarshi Shahu College of Engineering
                        <br />
                        S. No. 80, Pune-Mumbai Bypass Highway,
                        <br />
                        Tathawade, Pune, Maharashtra 411033
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-maroon p-3 rounded-full mr-4 mt-1">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+91 20 2293 2600</p>
                      <p className="text-gray-600">+91 98765 43210 (Conference Secretary)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-maroon p-3 rounded-full mr-4 mt-1">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Email</h3>
                      <p className="text-gray-600">ccge2026@jspmrscoe.edu.in</p>
                      <p className="text-gray-600">info.ccge2026@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-maroon p-3 rounded-full mr-4 mt-1">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Office Hours</h3>
                      <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-maroon hover:bg-maroon-dark">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Organizing Committee</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-maroon">General Chair</h3>
                  <p className="font-medium text-gray-800">Prof. Rajesh Kumar</p>
                  <p className="text-gray-600">Principal, JSPM's RSCOE</p>
                  <p className="text-gray-600 mt-2">Email: principal@jspmrscoe.edu.in</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-maroon">Conference Chair</h3>
                  <p className="font-medium text-gray-800">Dr. Amit Sharma</p>
                  <p className="text-gray-600">Professor, Computer Engineering</p>
                  <p className="text-gray-600 mt-2">Email: amit.sharma@jspmrscoe.edu.in</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2 text-maroon">Technical Program Chair</h3>
                  <p className="font-medium text-gray-800">Dr. Priya Patel</p>
                  <p className="text-gray-600">Professor, Electronics & Communication</p>
                  <p className="text-gray-600 mt-2">Email: priya.patel@jspmrscoe.edu.in</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Location Map</h2>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=450&width=800&text=Google+Map"
                    alt="Location Map"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="text-center mt-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-maroon hover:text-maroon-dark font-medium"
                  >
                    View Larger Map
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

