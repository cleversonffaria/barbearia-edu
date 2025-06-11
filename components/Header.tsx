"use client"

import { useState } from "react"
import { Menu, X, Scissors } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-black/50 backdrop-blur-md text-white rounded-xl shadow-2xl border border-gray-800/30">
        <div className="flex justify-between items-center py-3 px-6">
          <div className="flex items-center space-x-2">
            <Scissors className="h-6 w-6 text-amber-500" />
            <h1 className="text-lg font-bold">Barbearia do Edu</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-amber-500 transition-colors text-sm">
              Início
            </a>
            <a href="#sobre" className="hover:text-amber-500 transition-colors text-sm">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-amber-500 transition-colors text-sm">
              Serviços
            </a>
            <a href="#galeria" className="hover:text-amber-500 transition-colors text-sm">
              Galeria
            </a>
            <a href="#contato" className="hover:text-amber-500 transition-colors text-sm">
              Contato
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 px-6">
            <div className="flex flex-col space-y-2 border-t border-white/10 pt-4">
              <a href="#inicio" className="py-2 hover:text-amber-500 transition-colors text-sm">
                Início
              </a>
              <a href="#sobre" className="py-2 hover:text-amber-500 transition-colors text-sm">
                Sobre
              </a>
              <a href="#servicos" className="py-2 hover:text-amber-500 transition-colors text-sm">
                Serviços
              </a>
              <a href="#galeria" className="py-2 hover:text-amber-500 transition-colors text-sm">
                Galeria
              </a>
              <a href="#contato" className="py-2 hover:text-amber-500 transition-colors text-sm">
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
} 