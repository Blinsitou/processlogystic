import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  showDiscount?: boolean;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showDiscount = false, onAddToCart }) => {
  const discountPercentage = product.discountedPrice
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-[#000000]">{product.name}</h3>
        <div className="flex justify-between items-center mb-4">
          {showDiscount && product.discountedPrice ? (
            <>
              <div>
                <span className="text-gray-500 line-through mr-2">${product.price.toFixed(2)}</span>
                <span className="text-[#000000] font-bold">${product.discountedPrice.toFixed(2)}</span>
              </div>
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                -{discountPercentage}%
              </span>
            </>
          ) : (
            <p className="text-[#000000] font-bold">${product.price.toFixed(2)}</p>
          )}
        </div>
        <button 
          className="bg-[#EDDBD2] text-[#000000] py-2 px-4 rounded hover:bg-[#000000] hover:text-[#EDDBD2] transition-colors duration-300 flex items-center justify-center w-full"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart size={20} className="mr-2" />
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;