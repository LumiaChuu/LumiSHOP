import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroCafeImg from '../assets/Suasana-LumiSHOP-Cafe.png';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    gsap.fromTo(
      el.querySelectorAll('.hero-animate'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section ref={heroRef} id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-cream-200 via-cream-100 to-orange-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="hero-animate text-5xl md:text-6xl lg:text-7xl font-bold text-brown-800 mb-6 leading-tight">
            Secangkir <span className="text-orange-500">Ketenangan</span> di Setiap Tetesan
          </h1>
          <p className="hero-animate text-lg md:text-xl text-brown-600 mb-8">
            Temukan perpaduan biji kopi premium dan suasana hangat yang kami tawarkan khusus untuk Anda.
          </p>
          <a
            href="#menu"
            className="hero-animate inline-block bg-brown-700 hover:bg-brown-800 text-white font-semibold px-10 py-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 text-lg"
          >
            Lihat Menu
          </a>
        </div>
        <div className="hero-animate flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={heroCafeImg}
            alt="Suasana LumiSHOP Cafe"
            className="rounded-lg shadow-2xl w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;