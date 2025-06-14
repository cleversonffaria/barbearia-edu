import { Phone, MapPin, Clock } from "lucide-react"
import ContactCard from "./ContactCard"

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#1E1E1E] mb-4">Entre em Contato</h3>
          <p className="text-lg text-gray-800">Agende seu horário e venha cuidar do seu visual conosco!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <ContactCard icon={<Phone className="h-12 w-12" />} title="Telefone">
            <a 
              href="https://wa.me/5522997334974" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#1E1E1E] transition-colors cursor-pointer"
            >
              (22) 99733-4974
            </a> 
          </ContactCard>

          <ContactCard icon={<MapPin className="h-12 w-12" />} title="Endereço">
            <p className="text-gray-700">Av. Maj. Bley, 16</p>
            <p className="text-gray-700">Centro - Bom Jesus do Norte/ES</p>
          </ContactCard>

          <ContactCard icon={<Clock className="h-12 w-12" />} title="Horário">
            <p className="text-gray-700">Ter - Sex: 8h às 19h</p>
            <p className="text-gray-700">Sáb: 8h às 19h</p>
          </ContactCard>
        </div>
      </div>
    </section>
  )
} 