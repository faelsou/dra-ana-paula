import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const services = [
  {
    category: "Rejuvenescimento Facial",
    items: [
      "Toxina Botulínica (Botox)",
      "Preenchimento com Ácido Hialurônico",
      "Bioestimuladores de Colágeno",
      "Lifting sem Cirurgia",
      "Fios de PDO"
    ]
  },
  {
    category: "Tratamentos para a Pele",
    items: [
      "Limpeza de Pele Profunda",
      "Peeling Químico e Mecânico",
      "Laser CO₂ Fracionado",
      "Microagulhamento",
      "Terapia Fotodinâmica"
    ]
  },
  {
    category: "Harmonização Facial",
    items: [
      "Contorno Mandibular",
      "Rinomodelação",
      "Preenchimento Labial",
      "Lipo de Papada Enzimática",
      "Correção de Assimetrias"
    ]
  }
];

const ServiceCard = ({ category, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{category}</h3>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-neutral-600">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;