import ServiceCard from "./ServiceCard";

const services = [
  {
    name: "Corte Tradicional",
    price: "R$ 30,00",
    description: "Corte clássico com acabamento perfeito",
  },
  {
    name: "Barba Completa",
    price: "R$ 25,00",
    description: "Aparar, modelar e finalizar a barba",
  },
  {
    name: "Corte + Barba",
    price: "R$ 50,00",
    description: "Combo completo para ficar impecável",
  },
  {
    name: "Sobrancelha",
    price: "R$ 15,00",
    description: "Design e limpeza das sobrancelhas",
  },
  {
    name: "Pézinho",
    price: "R$ 12,00",
    description: "Cuidados e limpeza dos pés",
  },
  {
    name: "Luzes",
    price: "R$ 60,00",
    description: "Iluminação e realce dos cabelos",
  },
  {
    name: "Pigmentação",
    price: "R$ 25,00",
    description: "Pigmentação de cabelo e barba",
  },
  {
    name: "Pintura",
    price: "R$ 25,00",
    description: "Aplicação de pintura nos cabelos",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl text-center font-bold text-[#1E1E1E] mb-4">
            Nossos <span className="text-amber-500">Serviços</span>
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para cuidar do seu visual
            com a qualidade que você merece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.name}
              price={service.price}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
