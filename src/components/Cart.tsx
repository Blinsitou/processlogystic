import React from 'react';
import { Product } from '../types';

interface CartProps {
  items: Product[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveItem: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, isOpen, onClose, onRemoveItem }) => {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold">Carrito</h2>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Tu carrito está vacío.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <button 
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
