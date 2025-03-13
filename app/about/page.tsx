import PageHeader from "@/components/page-header"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div>
      <PageHeader title="About the Conference" subtitle="Learn more about CCGE-2026 and its objectives" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">About CCGE-2026</h2>
                <p className="text-gray-600 mb-4">
                  The 2<sup>nd</sup> International Conference on Computing, Communication, and Green Engineering
                  (CCGE-2026) aims to provide a platform for researchers, academicians, and industry professionals to
                  present their innovative ideas and research findings in the fields of computing, communication
                  technologies, and sustainable engineering practices.
                </p>
                <p className="text-gray-600">
                  The conference focuses on addressing the challenges and opportunities in developing sustainable
                  technologies that minimize environmental impact while maximizing efficiency and performance.
                </p>
              </div>
              <div className="relative h-64 md:h-80">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Conference"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Conference Objectives</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-maroon text-white p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Knowledge Exchange</h3>
                    <p className="text-gray-600">
                      To facilitate the exchange of ideas, research findings, and experiences among researchers,
                      academicians, and industry professionals in the fields of computing, communication, and green
                      engineering.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-maroon text-white p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Promote Sustainable Technologies</h3>
                    <p className="text-gray-600">
                      To promote the development and adoption of sustainable technologies that minimize environmental
                      impact while maximizing efficiency and performance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-maroon text-white p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Foster Collaboration</h3>
                    <p className="text-gray-600">
                      To foster collaboration between academia and industry to address real-world challenges in
                      computing, communication, and green engineering.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-maroon text-white p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Showcase Innovation</h3>
                    <p className="text-gray-600">
                      To provide a platform for showcasing innovative research and development in emerging technologies
                      related to computing, communication, and green engineering.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Scope of the Conference</h2>
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
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Technical Sponsorship</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                    <div className="w-40 h-40 relative">
                      <Image
                        src="/placeholder.svg?height=160&width=160"
                        alt="IEEE Pune Section"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4 md:pl-8">
                    <h3 className="text-xl font-bold mb-2 text-maroon">IEEE Pune Section</h3>
                    <p className="text-gray-600 mb-4">
                      CCGE-2026 is technically sponsored by the IEEE Pune Section. The IEEE Pune Section was established
                      in 1988 and has been actively promoting IEEE activities in the Pune region.
                    </p>
                    <p className="text-gray-600">
                      All accepted and presented papers will be forwarded for possible inclusion in IEEE Xplore Digital
                      Library, which is indexed by major databases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

