import React from 'react';

const Footer = () => {
  return (
    <footer id="kontak" className="bg-brown-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Kunjungi Kami
        </h3>
        <p className="text-lg mb-2">
          Jalan Kenangan No. 123, Kotaraya
        </p>
        <p className="text-lg mb-6">
          Telepon: (021) 123-4567
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} LumiSHOP. Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
