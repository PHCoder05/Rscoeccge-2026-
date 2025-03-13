import PageHeader from "@/components/page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgramPage() {
  return (
    <div>
      <PageHeader title="Conference Program" subtitle="Detailed schedule for CCGE-2026" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="day1">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="day1">Day 1 - 7th May 2026</TabsTrigger>
                <TabsTrigger value="day2">Day 2 - 8th May 2026</TabsTrigger>
              </TabsList>

              <TabsContent value="day1">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="bg-maroon p-4 text-white">
                    <h3 className="text-xl font-bold">Day 1 - 7th May 2026</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">08:30 - 09:30</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Registration & Welcome Kit Distribution</h4>
                        <p className="text-gray-600">Conference Hall Foyer</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">09:30 - 10:30</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Inaugural Ceremony</h4>
                        <p className="text-gray-600">Welcome address and lighting of the lamp</p>
                        <p className="text-gray-600">Main Auditorium</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">10:30 - 11:30</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Keynote Speech</h4>
                        <p className="text-gray-600">Dr. Jane Smith - "The Future of Sustainable Computing"</p>
                        <p className="text-gray-600">Main Auditorium</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">11:30 - 12:00</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Tea Break</h4>
                        <p className="text-gray-600">Conference Hall Foyer</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">12:00 - 13:30</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Technical Session I: AI and Machine Learning</h4>
                        <p className="text-gray-600">Session Chair: Prof. Michael Chen, IBM Research</p>
                        <p className="text-gray-600">Room: Seminar Hall 1</p>
                        <div className="mt-2 space-y-2">
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">12:00 - 12:15 | Paper ID: AI-101</p>
                            <p className="text-sm">Energy-Efficient Deep Learning for Edge Devices</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">12:15 - 12:30 | Paper ID: AI-102</p>
                            <p className="text-sm">
                              Sustainable AI: Reducing Carbon Footprint of Large Language Models
                            </p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">12:30 - 12:45 | Paper ID: AI-103</p>
                            <p className="text-sm">Green Machine Learning: A Comparative Study</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">12:45 - 13:00 | Paper ID: AI-104</p>
                            <p className="text-sm">Optimizing Neural Networks for Energy Efficiency</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">13:00 - 13:30 | Discussion</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">13:30 - 14:30</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Lunch Break</h4>
                        <p className="text-gray-600">Dining Hall</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">14:30 - 16:00</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Technical Session II: Green Computing and IoT</h4>
                        <p className="text-gray-600">Session Chair: Dr. Sarah Johnson, GreenTech Solutions</p>
                        <p className="text-gray-600">Room: Seminar Hall 1</p>
                        <div className="mt-2 space-y-2">
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">14:30 - 14:45 | Paper ID: GC-201</p>
                            <p className="text-sm">Energy-Efficient Protocols for IoT Networks</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">14:45 - 15:00 | Paper ID: GC-202</p>
                            <p className="text-sm">Sustainable Data Centers: Design and Implementation</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">15:00 - 15:15 | Paper ID: GC-203</p>
                            <p className="text-sm">Green Cloud Computing: Challenges and Opportunities</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">15:15 - 15:30 | Paper ID: GC-204</p>
                            <p className="text-sm">Energy Harvesting for IoT Devices</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">15:30 - 16:00 | Discussion</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">16:00 - 16:30</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Tea Break</h4>
                        <p className="text-gray-600">Conference Hall Foyer</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">16:30 - 18:00</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Poster Session</h4>
                        <p className="text-gray-600">Exhibition Hall</p>
                        <p className="text-gray-600 mt-2">
                          Researchers will present their work in a poster format, allowing for interactive discussions
                          and networking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="day2">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="bg-maroon p-4 text-white">
                    <h3 className="text-xl font-bold">Day 2 - 8th May 2026</h3>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">09:00 - 10:00</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Keynote Speech</h4>
                        <p className="text-gray-600">Prof. John Davis - "Innovations in Green Engineering"</p>
                        <p className="text-gray-600">Main Auditorium</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">10:00 - 11:30</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Technical Session III: Communication Technologies</h4>
                        <p className="text-gray-600">Session Chair: Prof. Priya Sharma, IIT Delhi</p>
                        <p className="text-gray-600">Room: Seminar Hall 1</p>
                        <div className="mt-2 space-y-2">
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">10:00 - 10:15 | Paper ID: CT-301</p>
                            <p className="text-sm">Energy-Efficient 5G Networks</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">10:15 - 10:30 | Paper ID: CT-302</p>
                            <p className="text-sm">Green Communication Protocols for IoT</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">10:30 - 10:45 | Paper ID: CT-303</p>
                            <p className="text-sm">Sustainable Wireless Sensor Networks</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">10:45 - 11:00 | Paper ID: CT-304</p>
                            <p className="text-sm">Energy-Efficient Routing in Ad Hoc Networks</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">11:00 - 11:30 | Discussion</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">11:30 - 12:00</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Tea Break</h4>
                        <p className="text-gray-600">Conference Hall Foyer</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">12:00 - 13:30</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">
                          Panel Discussion: Future Trends in Sustainable Technology
                        </h4>
                        <p className="text-gray-600">
                          Moderator: Dr. Robert Wilson, National Renewable Energy Laboratory
                        </p>
                        <p className="text-gray-600">Main Auditorium</p>
                        <div className="mt-2">
                          <p className="text-gray-600">
                            <strong>Panelists:</strong>
                          </p>
                          <ul className="list-disc list-inside text-gray-600 mt-1">
                            <li>Dr. Jane Smith, MIT</li>
                            <li>Prof. John Davis, Stanford University</li>
                            <li>Dr. Sarah Johnson, GreenTech Solutions</li>
                            <li>Dr. Michael Chen, IBM Research</li>
                            <li>Prof. Priya Sharma, IIT Delhi</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">13:30 - 14:30</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Lunch Break</h4>
                        <p className="text-gray-600">Dining Hall</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row border-b pb-6">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">14:30 - 16:00</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Technical Session IV: Cybersecurity and Blockchain</h4>
                        <p className="text-gray-600">Session Chair: Dr. Michael Chen, IBM Research</p>
                        <p className="text-gray-600">Room: Seminar Hall 1</p>
                        <div className="mt-2 space-y-2">
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">14:30 - 14:45 | Paper ID: CB-401</p>
                            <p className="text-sm">Energy-Efficient Security Protocols for IoT</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">14:45 - 15:00 | Paper ID: CB-402</p>
                            <p className="text-sm">Sustainable Blockchain: Reducing Energy Consumption</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">15:00 - 15:15 | Paper ID: CB-403</p>
                            <p className="text-sm">Green Cryptography: Energy-Efficient Algorithms</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">15:15 - 15:30 | Paper ID: CB-404</p>
                            <p className="text-sm">Privacy-Preserving Techniques for Smart Grids</p>
                          </div>
                          <div className="bg-gray-50 p-2 rounded">
                            <p className="text-sm font-medium">15:30 - 16:00 | Discussion</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 font-medium text-gray-800 mb-2 md:mb-0">16:00 - 17:00</div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold text-gray-800">Valedictory Function & Certificate Distribution</h4>
                        <p className="text-gray-600">Main Auditorium</p>
                        <div className="mt-2">
                          <p className="text-gray-600">
                            <strong>Agenda:</strong>
                          </p>
                          <ul className="list-disc list-inside text-gray-600 mt-1">
                            <li>Conference Summary</li>
                            <li>Best Paper Awards</li>
                            <li>Certificate Distribution</li>
                            <li>Vote of Thanks</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Conference Workshops</h2>
              <p className="text-gray-600 mb-6">
                Pre-conference workshops will be held on 6th May 2026. These workshops provide hands-on experience and
                in-depth knowledge on specific topics.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-maroon">Workshop 1: Sustainable AI Development</h3>
                  <p className="text-gray-600 mb-2">Time: 9:00 AM - 12:00 PM</p>
                  <p className="text-gray-600 mb-2">Venue: Computer Lab 1</p>
                  <p className="text-gray-600">
                    This workshop will cover practical techniques for developing energy-efficient AI models, including
                    model compression, quantization, and hardware-aware neural architecture search.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-maroon">Workshop 2: Green IoT Implementation</h3>
                  <p className="text-gray-600 mb-2">Time: 1:00 PM - 4:00 PM</p>
                  <p className="text-gray-600 mb-2">Venue: IoT Lab</p>
                  <p className="text-gray-600">
                    This hands-on workshop will demonstrate how to design and implement energy-efficient IoT systems,
                    including energy harvesting, low-power communication protocols, and sleep/wake scheduling.
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                Workshop registration is separate from the main conference registration. Please visit the registration
                page for more details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

