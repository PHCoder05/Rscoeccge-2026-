import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SponsorsPage() {
  return (
    <div>
      <PageHeader title="Sponsors & Partners" subtitle="Organizations supporting CCGE-2026" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Technical Sponsor</h2>
              <div className="bg-gray-50 p-8 rounded-xl flex flex-col items-center">
                <div className="w-64 h-32 relative mb-6">
                  <Image
                    src="/placeholder.svg?height=128&width=256&text=IEEE+Pune+Section"
                    alt="IEEE Pune Section"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-center max-w-2xl">
                  IEEE Pune Section was established in 1988 and has been actively promoting IEEE activities in the Pune
                  region. The section has been instrumental in organizing various technical events, conferences, and
                  workshops to foster technological innovation and professional growth.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Organized By</h2>
              <div className="bg-gray-50 p-8 rounded-xl flex flex-col items-center">
                <div className="w-64 h-32 relative mb-6">
                  <Image
                    src="/placeholder.svg?height=128&width=256&text=JSPM's+RSCOE"
                    alt="JSPM's Rajarshi Shahu College of Engineering"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-center max-w-2xl">
                  JSPM's Rajarshi Shahu College of Engineering is an Empowered Autonomous Institute affiliated to
                  Savitribai Phule Pune University. The college is approved by AICTE and accredited by NBA and NAAC with
                  "A" Grade. The institute is committed to providing quality education and fostering research and
                  innovation in the field of engineering.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Gold Sponsors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
                  <div className="w-48 h-24 relative mb-4">
                    <Image
                      src="/placeholder.svg?height=96&width=192&text=TechCorp"
                      alt="TechCorp"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-maroon mb-2">TechCorp</h3>
                  <p className="text-gray-600 text-center">
                    A leading technology company specializing in sustainable computing solutions.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
                  <div className="w-48 h-24 relative mb-4">
                    <Image
                      src="/placeholder.svg?height=96&width=192&text=GreenEnergy"
                      alt="GreenEnergy"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-maroon mb-2">GreenEnergy</h3>
                  <p className="text-gray-600 text-center">
                    Pioneering renewable energy solutions for a sustainable future.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Silver Sponsors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                  <div className="w-36 h-20 relative mb-3">
                    <Image
                      src="/placeholder.svg?height=80&width=144&text=DataSys"
                      alt="DataSys"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-md font-bold text-maroon mb-1">DataSys</h3>
                  <p className="text-gray-600 text-center text-sm">Big data solutions for sustainable businesses.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                  <div className="w-36 h-20 relative mb-3">
                    <Image
                      src="/placeholder.svg?height=80&width=144&text=EcoTech"
                      alt="EcoTech"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-md font-bold text-maroon mb-1">EcoTech</h3>
                  <p className="text-gray-600 text-center text-sm">Eco-friendly technology solutions.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                  <div className="w-36 h-20 relative mb-3">
                    <Image
                      src="/placeholder.svg?height=80&width=144&text=SmartComm"
                      alt="SmartComm"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-md font-bold text-maroon mb-1">SmartComm</h3>
                  <p className="text-gray-600 text-center text-sm">Intelligent communication networks.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Bronze Sponsors</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
                  <div className="w-24 h-16 relative mb-2">
                    <Image
                      src="/placeholder.svg?height=64&width=96&text=IoTSys"
                      alt="IoTSys"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-maroon">IoTSys</h3>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
                  <div className="w-24 h-16 relative mb-2">
                    <Image
                      src="/placeholder.svg?height=64&width=96&text=CloudNet"
                      alt="CloudNet"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-maroon">CloudNet</h3>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
                  <div className="w-24 h-16 relative mb-2">
                    <Image
                      src="/placeholder.svg?height=64&width=96&text=SecureTech"
                      alt="SecureTech"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-maroon">SecureTech</h3>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
                  <div className="w-24 h-16 relative mb-2">
                    <Image
                      src="/placeholder.svg?height=64&width=96&text=AILabs"
                      alt="AILabs"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-maroon">AILabs</h3>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Academic Partners</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                  <div className="w-36 h-20 relative mb-3">
                    <Image
                      src="/placeholder.svg?height=80&width=144&text=MIT"
                      alt="MIT"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-md font-bold text-maroon">Massachusetts Institute of Technology</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                  <div className="w-36 h-20 relative mb-3">
                    <Image
                      src="/placeholder.svg?height=80&width=144&text=Stanford"
                      alt="Stanford University"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-md font-bold text-maroon">Stanford University</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
                  <div className="w-36 h-20 relative mb-3">
                    <Image
                      src="/placeholder.svg?height=80&width=144&text=IIT+Delhi"
                      alt="IIT Delhi"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-md font-bold text-maroon">IIT Delhi</h3>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Become a Sponsor</h2>
              <div className="bg-maroon text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-center">Sponsorship Opportunities</h3>
                <p className="text-center mb-6">
                  Join us as a sponsor and connect with researchers, academicians, and industry professionals in the
                  fields of computing, communication, and green engineering.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="text-lg font-bold mb-2 text-gold">Benefits of Sponsorship</h4>
                    <ul className="space-y-2 list-disc list-inside text-gray-200">
                      <li>Brand visibility to a targeted audience</li>
                      <li>Networking opportunities with experts</li>
                      <li>Access to cutting-edge research</li>
                      <li>Recruitment opportunities</li>
                      <li>Demonstration of commitment to sustainability</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h4 className="text-lg font-bold mb-2 text-gold">Sponsorship Packages</h4>
                    <ul className="space-y-2 list-disc list-inside text-gray-200">
                      <li>Platinum Sponsor: ₹5,00,000</li>
                      <li>Gold Sponsor: ₹3,00,000</li>
                      <li>Silver Sponsor: ₹2,00,000</li>
                      <li>Bronze Sponsor: ₹1,00,000</li>
                      <li>Custom packages available</li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button className="bg-gold text-maroon hover:bg-gold/90">Download Sponsorship Brochure</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

