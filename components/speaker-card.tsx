import Image from "next/image"

interface SpeakerCardProps {
  name: string
  role: string
  organization: string
  image: string
  bio: string
}

export default function SpeakerCard({ name, role, organization, image, bio }: SpeakerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-green-600 font-medium">{role}</p>
        <p className="text-gray-600 mb-4">{organization}</p>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  )
}

