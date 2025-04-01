import React, { useState } from 'react';
import { X, Phone } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const message = `Olá! Gostaria de agendar uma avaliação.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nServiço: ${formData.service}\nMensagem: ${formData.message}`;
    
    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/5511964478967?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Close modal and reset form
    onClose();
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg relative my-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-700"
        >
          <X />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-light mb-6">Agende Sua Avaliação</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Telefone
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Serviço de Interesse
              </label>
              <select
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">O que você gostaria de fazer?</option>
                <option value="Toxina Botulínica">Toxina Botulínica (Botox)</option>
                <option value="Preenchimento">Preenchimento com Ácido Hialurônico</option>
                <option value="Harmonização Facial">Harmonização Facial</option>
                <option value="Limpeza de Pele">Limpeza de Pele Profunda</option>
                <option value="Outros">Outros Tratamentos</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Mensagem (opcional)
              </label>
              <textarea
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-neutral-900 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-neutral-800 transition"
            >
              <Phone className="w-5 h-5" />
              Continuar no WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;