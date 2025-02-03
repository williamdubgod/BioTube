import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from './About';
import Products from './Products';
import Sustainability from './Sustainability';
import Partnerships from './Partnerships';
import Blog from './Blog';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <section id="home" className="relative">
        <Hero />
        <Features />
      </section>
      
      <div className="relative z-10">
        <section id="sobre" className="relative">
          <About />
        </section>
        
        <section id="produtos" className="relative">
          <Products />
        </section>
        
        <section id="sustentabilidade" className="relative">
          <Sustainability />
        </section>
        
        <section id="parcerias" className="relative">
          <Partnerships />
        </section>
        
        <section id="blog" className="relative">
          <Blog />
        </section>
        
        <section id="contato" className="relative">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;