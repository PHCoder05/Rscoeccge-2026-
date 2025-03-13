import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Mail, Phone } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import SpeakerCard from "@/components/speaker-card"
import NewsletterForm from "@/components/newsletter-form"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Conference Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            2<sup>nd</sup> International Conference on
            <span className="block mt-2">Computing, Communication, and Green Engineering</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">CCGE-2026</h2>
          <p className="text-xl md:text-2xl mb-8 flex items-center justify-center gap-2">
            <Calendar className="h-6 w-6" /> 7<sup>th</sup> & 8<sup>th</sup> May 2026
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-secondary/20 text-white border-white hover:bg-secondary/30">
              Submit Paper
            </Button>
          </div>
          <div className="mt-12">
            <CountdownTimer targetDate="2026-05-07T09:00:00" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to CCGE-2026</h2>
            <p className="text-lg text-gray-600 mb-8">
              The 2<sup>nd</sup> International Conference on Computing, Communication, and Green Engineering (CCGE-2026)
              brings together researchers, academicians, and industry professionals to share their knowledge and
              research experiences in the fields of computing, communication, and sustainable engineering practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-xl mb-2 text-green-700">Technical Sponsorship</h3>
                <p>IEEE, Pune Section</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-xl mb-2 text-blue-700">Conference Record</h3>
                <p>No: 67142 (Approval Awaited)</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                <h3 className="font-bold text-xl mb-2 text-gray-700">Publication</h3>
                <p>IEEE Xplore Digital Library</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Conference */}
      <section className="py-16 bg-gray-50" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">About the Conference</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-6">
                The 2<sup>nd</sup> International Conference on Computing, Communication, and Green Engineering
                (CCGE-2026) aims to provide a platform for researchers, academicians, and industry professionals to
                present their innovative ideas and research findings in the fields of computing, communication
                technologies, and sustainable engineering practices.
              </p>
              <p className="text-gray-600 mb-6">
                The conference focuses on addressing the challenges and opportunities in developing sustainable
                technologies that minimize environmental impact while maximizing efficiency and performance.
              </p>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Scope of the Conference</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Artificial Intelligence and Machine Learning</li>
                  <li>Green Computing and Sustainable Technologies</li>
                  <li>Internet of Things (IoT) and Smart Systems</li>
                  <li>Cybersecurity and Privacy</li>
                  <li>Cloud Computing and Big Data Analytics</li>
                </ul>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Wireless Communication and Networks</li>
                  <li>Renewable Energy Systems</li>
                  <li>Smart Grid and Energy Management</li>
                  <li>Blockchain Technology</li>
                  <li>Sustainable Engineering Practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Papers */}
      <section className="py-16 bg-white" id="call-for-papers">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Call for Papers</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Important Dates</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded mr-3 mt-1">
                    <Calendar className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <span className="font-medium block">Paper Submission Deadline</span>
                    <span className="text-gray-600">15th January 2026</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded mr-3 mt-1">
                    <Calendar className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <span className="font-medium block">Notification of Acceptance</span>
                    <span className="text-gray-600">28th February 2026</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded mr-3 mt-1">
                    <Calendar className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <span className="font-medium block">Camera-Ready Submission</span>
                    <span className="text-gray-600">31st March 2026</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded mr-3 mt-1">
                    <Calendar className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <span className="font-medium block">Early Bird Registration</span>
                    <span className="text-gray-600">15th April 2026</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-green-700">Submission Guidelines</h3>
              <p className="text-gray-600 mb-4">
                Authors are invited to submit original and unpublished research papers that are not under review in any
                other conference or journal.
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside mb-6">
                <li>All papers must be submitted in IEEE format</li>
                <li>Paper length: 6 pages maximum (including figures and references)</li>
                <li>Submissions must be in PDF format</li>
                <li>All papers will undergo a double-blind peer review process</li>
              </ul>
              <div className="bg-white p-4 rounded-lg border border-green-200 mb-4">
                <p className="text-sm text-gray-600">
                  <strong className="text-green-700">Note:</strong> All accepted and presented papers will be forwarded
                  for possible inclusion in IEEE Xplore.
                </p>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Submit Your Paper</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="py-16 bg-gray-50" id="registration">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Registration</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-blue-600 p-4 text-white text-center">
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
                        className="h-5 w-5 text-green-500 mr-2"
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
                        className="h-5 w-5 text-green-500 mr-2"
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
                        className="h-5 w-5 text-green-500 mr-2"
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
                        className="h-5 w-5 text-green-500 mr-2"
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
                  <Button className="w-full">Register Now</Button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-green-500 relative">
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
                <div className="bg-green-600 p-4 text-white text-center">
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
                        className="h-5 w-5 text-green-500 mr-2"
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
                        className="h-5 w-5 text-green-500 mr-2"
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
                        className="h-5 w-5 text-green-500 mr-2"
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
                        className="h-5 w-5 text-green-500 mr-2"
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
                  <Button className="w-full bg-green-600 hover:bg-green-700">Register Now</Button>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
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
                        className="h-5 w-5 text-green-500 mr-2"
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
                        className="h-5 w-5 text-green-500 mr-2"
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
                        className="h-5 w-5 text-green-500 mr-2"
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
                        className="h-5 w-5 text-green-500 mr-2"
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
                  <Button className="w-full">Register Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-16 bg-white" id="speakers">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Keynote Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SpeakerCard
              name="Dr. Jane Smith"
              role="Professor of Computer Science"
              organization="MIT"
              image="/placeholder.svg?height=300&width=300"
              bio="Dr. Smith is a leading researcher in AI and sustainable computing with over 100 publications."
            />
            <SpeakerCard
              name="Prof. John Davis"
              role="Head of Green Engineering"
              organization="Stanford University"
              image="/placeholder.svg?height=300&width=300"
              bio="Prof. Davis has pioneered several breakthroughs in renewable energy systems and smart grids."
            />
            <SpeakerCard
              name="Dr. Sarah Johnson"
              role="Chief Technology Officer"
              organization="GreenTech Solutions"
              image="/placeholder.svg?height=300&width=300"
              bio="Dr. Johnson brings 15 years of industry experience in implementing sustainable technology solutions."
            />
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 italic">More speakers to be announced soon...</p>
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-16 bg-gray-50" id="schedule">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Program Schedule</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="bg-green-600 p-4 text-white">
                <h3 className="text-xl font-bold">Day 1 - 7th May 2026</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex flex-col md:flex-row border-b pb-6">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">08:30 - 09:30</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Registration & Welcome Kit Distribution</h4>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row border-b pb-6">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">09:30 - 10:30</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Inaugural Ceremony</h4>
                    <p className="text-gray-600">Welcome address and lighting of the lamp</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row border-b pb-6">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">10:30 - 11:30</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Keynote Speech</h4>
                    <p className="text-gray-600">Dr. Jane Smith - "The Future of Sustainable Computing"</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row border-b pb-6">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">11:30 - 12:00</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Tea Break</h4>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row border-b pb-6">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">12:00 - 13:30</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Technical Session I</h4>
                    <p className="text-gray-600">Paper presentations on AI and Machine Learning</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row border-b pb-6">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">13:30 - 14:30</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Lunch Break</h4>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">14:30 - 17:30</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Technical Session II</h4>
                    <p className="text-gray-600">Paper presentations on Green Computing and IoT</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-blue-600 p-4 text-white">
                <h3 className="text-xl font-bold">Day 2 - 8th May 2026</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex flex-col md:flex-row border-b pb-6">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">09:00 - 10:00</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Keynote Speech</h4>
                    <p className="text-gray-600">Prof. John Davis - "Innovations in Green Engineering"</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row border-b pb-6">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">10:00 - 11:30</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Technical Session III</h4>
                    <p className="text-gray-600">Paper presentations on Communication Technologies</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row border-b pb-6">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">11:30 - 12:00</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Tea Break</h4>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row border-b pb-6">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">12:00 - 13:30</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Panel Discussion</h4>
                    <p className="text-gray-600">
                      "Future Trends in Sustainable Technology" - Industry experts and academicians
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row border-b pb-6">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">13:30 - 14:30</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Lunch Break</h4>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row border-b pb-6">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">14:30 - 16:00</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Technical Session IV</h4>
                    <p className="text-gray-600">Paper presentations on Cybersecurity and Blockchain</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">16:00 - 17:00</div>
                  <div className="md:w-3/4">
                    <h4 className="font-bold text-gray-800">Valedictory Function & Certificate Distribution</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="py-16 bg-white" id="venue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Conference Venue</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">JSPM's Rajarshi Shahu College of Engineering</h3>
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      S. No. 80, Pune-Mumbai Bypass Highway, Tathawade, Pune, Maharashtra 411033
                    </p>
                  </div>
                  <div className="flex items-start mb-4">
                    <Phone className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">+91 20 2293 2600</p>
                  </div>
                  <div className="flex items-start mb-6">
                    <Mail className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">ccge2026@jspmrscoe.edu.in</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">How to Reach:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <span>15 km from Pune Railway Station</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <span>20 km from Pune Airport</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <span>Well connected by public transport</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-[300px] md:h-auto relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Conference Venue"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-gray-50" id="sponsors">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Sponsors & Partners</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Technical Sponsor</h3>
              <div className="flex justify-center mb-12">
                <div className="w-64 h-32 relative">
                  <Image
                    src="/placeholder.svg?height=128&width=256"
                    alt="IEEE Pune Section"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Organized By</h3>
              <div className="flex justify-center mb-12">
                <div className="w-64 h-32 relative">
                  <Image
                    src="/placeholder.svg?height=128&width=256"
                    alt="JSPM's Rajarshi Shahu College of Engineering"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Interested in Sponsoring?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join us as a sponsor and connect with researchers, academicians, and industry professionals in the
                  fields of computing, communication, and green engineering.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Download Sponsorship Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8">Subscribe to our newsletter to receive the latest updates about CCGE-2026.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Contact Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded mr-4 mt-1">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-gray-600">ccge2026@jspmrscoe.edu.in</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded mr-4 mt-1">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <p className="text-gray-600">+91 20 2293 2600</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        JSPM's Rajarshi Shahu College of Engineering
                        <br />
                        S. No. 80, Pune-Mumbai Bypass Highway,
                        <br />
                        Tathawade, Pune, Maharashtra 411033
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50" id="gallery">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=Conference+Image+${item}`}
                  alt={`Conference Image ${item}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CCGE-2026</h3>
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
                  <Link href="#about" className="text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#call-for-papers" className="text-gray-300 hover:text-white">
                    Call for Papers
                  </Link>
                </li>
                <li>
                  <Link href="#registration" className="text-gray-300 hover:text-white">
                    Registration
                  </Link>
                </li>
                <li>
                  <Link href="#speakers" className="text-gray-300 hover:text-white">
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link href="#schedule" className="text-gray-300 hover:text-white">
                    Schedule
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">More Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#venue" className="text-gray-300 hover:text-white">
                    Venue
                  </Link>
                </li>
                <li>
                  <Link href="#sponsors" className="text-gray-300 hover:text-white">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
                <Link href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
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
            <p className="text-gray-400 text-sm mt-2">
              Organized by JSPM's Rajarshi Shahu College of Engineering, Pune
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

