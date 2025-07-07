import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonialsData } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const el = testimonialsRef.current;
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
    <section ref={testimonialsRef} id="testimonials" className="py-16 md:py-24 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-animate-item text-4xl font-bold text-brown-800 text-center mb-12">
          Apa Kata <span className="text-orange-500">Mereka</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="section-animate-item bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <p className="text-brown-600 text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* Placeholder for star ratings */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-orange-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95h4.156c.969 0 1.371 1.24.588 1.81l-3.363 2.448 1.286 3.95c.3.921-.755 1.688-1.539 1.24l-3.363-2.448-3.363 2.448c-.784.448-1.838-.319-1.539-1.24l1.286-3.95-3.363-2.448c-.783-.57-.38-1.81.588-1.81h4.156l1.286-3.95z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-brown-700 font-semibold ml-4">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
