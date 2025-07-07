import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-cream-100 text-brown-700 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
