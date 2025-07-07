import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { menuItems } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    const el = menuRef.current;
    gsap.fromTo(
      el.querySelectorAll('.section-animate-item'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section ref={menuRef} id="menu" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-animate-item text-4xl font-bold text-brown-800 text-center mb-12">
          Menu Pilihan <span className="text-orange-500">Kami</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="section-animate-item bg-cream-50 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-brown-700 mb-2">{item.name}</h3>
                <p className="text-brown-600 text-sm mb-4 h-16 overflow-hidden">{item.description}</p>
                <p className="text-xl font-bold text-orange-500">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;