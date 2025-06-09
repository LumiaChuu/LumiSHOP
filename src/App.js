import React, { useEffect, useRef } from 'react';

// Import gambar lokal
import lumiLatteImg from './assets/LumiLatte.png';
import caramelMacchiatoImg from './assets/CaramelMacchiato.png';
import americanoImg from './assets/Americano.png';
import mochaDelightImg from './assets/MochaDelight.png';
import heroCafeImg from './assets/Suasana-LumiSHOP-Cafe.png';
import aboutCafeImg from './assets/TentangKami.png';

// GSAP dan ScrollTrigger dimuat melalui CDN dan akan tersedia secara global
// window.gsap.registerPlugin(window.ScrollTrigger);
// Kita akan memanggil registerPlugin di dalam useEffect untuk memastikan GSAP sudah termuat


// Komponen untuk Icon (bisa diganti dengan SVG atau library ikon)
const Icon = ({ path, className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d={path}></path>
  </svg>
);

const App = () => {
  // Refs untuk animasi GSAP
  const heroRef = useRef(null);
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    // Pastikan GSAP dan ScrollTrigger sudah dimuat dari CDN
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    } else {
      console.error('GSAP atau ScrollTrigger belum termuat dari CDN.');
      return; // Keluar jika GSAP belum siap
    }

    const gsap = window.gsap; // Gunakan gsap dari window

    // Animasi Pembuka Hero Section
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-animate'),
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          delay: 0.5 // Sedikit delay agar halaman sempat termuat
        }
      );
    }

    // Animasi Scroll-Triggered untuk bagian lain
    const sections = [menuRef, aboutRef, testimonialsRef];
    sections.forEach((section) => {
      if (section.current) {
        gsap.fromTo(
          section.current.querySelectorAll('.section-animate-item'),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: section.current,
              start: 'top 80%', // Mulai animasi saat 80% bagian atas section terlihat
              toggleActions: 'play none none none', // Mainkan sekali saat masuk viewport
            },
            ease: 'power3.out'
          }
        );
      }
    });

  }, []);

  // Data untuk Menu (bisa diambil dari API nantinya)
  const menuItems = [
    {
      name: 'Lumi Latte',
      description: 'Perpaduan espresso kaya rasa dengan susu steam lembut.',
      price: 'Rp 25.000',
      image: lumiLatteImg, // Menggunakan gambar lokal
    },
    {
      name: 'Caramel Macchiato',
      description: 'Susu vanila dengan espresso dan saus karamel.',
      price: 'Rp 28.000',
      image: caramelMacchiatoImg, // Menggunakan gambar lokal
    },
    {
      name: 'Americano',
      description: 'Espresso klasik dengan tambahan air panas.',
      price: 'Rp 20.000',
      image: americanoImg, // Menggunakan gambar lokal
    },
    {
      name: 'Mocha Delight',
      description: 'Cokelat premium bertemu espresso dan whipped cream.',
      price: 'Rp 30.000',
      image: mochaDelightImg, // Menggunakan gambar lokal
    },
  ];

  // Data Testimoni
  const testimonialsData = [
    {
      quote: 'Kopi terbaik di kota! Suasananya juga sangat nyaman untuk bekerja.',
      name: 'Andi P.',
      rating: 5,
    },
    {
      quote: 'Lumi Latte-nya juara! Selalu jadi pilihan utama saya.',
      name: 'Siti K.',
      rating: 5,
    },
    {
      quote: 'Tempat yang pas untuk nongkrong sore sambil menikmati kopi berkualitas.',
      name: 'Budi S.',
      rating: 4,
    },
  ];

  // Path untuk ikon media sosial (contoh)
  const socialIcons = {
    facebook: 'M13.652 2H10.348C4.075 2 2 4.075 2 10.348v3.304C2 19.925 4.075 22 10.348 22h3.304c6.273 0 8.348-2.075 8.348-8.348V10.348C22 4.075 19.925 2 13.652 2zm2.824 12.544H14.22v5.064h-2.936v-5.064H9.196v-2.592h2.088V9.05c0-1.744.88-2.736 2.736-2.736h1.952v2.592h-1.368c-.704 0-.88.264-.88.88v1.952h2.256l-.352 2.592z',
    instagram: 'M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.154.556.556.9 1.112 1.154 1.772.248.638.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.79-.465 2.428a4.885 4.885 0 01-1.154 1.772c-.556.556-1.112.9-1.772 1.154-.638.248-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.217-2.428-.465a4.885 4.885 0 01-1.772-1.154c-.556-.556-.9-1.112-1.154-1.772-.248-.638-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428.254-.66.598-1.216 1.154-1.772S4.783 2.765 5.443 2.517c.638-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 1.622c-2.642 0-2.965.01-4.003.058-.98.046-1.504.207-1.856.344-.456.176-.76.397-1.072.71-.312.312-.533.616-.71 1.072-.137.352-.298.876-.344 1.856C3.975 9.035 3.965 9.358 3.965 12s.01 2.965.058 4.003c.046.98.207 1.504.344 1.856.176.456.397.76.71 1.072.312.312.616.533 1.072.71.352.137.876.298 1.856.344 1.038.048 1.36.058 4.003.058s2.965-.01 4.003-.058c.98-.046 1.504-.207 1.856-.344.456-.176.76-.397 1.072-.71.312-.312.533-.616.71-1.072.137-.352.298-.876.344-1.856.048-1.038.058-1.36.058-4.003s-.01-2.965-.058-4.003c-.046-.98-.207-1.504-.344-1.856a2.91 2.91 0 00-.71-1.072 2.91 2.91 0 00-1.072-.71c-.352-.137-.876-.298-1.856-.344C14.965 3.632 14.642 3.622 12 3.622zm0 2.88c-2.49 0-4.498 2.008-4.498 4.498s2.008 4.498 4.498 4.498 4.498-2.008 4.498-4.498S14.49 6.502 12 6.502zm0 7.376c-1.59 0-2.878-1.288-2.878-2.878s1.288-2.878 2.878-2.878 2.878 1.288 2.878 2.878-1.288 2.878-2.878 2.878zm4.364-7.702a1.09 1.09 0 100-2.18 1.09 1.09 0 000 2.18z',
    twitter: 'M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.77.86-2.76 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.94.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 19.89 5.67 20.5 8.12 20.5c7.35 0 11.37-6.08 11.37-11.37 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.98-2.07z'
  };

  return (
    <div className="bg-cream-100 text-brown-700 font-sans antialiased">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="text-3xl font-bold text-brown-700">
              Lumi<span className="text-orange-500">SHOP</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Menu', 'Tentang Kami', 'Kontak'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-brown-600 hover:text-orange-500 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="#pesan-sekarang"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              Pesan Sekarang
            </a>
            
            {/* Mobile Menu Button (Sederhana, bisa dikembangkan) */}
            <div className="md:hidden">
                <button className="text-brown-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
              src={heroCafeImg} // Menggunakan gambar lokal
              alt="Suasana LumiSHOP Cafe"
              className="rounded-lg shadow-2xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Bagian Menu Unggulan */}
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
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover"/>
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

      {/* Bagian Tentang Kami */}
      <section ref={aboutRef} id="tentang-kami" className="py-16 md:py-24 bg-cream-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="section-animate-item">
            <img 
              src={aboutCafeImg} // Menggunakan gambar lokal
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

      {/* Bagian Testimoni */}
      <section ref={testimonialsRef} id="testimoni" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-animate-item text-4xl font-bold text-brown-800 text-center mb-12">
            Kata Pelanggan <span className="text-orange-500">Setia Kami</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={index} 
                className="section-animate-item bg-cream-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brown-600 italic mb-6 text-lg">"{testimonial.quote}"</p>
                <p className="text-right font-semibold text-brown-700">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-brown-800 text-cream-200 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & About */}
            <div>
              <div className="text-3xl font-bold mb-4">
                Lumi<span className="text-orange-500">SHOP</span>
              </div>
              <p className="text-sm text-cream-300 leading-relaxed">
                Menghadirkan secangkir ketenangan untuk hari Anda. Kunjungi kami dan rasakan bedanya.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                {['Home', 'Menu', 'Tentang Kami', 'Pesan Sekarang'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                      className="hover:text-orange-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media & Contact */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Hubungi Kami</h3>
              <p className="text-sm text-cream-300 mb-4">Jl. Kopi Enak No. 123, Jakarta</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-orange-400 transition-colors"><Icon path={socialIcons.facebook} /></a>
                <a href="#" className="hover:text-orange-400 transition-colors"><Icon path={socialIcons.instagram} /></a>
                <a href="#" className="hover:text-orange-400 transition-colors"><Icon path={socialIcons.twitter} /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-brown-700 pt-8 text-center text-sm text-cream-300">
            <p>&copy; 2024 LumiSHOP. All Rights Reserved.</p>
            <p>Developed by <span className="font-semibold text-orange-400">LumiaChuu</span></p>
          </div>
        </div>
      </footer>

      {/* Script untuk Tailwind CSS config (opsional, jika butuh kustomisasi) */}
      <script>
        {`
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                'brown-50': '#fdf8f6',
                'brown-100': '#f2e8e5',
                'brown-200': '#eaddd7',
                'brown-300': '#e0cec7',
                'brown-400': '#d2bab0',
                'brown-500': '#bfa094',
                'brown-600': '#a18072',
                'brown-700': '#977669',
                'brown-800': '#846358',
                'brown-900': '#43302b',
                'cream-50': '#fffaf0',
                'cream-100': '#fdf5e6',
                'cream-200': '#fbf0db',
                'orange-100': '#fff3e0',
                'orange-500': '#ff9800',
                'orange-600': '#fb8c00',
              },
              fontFamily: {
                sans: ['Inter', 'sans-serif'], 
              },
            }
          }
        };
        `}
      </script>
    </div>
  );
};

export default App;