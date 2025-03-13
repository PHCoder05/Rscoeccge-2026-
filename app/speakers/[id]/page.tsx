import PageHeader from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// This would typically come from a database or API
const speakers = {
  "jane-smith": {
    name: "Dr. Jane Smith",
    role: "Professor of Computer Science",
    organization: "Massachusetts Institute of Technology",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Jane Smith is a leading researcher in AI and sustainable computing with over 100 publications in top-tier journals and conferences. Her work focuses on developing energy-efficient algorithms for machine learning applications.",
    expertise: ["Artificial Intelligence", "Machine Learning", "Green Computing", "Sustainable Technologies"],
    education: [
      "Ph.D. in Computer Science, Stanford University",
      "M.S. in Computer Science, University of California, Berkeley",
      "B.S. in Computer Engineering, MIT",
    ],
    publications: [
      'Smith, J., et al. (2025). "Energy-Efficient Deep Learning for IoT Devices." IEEE Transactions on Sustainable Computing.',
      'Smith, J., & Johnson, R. (2024). "Sustainable AI: Challenges and Opportunities." ACM Computing Surveys.',
      'Smith, J., et al. (2023). "Green Machine Learning: A Survey." Journal of Artificial Intelligence Research.',
    ],
    awards: [
      "ACM Distinguished Scientist, 2024",
      "IEEE Technical Achievement Award, 2023",
      "Outstanding Research Award, MIT, 2022",
    ],
    talk: {
      title: "The Future of Sustainable Computing",
      abstract:
        "This keynote will explore the intersection of artificial intelligence and sustainability, focusing on how we can develop and deploy AI systems that are both powerful and environmentally friendly. Dr. Smith will discuss recent advances in energy-efficient algorithms, hardware optimizations, and system-level approaches to reduce the carbon footprint of computing infrastructure.",
    },
  },
  "john-davis": {
    name: "Prof. John Davis",
    role: "Head of Green Engineering",
    organization: "Stanford University",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Prof. John Davis has pioneered several breakthroughs in renewable energy systems and smart grids. With over 20 years of experience, he has led numerous research projects funded by government agencies and industry partners.",
    expertise: ["Renewable Energy Systems", "Smart Grids", "Energy Management", "Sustainable Engineering"],
    education: [
      "Ph.D. in Electrical Engineering, MIT",
      "M.S. in Energy Systems, ETH Zurich",
      "B.S. in Electrical Engineering, University of Michigan",
    ],
    publications: [
      'Davis, J., et al. (2025). "Next-Generation Smart Grids for Sustainable Cities." IEEE Transactions on Smart Grid.',
      'Davis, J., & Williams, S. (2024). "Renewable Energy Integration in Computing Infrastructure." Renewable and Sustainable Energy Reviews.',
      'Davis, J., et al. (2023). "Energy-Efficient Data Centers: Design and Operation." Energy and Buildings.',
    ],
    awards: [
      "IEEE Power & Energy Society Leadership Award, 2024",
      "National Science Foundation CAREER Award, 2020",
      "Stanford University Excellence in Teaching Award, 2022",
    ],
    talk: {
      title: "Innovations in Green Engineering",
      abstract:
        "This keynote will present the latest innovations in green engineering, with a focus on renewable energy systems and smart grids. Prof. Davis will discuss how these technologies can be integrated with computing and communication infrastructure to create sustainable and resilient systems. The talk will also cover case studies of successful implementations and future research directions.",
    },
  },
  "sarah-johnson": {
    name: "Dr. Sarah Johnson",
    role: "Chief Technology Officer",
    organization: "GreenTech Solutions",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Sarah Johnson brings 15 years of industry experience in implementing sustainable technology solutions. She has led the development of innovative products that have reduced carbon footprints for numerous Fortune 500 companies.",
    expertise: ["Sustainable Product Development", "Green IT", "Carbon Footprint Reduction", "Circular Economy"],
    education: [
      "Ph.D. in Environmental Engineering, University of California, Berkeley",
      "M.B.A., Harvard Business School",
      "B.S. in Chemical Engineering, University of Texas at Austin",
    ],
    publications: [
      'Johnson, S., et al. (2025). "Sustainable Technology Implementation in Enterprise Environments." Journal of Cleaner Production.',
      'Johnson, S., & Brown, T. (2024). "Measuring and Reducing Carbon Footprints in IT Operations." Sustainability.',
      'Johnson, S., et al. (2023). "Circular Economy Approaches for Electronic Waste Management." Resources, Conservation and Recycling.',
    ],
    awards: [
      "Sustainability Leadership Award, World Economic Forum, 2024",
      "Green Tech Innovator of the Year, TechCrunch, 2023",
      "Environmental Business Journal Achievement Award, 2022",
    ],
    talk: {
      title: "From Theory to Practice: Implementing Sustainable Technologies in Industry",
      abstract:
        "This keynote will bridge the gap between academic research and industry implementation of sustainable technologies. Dr. Johnson will share insights from her experience leading sustainability initiatives at GreenTech Solutions and working with Fortune 500 companies. The talk will cover practical approaches to overcoming barriers to adoption, measuring impact, and creating a business case for sustainability.",
    },
  },
  "michael-chen": {
    name: "Dr. Michael Chen",
    role: "Research Director",
    organization: "IBM Research",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Michael Chen leads the Sustainable Computing Research Group at IBM. His team focuses on developing energy-efficient hardware and software solutions for data centers and cloud computing environments.",
    expertise: ["Energy-Efficient Computing", "Data Center Optimization", "Cloud Computing", "Green Hardware Design"],
    education: [
      "Ph.D. in Computer Engineering, Georgia Institute of Technology",
      "M.S. in Electrical Engineering, University of Illinois at Urbana-Champaign",
      "B.S. in Computer Science, University of California, San Diego",
    ],
    publications: [
      'Chen, M., et al. (2025). "Energy-Proportional Computing in Cloud Environments." IEEE Transactions on Cloud Computing.',
      'Chen, M., & Lee, K. (2024). "Thermal Management Techniques for Sustainable Data Centers." ACM Computing Surveys.',
      'Chen, M., et al. (2023). "Green Hardware Design for Next-Generation Computing Systems." IEEE Micro.',
    ],
    awards: [
      "IBM Outstanding Technical Achievement Award, 2024",
      "ACM SIGARCH Maurice Wilkes Award, 2023",
      "IEEE Computer Society Technical Achievement Award, 2022",
    ],
    talk: {
      title: "Sustainable Computing in the Era of AI and Big Data",
      abstract:
        "This keynote will address the growing energy demands of AI and big data workloads and present innovative approaches to make these computations more sustainable. Dr. Chen will discuss IBM's research on energy-efficient hardware architectures, software optimizations, and system-level techniques that can significantly reduce the environmental impact of modern computing applications.",
    },
  },
  "priya-sharma": {
    name: "Prof. Priya Sharma",
    role: "Director, Center for Sustainable Communication",
    organization: "IIT Delhi",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Prof. Priya Sharma is an expert in green communication networks and has contributed significantly to the development of energy-efficient protocols for wireless networks and IoT devices.",
    expertise: ["Green Communication Networks", "Energy-Efficient Protocols", "IoT", "Wireless Networks"],
    education: [
      "Ph.D. in Electrical Engineering, IIT Bombay",
      "M.Tech. in Communication Systems, IIT Madras",
      "B.Tech. in Electronics and Communication, NIT Trichy",
    ],
    publications: [
      'Sharma, P., et al. (2025). "Energy-Efficient MAC Protocols for IoT Networks." IEEE Internet of Things Journal.',
      'Sharma, P., & Gupta, R. (2024). "Green 5G/6G: Challenges and Opportunities." IEEE Communications Magazine.',
      'Sharma, P., et al. (2023). "Sustainable Communication Networks for Smart Cities." IEEE Transactions on Green Communications and Networking.',
    ],
    awards: [
      "IEEE Communications Society Early Career Award, 2024",
      "INSA Young Scientist Award, 2023",
      "IIT Delhi Excellence in Research Award, 2022",
    ],
    talk: {
      title: "Green Communication Networks for a Sustainable Future",
      abstract:
        "This keynote will focus on the design and implementation of energy-efficient communication networks. Prof. Sharma will discuss recent advances in green networking technologies, including energy-efficient protocols for 5G/6G networks, IoT devices, and edge computing. The talk will also address the challenges and opportunities in deploying sustainable communication infrastructure in developing countries.",
    },
  },
  "robert-wilson": {
    name: "Dr. Robert Wilson",
    role: "Senior Scientist",
    organization: "National Renewable Energy Laboratory",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Robert Wilson's research focuses on integrating renewable energy sources with computing infrastructure. He has developed innovative solutions for powering data centers using solar and wind energy.",
    expertise: [
      "Renewable Energy Integration",
      "Data Center Power Management",
      "Solar and Wind Energy",
      "Energy Storage",
    ],
    education: [
      "Ph.D. in Electrical Engineering, University of Colorado Boulder",
      "M.S. in Renewable Energy, Technical University of Denmark",
      "B.S. in Mechanical Engineering, Purdue University",
    ],
    publications: [
      'Wilson, R., et al. (2025). "Renewable-Powered Data Centers: Design and Operation." IEEE Transactions on Sustainable Energy.',
      'Wilson, R., & Martinez, J. (2024). "Energy Storage Solutions for Intermittent Renewable Sources." Renewable Energy.',
      'Wilson, R., et al. (2023). "Carbon-Neutral Computing: A Roadmap." Nature Energy.',
    ],
    awards: [
      "Department of Energy Outstanding Researcher Award, 2024",
      "Renewable Energy World Innovator of the Year, 2023",
      "NREL Director's Award for Scientific Excellence, 2022",
    ],
    talk: {
      title: "Powering the Digital World with Renewable Energy",
      abstract:
        "This keynote will explore the integration of renewable energy sources with computing infrastructure. Dr. Wilson will present case studies of data centers powered by solar and wind energy, discuss the challenges of intermittency and energy storage, and outline a roadmap for achieving carbon-neutral computing. The talk will also cover the economic and policy aspects of transitioning to renewable-powered digital infrastructure.",
    },
  },
}

