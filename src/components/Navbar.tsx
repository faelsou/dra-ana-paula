import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BookingModal from './BookingModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-light tracking-wider">Dra. Ana Paula Souza</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-neutral-600 hover:text-neutral-900">Home</a>
            <a href="#about" className="text-neutral-600 hover:text-neutral-900">Sobre</a>
            <a href="#services" className="text-neutral-600 hover:text-neutral-900">Serviços</a>
            <a href="#contact" className="text-neutral-600 hover:text-neutral-900">Contato</a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-neutral-900 text-white px-6 py-2 rounded-full hover:bg-neutral-800 transition"
            >
              Agendar
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-neutral-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-neutral-600">Sobre</a>
            <a href="#services" className="block px-3 py-2 text-neutral-600">Serviços</a>
            <a href="#contact" className="block px-3 py-2 text-neutral-600">Contato</a>
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsOpen(false);
              }}
              className="w-full mt-2 bg-neutral-900 text-white px-6 py-2 rounded-full"
            >
              Agendar
            </button>
          </div>
        </div>
      )}

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;