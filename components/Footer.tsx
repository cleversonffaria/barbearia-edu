import { Scissors } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Scissors className="h-6 w-6 text-amber-500" />
          <span className="text-xl font-bold">Barbearia do Edu</span>
        </div>
        <p className="text-gray-400">© 2025 Barbearia do Edu. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
} 