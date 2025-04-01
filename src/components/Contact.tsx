import React, { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511964478967', '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Agende Sua Avaliação
          </h2>
          <p className="text-neutral-600 mb-8">
            Entre em contato conosco para uma avaliação personalizada e descubra o tratamento ideal para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-neutral-900 text-white px-8 py-3 rounded-full flex items-center justify-center hover:bg-neutral-800 transition"
            >
              <Calendar className="mr-2" />
              Agendar Consulta
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="border border-neutral-300 text-neutral-900 px-8 py-3 rounded-full flex items-center justify-center hover:bg-neutral-50 transition"
            >
              <Phone className="mr-2" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Contact;