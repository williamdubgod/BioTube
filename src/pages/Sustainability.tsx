import React from 'react';
import { TreePine, Droplets, Factory, Recycle, Leaf, Award, Globe, Zap } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-700 to-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6 reveal-on-scroll fade-up">
              Compromisso com o Meio Ambiente
            </h1>
            <p className="text-xl leading-relaxed reveal-on-scroll fade-up">
              Nossa missão é reduzir o impacto ambiental através de produtos inovadores e sustentáveis.
              Cada produto que desenvolvemos é um passo em direção a um futuro mais limpo.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-green-50 to-white"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 reveal-on-scroll fade-up relative inline-block">
                Nosso Impacto Ambiental
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-400"></div>
              </h2>
              <p className="text-xl text-gray-600 reveal-on-scroll fade-up">
                Cada pequena ação conta na preservação do nosso planeta
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="reveal-on-scroll fade-right bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <TreePine className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Redução do Desmatamento</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Utilizamos papel de fontes certificadas e sustentáveis, contribuindo para a preservação das florestas.
                      Nosso processo produtivo é otimizado para minimizar o desperdício.
                    </p>
                  </div>
                </div>
              </div>

              <div className="reveal-on-scroll fade-left bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Droplets className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Proteção dos Oceanos</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nossos produtos biodegradáveis ajudam a reduzir a poluição dos oceanos causada por plásticos.
                      Cada produto substitui dezenas de itens plásticos descartáveis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="reveal-on-scroll fade-right bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Factory className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Produção Responsável</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Processo produtivo com baixa emissão de carbono e uso eficiente de recursos.
                      Utilizamos energia renovável em nossa fábrica.
                    </p>
                  </div>
                </div>
              </div>

              <div className="reveal-on-scroll fade-left bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Recycle className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Economia Circular</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Produtos 100% biodegradáveis que retornam à natureza sem deixar resíduos.
                      Embalagens também são produzidas com materiais recicláveis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Stats */}
      <section className="py-24 bg-gradient-to-br from-green-900 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-900/30 pattern-diagonal opacity-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal-on-scroll fade-up bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-300" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">5 ton</div>
              <p className="text-green-100">de plástico evitado por mês</p>
            </div>
            
            <div className="reveal-on-scroll fade-up bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-green-300" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <p className="text-green-100">biodegradável em 90 dias</p>
            </div>
            
            <div className="reveal-on-scroll fade-up bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-green-300" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">-40%</div>
              <p className="text-green-100">emissão de carbono vs plástico</p>
            </div>
            
            <div className="reveal-on-scroll fade-up bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-green-300" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">90%</div>
              <p className="text-green-100">energia de fontes renováveis</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sustainability;