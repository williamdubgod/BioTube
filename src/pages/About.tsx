import React, { useEffect } from 'react';
import { Rocket, Eye, Heart, TreePine, Zap, Award } from 'lucide-react';
import grapheno from '../assets/grapheno.jpg'
import BioTube from '../assets/biotube.jpg'

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-20">
      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="reveal-on-scroll fade-right p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center group hover:bg-green-200 transition-colors">
                <Rocket className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Missão</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Oferecer soluções sustentáveis e inovadoras para reduzir o impacto ambiental do plástico.
              </p>
            </div>
            <div className="reveal-on-scroll fade-up p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center group hover:bg-green-200 transition-colors">
                <Eye className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Visão</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Ser referência global em produtos ecológicos e tecnológicos.
              </p>
            </div>
            <div className="reveal-on-scroll fade-left p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center group hover:bg-green-200 transition-colors">
                <Heart className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Valores</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Sustentabilidade, Inovação, Qualidade e Conscientização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-600 opacity-5 pattern-diagonal"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 reveal-on-scroll fade-up">
              <h2 className="text-4xl font-bold mb-6 relative inline-block">
                Nossa História
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-400"></div>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="reveal-on-scroll fade-right">
                <div className="relative">
                  <img
                    src={BioTube}
                    alt="Nossa História"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">10+</div>
                      <div className="text-sm text-green-800">Anos de<br/>Inovação</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="reveal-on-scroll fade-left space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A BioTube nasceu da paixão por inovação e sustentabilidade. Identificamos a necessidade urgente de alternativas ao plástico descartável e decidimos unir tecnologia de ponta com responsabilidade ambiental.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nossa jornada começou com uma ideia simples: criar produtos que não comprometessem nem a qualidade nem o meio ambiente.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <TreePine className="w-8 h-8 text-green-600 mb-2" />
                    <div className="font-semibold">Sustentável</div>
                    <p className="text-sm text-gray-600">100% biodegradável</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <Zap className="w-8 h-8 text-green-600 mb-2" />
                    <div className="font-semibold">Inovador</div>
                    <p className="text-sm text-gray-600">Tecnologia única</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-32 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 reveal-on-scroll fade-right">
              <h2 className="text-4xl font-bold mb-8">Tecnologia do Grafeno</h2>
              <p className="text-gray-100 mb-8 text-lg leading-relaxed">
                O grafeno é um material revolucionário composto por uma única camada de átomos de carbono, conhecido por sua extraordinária resistência e flexibilidade. Na BioTube, desenvolvemos um processo exclusivo que incorpora o grafeno ao papel.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors">
                  <Award className="w-8 h-8 text-green-300 mb-4" />
                  <h4 className="font-semibold mb-2">Resistência Superior</h4>
                  <p className="text-gray-200 text-sm">Durabilidade excepcional em todas as condições</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors">
                  <TreePine className="w-8 h-8 text-green-300 mb-4" />
                  <h4 className="font-semibold mb-2">Eco-friendly</h4>
                  <p className="text-gray-200 text-sm">100% biodegradável e sustentável</p>
                </div>
              </div>
            </div>
            <div className="flex-1 reveal-on-scroll fade-left">
              <div className="relative">
                <img
                  src={grapheno}
                  alt="Tecnologia do Grafeno"
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;