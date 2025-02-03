import React, { useState } from 'react';
import { ShoppingCart, Package, Award, Leaf } from 'lucide-react';
import ProductCarousel from '../components/ProductCarousel';
import Modal from '../components/Modal';
import QuoteForm from '../components/QuoteForm';
import Hashi from '../assets/hashi.jpg'

const Products = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleQuoteRequest = (productName: string) => {
    setSelectedProduct(productName);
    setIsQuoteModalOpen(true);
  };

  const handleQuoteSubmit = (data: any) => {
    // Here you would typically send the data to your backend
    console.log('Quote request submitted:', data);
    alert('Obrigado! Sua solicitação de orçamento foi enviada com sucesso. Entraremos em contato em breve.');
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Produtos Sustentáveis e Inovadores
            </h1>
            <p className="text-xl text-gray-100">
              Descubra nossa linha completa de produtos ecológicos feitos com papel e grafeno
            </p>
          </div>
        </div>
      </section>

      {/* Straws Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Canudos de Papel com Grafeno</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa linha completa de canudos sustentáveis, desenvolvidos para atender diferentes necessidades
              e tipos de bebidas, mantendo sempre o compromisso com o meio ambiente.
            </p>
          </div>

          <ProductCarousel />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Biodegradável</h3>
              <p className="text-gray-600">
                Nossos canudos se decompõem naturalmente em até 90 dias, sem deixar resíduos nocivos ao meio ambiente.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Certificado FDA</h3>
              <p className="text-gray-600">
                Produtos aprovados para contato com alimentos, garantindo total segurança no uso.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Alta Resistência</h3>
              <p className="text-gray-600">
                A tecnologia do grafeno garante durabilidade excepcional, mantendo a integridade por horas de uso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chopsticks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Hashis de Papel com Grafeno</h2>
              <p className="text-gray-600 mb-6">
                Uma inovação que une tradição oriental com sustentabilidade moderna. Nossos hashis são leves, resistentes e totalmente biodegradáveis.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <Package className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Comprimento</h4>
                    <p className="text-sm text-gray-600">23cm padrão</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Certificações</h4>
                    <p className="text-sm text-gray-600">ISO 14001, FDA</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Leaf className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Biodegradável</h4>
                    <p className="text-sm text-gray-600">100% ecológico</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleQuoteRequest('Hashis de Papel com Grafeno')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 group"
              >
                <ShoppingCart className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                Solicitar Orçamento
              </button>
            </div>
            <div className="flex-1">
              <img
                src={Hashi}
                alt="Hashis de Papel com Grafeno"
                className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        title="Solicitar Orçamento"
      >
        <QuoteForm
          productName={selectedProduct}
          onSubmit={handleQuoteSubmit}
        />
      </Modal>
    </div>
  );
};

export default Products;