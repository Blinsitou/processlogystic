import React from 'react';
import { Shirt, Laptop, Home, ChevronRight } from 'lucide-react';

const categories = [
  { name: 'Ropa', icon: Shirt },
  { name: 'Electrónica', icon: Laptop },
  { name: 'Hogar', icon: Home },
];

const CategoryList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between cursor-pointer hover:bg-[#EDDBD2] transition-colors duration-300">
          <div className="flex items-center">
            {React.createElement(category.icon, { size: 24, className: "mr-2 text-[#000000]" })}
            <span className="text-[#000000] font-medium">{category.name}</span>
          </div>
          <ChevronRight size={20} className="text-[#000000]" />
        </div>
      ))}
      <div className="bg-[#000000] p-4 rounded-lg shadow-md flex items-center justify-between cursor-pointer hover:bg-opacity-80 transition-colors duration-300">
        <span className="text-[#FFF6F4] font-medium">Ver todas</span>
        <ChevronRight size={20} className="text-[#FFF6F4]" />
      </div>
    </div>
  );
};

export default CategoryList;