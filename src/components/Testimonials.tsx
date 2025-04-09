//import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Cicera Maria",
    role: "Cliente",
    content: "Resultados incríveis com o tratamento de harmonização facial. Equipe super profissional e atenciosa!",
    rating: 5
  },
  {
    name: "Dr. João Paulo",
    role: "Dermatologista Parceiro",
    content: "Estrutura e equipamentos de primeira linha. Ótima parceria para atendimento dos meus pacientes.",
    rating: 5
  },
  {
    name: "Paula Souza",
    role: "Cliente",
    content: "Adorei o resultado do meu preenchimento labial. Natural e harmonioso, exatamente como eu queria!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
          O Que Dizem Nossos Clientes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-neutral-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;