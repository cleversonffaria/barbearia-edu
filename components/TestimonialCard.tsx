import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  rating: number
  comment: string
}

export default function TestimonialCard({ name, rating, comment }: TestimonialCardProps) {
  return (
    <div className="bg-[#2A2A2A] rounded-lg p-6">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
        ))}
      </div>
      <p className="text-gray-300 mb-4">&ldquo;{comment}&rdquo;</p>
      <div className="font-bold text-amber-500">{name}</div>
    </div>
  )
} 