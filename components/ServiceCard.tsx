import { Scissors } from "lucide-react"

interface ServiceCardProps {
  name: string
  price: string
  description: string
}

export default function ServiceCard({ name, price, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
      <Scissors className="h-12 w-12 text-amber-500 mx-auto mb-4" />
      <h4 className="text-xl font-bold text-[#1E1E1E] mb-2">{name}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-amber-500">{price}</div>
    </div>
  )
} 