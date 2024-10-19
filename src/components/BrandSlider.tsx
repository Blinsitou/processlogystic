import React, { useRef, useEffect } from 'react';

const brands = [
  { name: 'Nike', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  { name: 'Apple', logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  { name: 'Ikea', logo: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  { name: 'Samsung', logo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  { name: 'Adidas', logo: 'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  { name: 'Sony', logo: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  { name: 'Zara', logo: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  { name: 'Philips', logo: 'https://images.unsplash.com/photo-1660792713815-390b17a48a1c?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const BrandSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;
    const totalWidth = slider.scrollWidth - slider.clientWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition > totalWidth) {
        scrollPosition = 0;
      }
      slider.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="my-12 overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 text-[#000000]">Nuestras Marcas</h2>
      <div
        ref={sliderRef}
        className="flex space-x-8 overflow-x-hidden"
        style={{ width: 'calc(200px * 8)' }}
      >
        {brands.concat(brands).map((brand, index) => (
          <div key={index} className="flex-shrink-0 w-40 h-40">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;