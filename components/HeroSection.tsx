import { Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-[#1E1E1E] text-white py-20 min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/90 to-black/50"></div>
      <div className="container mx-auto px-4 text-center pt-20 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Barbearia do <span className="text-amber-500">Edu</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Tradição, qualidade e estilo em cada corte. Mais de 10 anos cuidando
          do seu visual com excelência.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/agendamentoedubarbearia/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-[#1E1E1E] font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl"
          >
            <Phone className="mr-2 h-5 w-5" />
            Agendar Horário
          </a>
          <a
            href="#servicos"
            className="border-2 border-white hover:bg-white hover:text-[#1E1E1E] font-bold py-4 px-8 rounded-lg transition-colors shadow-lg backdrop-blur-sm"
          >
            Ver Serviços
          </a>
        </div>
      </div>
    </section>
  );
}
