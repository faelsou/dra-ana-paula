import React from 'react';
import { Menu} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-neutral-900 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-neutral-400">© 2024 Estética Facial. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;