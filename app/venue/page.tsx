import PageHeader from "@/components/page-header"
import Image from "next/image"
import { MapPin, Phone, Mail, Car, Plane, Train } from "lucide-react"

export default function VenuePage() {
  return (
    <div>
      <PageHeader title="Conference Venue" subtitle="Location and accommodation information" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Venue Information</h2>
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      JSPM's Rajarshi Shahu College of Engineering
                    </h3>
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
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-800">About the Venue:</h4>
                      <p className="text-gray-600">
                        JSPM's Rajarshi Shahu College of Engineering is an Empowered Autonomous Institute affiliated to
                        Savitribai Phule Pune University. The campus features modern conference facilities,
                        state-of-the-art laboratories, and a serene environment conducive for academic discussions.
                      </p>
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

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">How to Reach</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-maroon p-3 rounded-full mr-4 mt-1">
                    <Plane className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">By Air</h3>
                    <p className="text-gray-600 mb-2">
                      The nearest airport is Pune International Airport, which is approximately 20 km from the venue.
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Taxi services are available from the airport to the venue (approx. 45-60 minutes).</li>
                      <li>App-based cab services like Uber and Ola are also available.</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-maroon p-3 rounded-full mr-4 mt-1">
                    <Train className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">By Train</h3>
                    <p className="text-gray-600 mb-2">Pune Railway Station is approximately 15 km from the venue.</p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Taxi services are available from the railway station to the venue (approx. 30-45 minutes).
                      </li>
                      <li>Public buses are also available from Pune Railway Station to Tathawade.</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-maroon p-3 rounded-full mr-4 mt-1">
                    <Car className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">By Road</h3>
                    <p className="text-gray-600 mb-2">
                      The venue is located on the Pune-Mumbai Highway (NH-48) in Tathawade.
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>From Pune City: Approximately 15 km (30-45 minutes drive).</li>
                      <li>From Mumbai: Approximately 150 km (3-4 hours drive).</li>
                      <li>Public buses are available from Pune Bus Station to Tathawade.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Accommodation</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-6">
                  We have arranged special rates for conference attendees at the following hotels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-bold text-maroon mb-2">Hotel Grand Pune</h3>
                    <p className="text-gray-600 mb-1">Distance from venue: 3 km</p>
                    <p className="text-gray-600 mb-1">Rate: ₹4,500 per night</p>
                    <p className="text-gray-600 mb-1">Contact: +91 20 1234 5678</p>
                    <p className="text-gray-600">Email: reservations@hotelgrandpune.com</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-bold text-maroon mb-2">Tathawade Inn</h3>
                    <p className="text-gray-600 mb-1">Distance from venue: 1 km</p>
                    <p className="text-gray-600 mb-1">Rate: ₹3,200 per night</p>
                    <p className="text-gray-600 mb-1">Contact: +91 20 8765 4321</p>
                    <p className="text-gray-600">Email: bookings@tathawadeinn.com</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-bold text-maroon mb-2">Hinjewadi Business Hotel</h3>
                    <p className="text-gray-600 mb-1">Distance from venue: 5 km</p>
                    <p className="text-gray-600 mb-1">Rate: ₹5,000 per night</p>
                    <p className="text-gray-600 mb-1">Contact: +91 20 2468 1357</p>
                    <p className="text-gray-600">Email: info@hinjewadibusinesshotel.com</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-bold text-maroon mb-2">Budget Stay Pune</h3>
                    <p className="text-gray-600 mb-1">Distance from venue: 2 km</p>
                    <p className="text-gray-600 mb-1">Rate: ₹2,500 per night</p>
                    <p className="text-gray-600 mb-1">Contact: +91 20 1357 2468</p>
                    <p className="text-gray-600">Email: reservations@budgetstaypune.com</p>
                  </div>
                </div>
                <div className="bg-maroon/10 p-4 rounded-lg border border-maroon/20 mt-6">
                  <h3 className="text-lg font-bold mb-2 text-maroon">Booking Information</h3>
                  <p className="text-gray-600">
                    To avail the special conference rates, please mention "CCGE-2026" when making your reservation. For
                    assistance with accommodation, please contact the conference secretariat at
                    <a href="mailto:ccge2026@jspmrscoe.edu.in" className="text-maroon font-medium">
                      {" "}
                      ccge2026@jspmrscoe.edu.in
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Local Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Shaniwar+Wada"
                      alt="Shaniwar Wada"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-maroon mb-2">Shaniwar Wada</h3>
                  <p className="text-gray-600 mb-1">Distance from venue: 18 km</p>
                  <p className="text-gray-600">
                    Historical fortification in the city of Pune, built in 1732 and the seat of the Peshwas of the
                    Maratha Empire.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Aga+Khan+Palace"
                      alt="Aga Khan Palace"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-maroon mb-2">Aga Khan Palace</h3>
                  <p className="text-gray-600 mb-1">Distance from venue: 22 km</p>
                  <p className="text-gray-600">
                    A historical building that served as a prison for Mahatma Gandhi, his wife Kasturba Gandhi, and his
                    secretary Mahadev Desai.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Lavasa"
                      alt="Lavasa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-maroon mb-2">Lavasa</h3>
                  <p className="text-gray-600 mb-1">Distance from venue: 60 km</p>
                  <p className="text-gray-600">
                    A private, planned city built near Pune, known for its beautiful landscapes and architecture.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Sinhagad+Fort"
                      alt="Sinhagad Fort"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-maroon mb-2">Sinhagad Fort</h3>
                  <p className="text-gray-600 mb-1">Distance from venue: 35 km</p>
                  <p className="text-gray-600">
                    An ancient fortress located on a hill about 35 km southwest of Pune, offering panoramic views of the
                    surrounding landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

