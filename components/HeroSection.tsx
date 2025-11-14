import { Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-[#1E1E1E] text-white py-20 min-h-screen flex items-center bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/background_section.png'), url('/background.png')",
        backgroundSize: "contain, cover",
        backgroundPosition: "center, center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)",
        }}
      ></div>
      <div className="container mx-auto px-4 text-center pt-20 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
          Barbearia do <span className="text-amber-500">Edu</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto [text-shadow:_1px_1px_4px_rgb(0_0_0_/_90%)]">
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
