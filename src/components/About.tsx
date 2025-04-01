import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80"
              alt="Clínica moderna"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Excelência em Estética Facial
            </h2>
            <p className="text-neutral-600 mb-8">
              Com mais de 10 anos de experiência, combinamos tecnologia de ponta e expertise profissional para oferecer tratamentos personalizados que realçam sua beleza natural.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-neutral-900" />
                <span>Profissionais altamente qualificados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-neutral-900" />
                <span>Tecnologia de última geração</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-neutral-900" />
                <span>Atendimento personalizado</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-neutral-900" />
                <span>Resultados comprovados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;