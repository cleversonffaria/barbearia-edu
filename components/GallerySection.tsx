export default function GallerySection() {
  const galleryImages = [
    { src: "/galery/img1.jpeg", alt: "Corte masculino clássico - Barbearia do Edu" },
    { src: "/galery/img2.jpeg", alt: "Barba bem aparada - Barbearia do Edu" },
    { src: "/galery/img3.jpeg", alt: "Corte moderno e estiloso - Barbearia do Edu" },
    { src: "/galery/img4.png", alt: "Ambiente da barbearia - Barbearia do Edu" },
    { src: "/galery/img5.jpeg", alt: "Trabalho profissional - Barbearia do Edu" },
    { src: "/galery/img6.jpeg", alt: "Resultado impecável - Barbearia do Edu" },
  ]

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#1E1E1E] mb-4">
            Nossa <span className="text-amber-500">Galeria</span>
          </h3>
          <p className="text-lg text-gray-700">Confira alguns dos nossos trabalhos e o ambiente da barbearia.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 