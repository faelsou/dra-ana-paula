import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import BookingModal from './BookingModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
            BELEZA ALÉM
              <span className="block text-neutral-900 font-normal">DO TEMPO</span>
            </h1>
            <p className="text-neutral-600 text-lg mb-8">
              Descubra tratamentos personalizados que realçam sua beleza natural com tecnologia de ponta e profissionais especializados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-neutral-900 text-white px-8 py-3 rounded-full flex items-center justify-center hover:bg-neutral-800 transition"
              >
                Agende Sua Avaliação
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#services"
                className="border border-neutral-300 text-neutral-900 px-8 py-3 rounded-full hover:bg-neutral-50 transition text-center"
              >
                Conheça Nossos Serviços
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80"
              alt="Tratamento facial"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;