import TestimonialCard from "./TestimonialCard"

const testimonials = [
  {
    name: "João Silva",
    rating: 5,
    comment: "Melhor barbearia da região! Edu é um profissional excepcional.",
  },
  {
    name: "Carlos Santos",
    rating: 5,
    comment: "Sempre saio satisfeito. Atendimento nota 10 e preço justo.",
  },
  {
    name: "Pedro Lima",
    rating: 4,
    comment: "Ambiente acolhedor e serviço de qualidade. Recomendo!",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#1E1E1E] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">
            O que nossos <span className="text-amber-500">clientes</span> dizem
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              comment={testimonial.comment}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 