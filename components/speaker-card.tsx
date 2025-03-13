import Image from "next/image"
import Link from "next/link"

interface SpeakerCardProps {
  id: string
  name: string
  role: string
  organization: string
  image: string
  bio: string
}

export default function SpeakerCard({ id, name, role, organization, image, bio }: SpeakerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-maroon font-medium">{role}</p>
        <p className="text-gray-600 mb-4">{organization}</p>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{bio}</p>
        <Link
          href={`/speakers/${id}`}
          className="text-maroon hover:text-maroon-dark font-medium text-sm inline-flex items-center"
        >
          View Profile
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
  )
}

