import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Modal from './Modal';
import QuoteForm from './QuoteForm';

const Hero = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleQuoteSubmit = (data: any) => {
    console.log('Quote request submitted:', data);
    alert('Obrigado! Sua solicitação de orçamento foi enviada com sucesso. Entraremos em contato em breve.');
    setIsQuoteModalOpen(false);
  };

  const scrollToProducts = () => {
    const element = document.querySelector('#produtos');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPartnerships = () => {
    const element = document.querySelector('#parcerias');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Inovação e Sustentabilidade: Canudos e Hashis que Transformam o Futuro
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Feitos com papel e grafeno, resistentes e ecológicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToProducts}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              Conheça Nossos Produtos
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={scrollToPartnerships}
              className="border-2 border-white hover:bg-white hover:text-green-700 text-white px-8 py-3 rounded-md transition-colors"
            >
              Seja um Parceiro
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        title="Solicitar Orçamento"
      >
        <QuoteForm onSubmit={handleQuoteSubmit} />
      </Modal>
    </div>
  );
};

export default Hero;