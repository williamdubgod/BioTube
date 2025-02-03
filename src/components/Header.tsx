import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Modal from './Modal';
import QuoteForm from './QuoteForm';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Sustentabilidade', href: '#sustentabilidade' },
    { name: 'Parcerias', href: '#parcerias' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
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

  const handleQuoteSubmit = (data: any) => {
    console.log('Quote request submitted:', data);
    alert('Obrigado! Sua solicitação de orçamento foi enviada com sucesso. Entraremos em contato em breve.');
    setIsQuoteModalOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-green-700' : 'text-white'
            }`}
          >
            BioTube
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`transition-colors ${
                  isScrolled ? 'text-gray-600 hover:text-green-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className={`px-4 py-2 rounded-md transition-colors ${
                isScrolled 
                  ? 'bg-green-700 text-white hover:bg-green-800' 
                  : 'bg-white text-green-700 hover:bg-green-50'
              }`}
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block py-2 text-gray-600 hover:text-green-700"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsQuoteModalOpen(true);
              }}
              className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors mt-4"
            >
              Solicitar Orçamento
            </button>
          </div>
        )}
      </nav>

      <Modal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        title="Solicitar Orçamento"
      >
        <QuoteForm onSubmit={handleQuoteSubmit} />
      </Modal>
    </header>
  );
};

export default Header;