import { ReactNode } from "react"

interface ContactCardProps {
  icon: ReactNode
  title: string
  children: ReactNode
}

export default function ContactCard({ icon, title, children }: ContactCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="h-12 w-12 text-amber-500 mx-auto mb-4">{icon}</div>
      <h4 className="text-xl font-bold text-[#1E1E1E] mb-2">{title}</h4>
      {children}
    </div>
  )
} 