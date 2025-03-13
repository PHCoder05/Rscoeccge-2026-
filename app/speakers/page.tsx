import PageHeader from "@/components/page-header"
import SpeakerCard from "@/components/speaker-card"

const speakers = [
  {
    id: "jane-smith",
    name: "Dr. Jane Smith",
    role: "Professor of Computer Science",
    organization: "MIT",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Smith is a leading researcher in AI and sustainable computing with over 100 publications in top-tier journals and conferences. Her work focuses on developing energy-efficient algorithms for machine learning applications.",
  },
  {
    id: "john-davis",
    name: "Prof. John Davis",
    role: "Head of Green Engineering",
    organization: "Stanford University",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Prof. Davis has pioneered several breakthroughs in renewable energy systems and smart grids. With over 20 years of experience, he has led numerous research projects funded by government agencies and industry partners.",
  },
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    role: "Chief Technology Officer",
    organization: "GreenTech Solutions",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Johnson brings 15 years of industry experience in implementing sustainable technology solutions. She has led the development of innovative products that have reduced carbon footprints for numerous Fortune 500 companies.",
  },
  {
    id: "michael-chen",
    name: "Dr. Michael Chen",
    role: "Research Director",
    organization: "IBM Research",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Chen leads the Sustainable Computing Research Group at IBM. His team focuses on developing energy-efficient hardware and software solutions for data centers and cloud computing environments.",
  },
  {
    id: "priya-sharma",
    name: "Prof. Priya Sharma",
    role: "Director, Center for Sustainable Communication",
    organization: "IIT Delhi",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Prof. Sharma is an expert in green communication networks and has contributed significantly to the development of energy-efficient protocols for wireless networks and IoT devices.",
  },
  {
    id: "robert-wilson",
    name: "Dr. Robert Wilson",
    role: "Senior Scientist",
    organization: "National Renewable Energy Laboratory",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Wilson's research focuses on integrating renewable energy sources with computing infrastructure. He has developed innovative solutions for powering data centers using solar and wind energy.",
  },
]

export default function SpeakersPage() {
  return (
    <div>
      <PageHeader title="Keynote Speakers" subtitle="Meet our distinguished speakers for CCGE-2026" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker) => (
                <SpeakerCard
                  key={speaker.id}
                  id={speaker.id}
                  name={speaker.name}
                  role={speaker.role}
                  organization={speaker.organization}
                  image={speaker.image}
                  bio={speaker.bio}
                />
              ))}
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Call for Speakers</h2>
              <p className="text-gray-600 text-center mb-6">
                We are currently accepting proposals for additional speakers for CCGE-2026. If you are an expert in the
                fields of computing, communication, or green engineering and would like to share your knowledge and
                insights at our conference, please contact us.
              </p>
              <div className="flex justify-center">
                <a
                  href="mailto:ccge2026@jspmrscoe.edu.in"
                  className="inline-flex items-center bg-maroon text-white px-6 py-3 rounded-md font-medium hover:bg-maroon-dark transition-colors"
                >
                  Contact Us to Speak
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

