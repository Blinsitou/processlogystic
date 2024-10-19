import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  discountedPrice?: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Camiseta Casual',
    price: 19.99,
    discountedPrice: 14.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Jeans Clásicos',
    price: 49.99,
    discountedPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Zapatillas Deportivas',
    price: 79.99,
    discountedPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Bolso de Cuero',
    price: 89.99,
    discountedPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    name: 'Smartwatch',
    price: 199.99,
    discountedPrice: 159.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    name: 'Auriculares Inalámbricos',
    price: 129.99,
    discountedPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 7,
    name: 'Lámpara de Mesa',
    price: 59.99,
    discountedPrice: 44.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 8,
    name: 'Set de Cocina',
    price: 149.99,
    discountedPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

interface Product {
  id: number;
  name: string;
  price: number;
  discountedPrice?: number;
  image: string;
}

interface ProductListProps {
  showDiscount?: boolean;
  limit?: number;
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ showDiscount = false, limit, onAddToCart }) => {
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {displayProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          showDiscount={showDiscount} 
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;