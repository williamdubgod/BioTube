import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'O Impacto do Plástico nos Oceanos',
    excerpt: 'Descubra como pequenas mudanças nos hábitos de consumo podem fazer uma grande diferença para nossos oceanos.',
    image: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&q=80',
    date: '15 Mar 2024',
    author: 'Maria Silva',
    category: 'Meio Ambiente'
  },
  {
    title: 'Grafeno: O Material do Futuro',
    excerpt: 'Entenda como o grafeno está revolucionando diversos setores, incluindo produtos sustentáveis.',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80',
    date: '10 Mar 2024',
    author: 'João Santos',
    category: 'Tecnologia'
  },
  {
    title: 'Inovações em Embalagens Sustentáveis',
    excerpt: 'As últimas tendências em embalagens eco-friendly que estão transformando o mercado.',
    image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80',
    date: '5 Mar 2024',
    author: 'Ana Costa',
    category: 'Inovação'
  }
];

const Blog = () => {
  return (
    <div className="pt-20">
      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                alt="Featured Post"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <div className="mb-4">
                    <span className="bg-green-600 text-sm px-3 py-1 rounded-full">
                      Destaque
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    Sustentabilidade Empresarial: O Futuro dos Negócios
                  </h2>
                  <p className="text-gray-200 mb-4">
                    Como empresas sustentáveis estão liderando a transformação do mercado e conquistando consumidores conscientes.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>20 Mar 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>Pedro Alves</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Artigos Recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-green-600 font-medium flex items-center gap-2 hover:text-green-700 transition-colors">
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Categorias</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Meio Ambiente', 'Tecnologia', 'Inovação', 'Sustentabilidade', 'Produtos', 'Dicas'].map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;