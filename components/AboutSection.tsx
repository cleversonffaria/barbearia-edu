import { Users, Award, Star } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl text-center font-bold text-[#1E1E1E] mb-6">
            Sobre a <span className="text-amber-500">Barbearia</span>
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Fundada pelo Edu, nossa barbearia combina técnicas tradicionais com tendências modernas. Com mais de uma
            década de experiência, oferecemos um atendimento personalizado em um ambiente acolhedor e profissional.
          </p>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <Users className="h-12 w-12 text-amber-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#1E1E1E]">500+</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div>
              <Award className="h-12 w-12 text-amber-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#1E1E1E]">10+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div>
              <Star className="h-12 w-12 text-amber-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-[#1E1E1E]">5.0</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 