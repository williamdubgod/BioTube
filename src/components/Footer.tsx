import React, { useState } from 'react';
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToSection = (href: string) => {
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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Newsletter subscription:', email);
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const handleSocialClick = (platform: string) => {
    const urls: { [key: string]: string } = {
      instagram: 'https://instagram.com/biotube',
      linkedin: 'https://linkedin.com/company/biotube',
      facebook: 'https://facebook.com/biotube'
    };
    window.open(urls[platform], '_blank');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">BioTube</h3>
            <p className="mb-4">
              Inovação e sustentabilidade para um futuro melhor.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick('instagram')}
                className="hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </button>
              <button
                onClick={() => handleSocialClick('linkedin')}
                className="hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </button>
              <button
                onClick={() => handleSocialClick('facebook')}
                className="hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#sobre');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#produtos"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#produtos');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a 
                  href="#sustentabilidade"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#sustentabilidade');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Sustentabilidade
                </a>
              </li>
              <li>
                <a 
                  href="#parcerias"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#parcerias');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Parcerias
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:contato@biotube.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@biotube.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+551199999999"
                  className="hover:text-white transition-colors"
                >
                  (11) 9999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="mb-4">
              Receba novidades e atualizações sobre nossos produtos.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                required
                className="bg-gray-800 text-white px-4 py-2 rounded-md flex-1 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                {subscribed ? 'Inscrito!' : 'Assinar'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© 2025 BioTube. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;