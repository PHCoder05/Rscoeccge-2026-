import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegistrationPage() {
  return (
    <div>
      <PageHeader title="Registration" subtitle="Register for CCGE-2026 Conference" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registration Fees</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                  <div className="bg-maroon p-4 text-white text-center">
                    <h3 className="text-xl font-bold">IEEE Members</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold">₹8,000</span>
                      <span className="text-gray-500 block mt-1">Early Bird: ₹7,000</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-maroon mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Conference Kit
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-maroon mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Lunch & Refreshments
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-maroon mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Certificate
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-maroon mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Publication in IEEE Xplore
                      </li>
                    </ul>
                    <Button className="w-full bg-maroon hover:bg-maroon-dark">Register Now</Button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gold relative">
                  <div className="absolute top-0 right-0 bg-gold text-maroon text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                  <div className="bg-gold p-4 text-maroon text-center">
                    <h3 className="text-xl font-bold">Students</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold">₹6,000</span>
                      <span className="text-gray-500 block mt-1">Early Bird: ₹5,000</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-maroon mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Conference Kit
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-maroon mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Lunch & Refreshments
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-maroon mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Certificate
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-maroon mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Publication in IEEE Xplore
                      </li>
                    </ul>
                    <Button className="w-full bg-gold text-maroon hover:bg-gold/90">Register Now</Button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                  <div className="bg-gray-700 p-4 text-white text-center">
                    <h3 className="text-xl font-bold">Industry Professionals</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold">₹10,000</span>
                      <span className="text-gray-500 block mt-1">Early Bird: ₹9,000</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-maroon mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Conference Kit
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-maroon mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Lunch & Refreshments
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-maroon mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Certificate
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-maroon mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Publication in IEEE Xplore
                      </li>
                    </ul>
                    <Button className="w-full bg-maroon hover:bg-maroon-dark">Register Now</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registration Form</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="affiliation">Affiliation/Organization</Label>
                    <Input id="affiliation" placeholder="Enter your affiliation or organization" />
                  </div>

                  <div className="space-y-2">
                    <Label>Registration Type</Label>
                    <RadioGroup defaultValue="student">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="ieee" id="ieee" />
                          <Label htmlFor="ieee">IEEE Member (₹8,000)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="student" id="student" />
                          <Label htmlFor="student">Student (₹6,000)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="industry" id="industry" />
                          <Label htmlFor="industry">Industry Professional (₹10,000)</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Paper Details (if applicable)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="paperTitle">Paper Title</Label>
                        <Input id="paperTitle" placeholder="Enter your paper title" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="paperID">Paper ID</Label>
                        <Input id="paperID" placeholder="Enter your paper ID" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Special Requirements (if any)</Label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon"
                      rows={3}
                      placeholder="Enter any special requirements or dietary restrictions"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full bg-maroon hover:bg-maroon-dark">
                      Submit Registration
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Payment Information</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Bank Transfer Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="font-medium mr-2 text-gray-800">Account Name:</span>
                          <span className="text-gray-600">JSPM's RSCOE Conference Account</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2 text-gray-800">Account Number:</span>
                          <span className="text-gray-600">123456789012345</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2 text-gray-800">Bank Name:</span>
                          <span className="text-gray-600">State Bank of India</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="font-medium mr-2 text-gray-800">Branch:</span>
                          <span className="text-gray-600">Tathawade, Pune</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2 text-gray-800">IFSC Code:</span>
                          <span className="text-gray-600">SBIN0012345</span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-medium mr-2 text-gray-800">SWIFT Code:</span>
                          <span className="text-gray-600">SBININBB123</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-maroon/10 p-4 rounded-lg border border-maroon/20 mb-6">
                  <h3 className="text-lg font-bold mb-2 text-maroon">Important Note</h3>
                  <p className="text-gray-600">
                    After making the payment, please email the payment confirmation/receipt to
                    <a href="mailto:ccge2026@jspmrscoe.edu.in" className="text-maroon font-medium">
                      {" "}
                      ccge2026@jspmrscoe.edu.in
                    </a>
                    with your name and registration details.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Cancellation Policy</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Cancellations made before 1st April 2026 will receive a 70% refund.</li>
                    <li>Cancellations made between 1st April and 15th April 2026 will receive a 50% refund.</li>
                    <li>No refunds will be provided for cancellations made after 15th April 2026.</li>
                    <li>All cancellation requests must be sent to ccge2026@jspmrscoe.edu.in.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

