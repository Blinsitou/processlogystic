import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EDDBD2] text-[#000000] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Logystic</h3>
            <p>Ofrecemos los mejores productos a precios increíbles.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#FFF6F4]">Inicio</a></li>
              <li><a href="#" className="hover:text-[#FFF6F4]">Productos</a></li>
              <li><a href="#" className="hover:text-[#FFF6F4]">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-[#FFF6F4]">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <p>Email: info@logystic.com</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Dirección: Calle Principal 123, Ciudad</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Logystic. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;