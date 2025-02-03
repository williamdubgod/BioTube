import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { ShoppingCart, Package, Award, Leaf, Droplet, Timer } from 'lucide-react';
import Modal from './Modal';
import QuoteForm from './QuoteForm';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Convencional from '../assets/normal.jpg'
import Mini from '../assets/mini.jpg'
import MiniDobravel from '../assets/miniDobravel.jpg'
import Drinks from '../assets/drinks.jpg'

const products = [
  {
    name: 'Canudo Convencional',
    description: 'Ideal para copos e latinhas',
    image: Convencional,
    specs: {
      length: '21cm',
      diameter: '6mm',
      color: 'Natural',
      packaging: '500 unidades',
      useCases: ['Refrigerantes', 'Sucos', 'Bebidas em Geral'],
      features: [
        { icon: <Timer className="w-4 h-4" />, text: 'Até 3 horas de uso' },
        { icon: <Droplet className="w-4 h-4" />, text: 'Resistente à água' },
        { icon: <Leaf className="w-4 h-4" />, text: 'Biodegradável' }
      ]
    }
  },
  {
    name: 'Canudo Mini',
    description: 'Perfeito para bebidas em caixinha tipo Toddynho',
    image: Mini,
    specs: {
      length: '13cm',
      diameter: '5mm',
      color: 'Natural',
      packaging: '500 unidades',
      useCases: ['Achocolatados', 'Sucos em Caixinha'],
      features: [
        { icon: <Timer className="w-4 h-4" />, text: 'Até 2 horas de uso' },
        { icon: <Droplet className="w-4 h-4" />, text: 'Resistente à água' },
        { icon: <Leaf className="w-4 h-4" />, text: 'Biodegradável' }
      ]
    }
  },
  {
    name: 'Canudo Mini Dobrável',
    description: 'Desenvolvido para caixinhas menores',
    image: MiniDobravel,
    specs: {
      length: '15cm',
      diameter: '5mm',
      color: 'Natural',
      packaging: '500 unidades',
      useCases: ['Sucos em Caixinha Pequena', 'Bebidas Infantis'],
      features: [
        { icon: <Timer className="w-4 h-4" />, text: 'Até 2 horas de uso' },
        { icon: <Droplet className="w-4 h-4" />, text: 'Resistente à água' },
        { icon: <Leaf className="w-4 h-4" />, text: 'Biodegradável' }
      ]
    }
  },
  {
    name: 'Canudo Drink Dobrável',
    description: 'Especial para drinks e coquetéis',
    image: Drinks,
    specs: {
      length: '24cm',
      diameter: '8mm',
      color: 'Natural',
      packaging: '300 unidades',
      useCases: ['Drinks', 'Coquetéis', 'Long Drinks'],
      features: [
        { icon: <Timer className="w-4 h-4" />, text: 'Até 4 horas de uso' },
        { icon: <Droplet className="w-4 h-4" />, text: 'Resistente à água' },
        { icon: <Leaf className="w-4 h-4" />, text: 'Biodegradável' }
      ]
    }
  }
];

const ProductCarousel = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleQuoteRequest = (productName: string) => {
    setSelectedProduct(productName);
    setIsQuoteModalOpen(true);
  };

  const handleQuoteSubmit = (data: any) => {
    console.log('Quote request submitted:', data);
    alert('Obrigado! Sua solicitação de orçamento foi enviada com sucesso. Entraremos em contato em breve.');
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="py-12">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full max-w-6xl"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="max-w-xl">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm rounded-full mb-3">
                      Novo
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-200">{product.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="feature-card p-4">
                    <Package className="w-5 h-5 text-green-600 mb-2" />
                    <div>
                      <h4 className="font-semibold">Dimensões</h4>
                      <p className="text-sm text-gray-600">
                        {product.specs.length} x {product.specs.diameter}
                      </p>
                    </div>
                  </div>
                  <div className="feature-card p-4">
                    <Award className="w-5 h-5 text-green-600 mb-2" />
                    <div>
                      <h4 className="font-semibold">Embalagem</h4>
                      <p className="text-sm text-gray-600">{product.specs.packaging}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-green-600" />
                    Características
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {product.specs.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 bg-green-50 p-2 rounded-lg">
                        {feature.icon}
                        {feature.text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Indicado para:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.useCases.map((useCase, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                        <Leaf className="w-3 h-3" />
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleQuoteRequest(product.name)}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <ShoppingCart className="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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

export default ProductCarousel;