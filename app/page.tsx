import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Mail, Phone } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import NewsletterForm from "@/components/newsletter-form"
import SpeakerCard from "@/components/speaker-card"
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
          <div className="absolute inset-0 bg-gradient-to-r from-maroon/90 to-maroon-dark/90" />
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
            <Button size="lg" className="bg-gold text-maroon hover:bg-gold/90">
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
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
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-maroon">
                <h3 className="font-bold text-xl mb-2 text-maroon">Technical Sponsorship</h3>
                <p>IEEE, Pune Section</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold">
                <h3 className="font-bold text-xl mb-2 text-maroon">Conference Record</h3>
                <p>No: 67142 (Approval Awaited)</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                <h3 className="font-bold text-xl mb-2 text-maroon">Publication</h3>
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
              <div className="mt-6 text-center">
                <Link href="/about" className="inline-flex items-center text-maroon hover:text-maroon-dark font-medium">
                  Learn More About CCGE-2026
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Papers Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Call for Papers</h2>
          <div className="max-w-4xl mx-auto bg-maroon text-white p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gold">Important Dates</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-gold/20 p-2 rounded mr-3 mt-1">
                      <Calendar className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-medium block">Paper Submission Deadline</span>
                      <span className="text-gray-200">15th January 2026</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold/20 p-2 rounded mr-3 mt-1">
                      <Calendar className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-medium block">Notification of Acceptance</span>
                      <span className="text-gray-200">28th February 2026</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold/20 p-2 rounded mr-3 mt-1">
                      <Calendar className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-medium block">Camera-Ready Submission</span>
                      <span className="text-gray-200">31st March 2026</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gold">Submission Guidelines</h3>
                <p className="text-gray-200 mb-4">
                  Authors are invited to submit original and unpublished research papers that are not under review in
                  any other conference or journal.
                </p>
                <ul className="space-y-2 text-gray-200 list-disc list-inside mb-6">
                  <li>All papers must be submitted in IEEE format</li>
                  <li>Paper length: 6 pages maximum</li>
                  <li>Submissions must be in PDF format</li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="/call-for-papers"
                    className="inline-flex items-center bg-gold text-maroon px-4 py-2 rounded-md font-medium hover:bg-gold/90 transition-colors"
                  >
                    View Full Guidelines
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Keynote Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SpeakerCard
              id="jane-smith"
              name="Dr. Jane Smith"
              role="Professor of Computer Science"
              organization="MIT"
              image="/placeholder.svg?height=300&width=300"
              bio="Dr. Smith is a leading researcher in AI and sustainable computing with over 100 publications."
            />
            <SpeakerCard
              id="john-davis"
              name="Prof. John Davis"
              role="Head of Green Engineering"
              organization="Stanford University"
              image="/placeholder.svg?height=300&width=300"
              bio="Prof. Davis has pioneered several breakthroughs in renewable energy systems and smart grids."
            />
            <SpeakerCard
              id="sarah-johnson"
              name="Dr. Sarah Johnson"
              role="Chief Technology Officer"
              organization="GreenTech Solutions"
              image="/placeholder.svg?height=300&width=300"
              bio="Dr. Johnson brings 15 years of industry experience in implementing sustainable technology solutions."
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/speakers" className="inline-flex items-center text-maroon hover:text-maroon-dark font-medium">
              View All Speakers
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Program Highlights</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-maroon">Day 1 - 7th May 2026</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-sm font-medium bg-maroon text-white px-2 py-1 rounded mr-3 w-20 text-center flex-shrink-0">
                      09:30 AM
                    </span>
                    <div>
                      <span className="font-medium block">Inaugural Ceremony</span>
                      <span className="text-gray-600 text-sm">Welcome address and lighting of the lamp</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm font-medium bg-maroon text-white px-2 py-1 rounded mr-3 w-20 text-center flex-shrink-0">
                      10:30 AM
                    </span>
                    <div>
                      <span className="font-medium block">Keynote Speech</span>
                      <span className="text-gray-600 text-sm">
                        Dr. Jane Smith - "The Future of Sustainable Computing"
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm font-medium bg-maroon text-white px-2 py-1 rounded mr-3 w-20 text-center flex-shrink-0">
                      12:00 PM
                    </span>
                    <div>
                      <span className="font-medium block">Technical Session I</span>
                      <span className="text-gray-600 text-sm">Paper presentations on AI and Machine Learning</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-maroon">Day 2 - 8th May 2026</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-sm font-medium bg-maroon text-white px-2 py-1 rounded mr-3 w-20 text-center flex-shrink-0">
                      09:00 AM
                    </span>
                    <div>
                      <span className="font-medium block">Keynote Speech</span>
                      <span className="text-gray-600 text-sm">
                        Prof. John Davis - "Innovations in Green Engineering"
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm font-medium bg-maroon text-white px-2 py-1 rounded mr-3 w-20 text-center flex-shrink-0">
                      10:00 AM
                    </span>
                    <div>
                      <span className="font-medium block">Technical Session III</span>
                      <span className="text-gray-600 text-sm">Paper presentations on Communication Technologies</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm font-medium bg-maroon text-white px-2 py-1 rounded mr-3 w-20 text-center flex-shrink-0">
                      12:00 PM
                    </span>
                    <div>
                      <span className="font-medium block">Panel Discussion</span>
                      <span className="text-gray-600 text-sm">"Future Trends in Sustainable Technology"</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/program" className="inline-flex items-center text-maroon hover:text-maroon-dark font-medium">
                View Full Program
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Conference Venue</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">JSPM's Rajarshi Shahu College of Engineering</h3>
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-maroon mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      S. No. 80, Pune-Mumbai Bypass Highway, Tathawade, Pune, Maharashtra 411033
                    </p>
                  </div>
                  <div className="flex items-start mb-4">
                    <Phone className="h-5 w-5 text-maroon mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">+91 20 2293 2600</p>
                  </div>
                  <div className="flex items-start mb-6">
                    <Mail className="h-5 w-5 text-maroon mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">ccge2026@jspmrscoe.edu.in</p>
                  </div>
                  <Link
                    href="/venue"
                    className="inline-flex items-center bg-maroon text-white px-4 py-2 rounded-md font-medium hover:bg-maroon-dark transition-colors"
                  >
                    View Venue Details
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
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

      {/* Registration CTA */}
      <section className="py-16 bg-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Register for CCGE-2026</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-200">
            Join us for the 2nd International Conference on Computing, Communication, and Green Engineering. Early bird
            registration is now open!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/registration"
              className="inline-flex items-center bg-gold text-maroon px-6 py-3 rounded-md font-medium hover:bg-gold/90 transition-colors"
            >
              Register Now
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link
              href="/call-for-papers"
              className="inline-flex items-center bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Submit Paper
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-maroon to-maroon-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8">Subscribe to our newsletter to receive the latest updates about CCGE-2026.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  )
}

