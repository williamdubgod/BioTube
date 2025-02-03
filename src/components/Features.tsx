import React from 'react';
import { Leaf, Zap, Recycle, Utensils } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: '100% Ecológicos',
    description: 'Produtos biodegradáveis que não agridem o meio ambiente'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Tecnologia com Grafeno',
    description: 'Resistência e durabilidade incomparáveis'
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: 'Alternativa ao Plástico',
    description: 'Conscientização e ação para um futuro sustentável'
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: 'Inovação no Mercado',
    description: 'Hashis de papel e grafeno: tradição com sustentabilidade'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Por que escolher a BioTube?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossos produtos combinam tecnologia de ponta com responsabilidade ambiental
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-green-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;