import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function CallForPapersPage() {
  return (
    <div>
      <PageHeader title="Call for Papers" subtitle="Guidelines for paper submission and important dates" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Important Dates</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-maroon p-3 rounded-full mr-4 mt-1">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Paper Submission Deadline</h3>
                      <p className="text-gray-600">15th January 2026</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-maroon p-3 rounded-full mr-4 mt-1">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Notification of Acceptance</h3>
                      <p className="text-gray-600">28th February 2026</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-maroon p-3 rounded-full mr-4 mt-1">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Camera-Ready Submission</h3>
                      <p className="text-gray-600">31st March 2026</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-maroon p-3 rounded-full mr-4 mt-1">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Early Bird Registration</h3>
                      <p className="text-gray-600">15th April 2026</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-maroon p-3 rounded-full mr-4 mt-1">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Conference Dates</h3>
                      <p className="text-gray-600">7th & 8th May 2026</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Submission Guidelines</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-6">
                  Authors are invited to submit original and unpublished research papers that are not under review in
                  any other conference or journal.
                </p>
                <h3 className="text-lg font-bold mb-4 text-gray-800">Paper Format</h3>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>All papers must be submitted in IEEE format</li>
                  <li>Paper length: 6 pages maximum (including figures and references)</li>
                  <li>Submissions must be in PDF format</li>
                  <li>All papers will undergo a double-blind peer review process</li>
                </ul>

                <h3 className="text-lg font-bold mb-4 text-gray-800">Submission Process</h3>
                <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-2">
                  <li>Prepare your paper according to the IEEE format</li>
                  <li>Remove all author information for the double-blind review process</li>
                  <li>Submit your paper through the conference submission system</li>
                  <li>You will receive a confirmation email after successful submission</li>
                </ol>

                <div className="bg-maroon/10 p-4 rounded-lg border border-maroon/20 mb-6">
                  <h3 className="text-lg font-bold mb-2 text-maroon">Publication</h3>
                  <p className="text-gray-600">
                    All accepted and presented papers will be forwarded for possible inclusion in IEEE Xplore Digital
                    Library, which is indexed by major databases.
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button className="bg-maroon hover:bg-maroon-dark">Submit Your Paper</Button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Topics of Interest</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-maroon">Computing</h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    <li>Artificial Intelligence and Machine Learning</li>
                    <li>Green Computing and Sustainable Technologies</li>
                    <li>Cloud Computing and Big Data Analytics</li>
                    <li>Internet of Things (IoT) and Smart Systems</li>
                    <li>Cybersecurity and Privacy</li>
                    <li>Blockchain Technology</li>
                    <li>Human-Computer Interaction</li>
                    <li>Software Engineering and Development</li>
                    <li>Computer Vision and Image Processing</li>
                    <li>Natural Language Processing</li>
                    <li>Distributed and Parallel Computing</li>
                    <li>Mobile Computing</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-maroon">Communication & Green Engineering</h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    <li>Wireless Communication and Networks</li>
                    <li>5G/6G Technologies</li>
                    <li>Renewable Energy Systems</li>
                    <li>Smart Grid and Energy Management</li>
                    <li>Sustainable Engineering Practices</li>
                    <li>Green Buildings and Infrastructure</li>
                    <li>Environmental Monitoring and Control</li>
                    <li>Waste Management and Recycling Technologies</li>
                    <li>Energy-Efficient Communication Systems</li>
                    <li>Optical Communication</li>
                    <li>Antenna and Propagation</li>
                    <li>Satellite Communication</li>
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

