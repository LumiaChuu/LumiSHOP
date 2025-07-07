import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutCafeImg from '../assets/TentangKami.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const el = aboutRef.current;
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
    <section ref={aboutRef} id="tentang-kami" className="py-16 md:py-24 bg-cream-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="section-animate-item">
          <img
            src={aboutCafeImg}
            alt="Interior LumiSHOP"
            className="rounded-lg shadow-xl w-full object-cover"
          />
        </div>
        <div className="section-animate-item text-center md:text-left">
          <h2 className="text-4xl font-bold text-brown-800 mb-6">
            Kisah di Balik <span className="text-orange-500">LumiSHOP</span>
          </h2>
          <p className="text-lg text-brown-600 mb-4 leading-relaxed">
            LumiSHOP lahir dari kecintaan kami terhadap kopi berkualitas dan keinginan untuk menciptakan ruang di mana setiap orang bisa menemukan momen ketenangan. Kami percaya bahwa secangkir kopi bukan hanya minuman, tetapi sebuah pengalaman.
          </p>
          <p className="text-lg text-brown-600 leading-relaxed">
            Dengan biji kopi pilihan dari berbagai daerah terbaik, barista kami yang berpengalaman siap menyajikan minuman yang sempurna untuk Anda. Kami juga menyediakan suasana yang hangat dan nyaman, cocok untuk bekerja, bertemu teman, atau sekadar menikmati waktu sendiri.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;