export default function SpeakerDetailPage({ params }: { params: { id: string } }) {
  const speaker = speakers[params.id as keyof typeof speakers]

  if (!speaker) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Speaker not found</h1>
          <Link href="/speakers" className="text-maroon hover:underline">
            Back to Speakers
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <PageHeader title={speaker.name} subtitle={`${speaker.role}, ${speaker.organization}`} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/speakers" className="inline-flex items-center text-maroon hover:text-maroon-dark mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Speakers
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-1">
                <div className="relative h-80 w-full rounded-lg overflow-hidden">
                  <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{speaker.name}</h2>
                <p className="text-maroon font-medium mb-1">{speaker.role}</p>
                <p className="text-gray-600 mb-4">{speaker.organization}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((area, index) => (
                      <span key={index} className="bg-maroon/10 text-maroon px-3 py-1 rounded-full text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Biography</h3>
                  <p className="text-gray-600">{speaker.bio}</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Keynote Talk</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-maroon">{speaker.talk.title}</h3>
                <p className="text-gray-600">{speaker.talk.abstract}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
                <ul className="space-y-3">
                  {speaker.education.map((edu, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-maroon text-white p-1 rounded-full mr-3 mt-1">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Awards & Honors</h2>
                <ul className="space-y-3">
                  {speaker.awards.map((award, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-gold text-maroon p-1 rounded-full mr-3 mt-1">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Selected Publications</h2>
              <ul className="space-y-4">
                {speaker.publications.map((pub, index) => (
                  <li key={index} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600">{pub}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

