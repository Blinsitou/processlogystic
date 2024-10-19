import React, { useState } from 'react';
import { ShoppingCart, Search, User, LogOut } from 'lucide-react';
import { User as FirebaseUser } from 'firebase/auth';
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onAuthClick: () => void;
  user: FirebaseUser | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick, onAuthClick, user, onLogout }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onLogout();
      setShowUserMenu(false);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <header className="bg-[#EDDBD2] text-[#000000] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logystic</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="py-1 px-3 rounded text-black"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="relative">
            {user ? (
              <button className="flex items-center" onClick={() => setShowUserMenu(!showUserMenu)}>
                <User size={24} />
                <span className="ml-2">Perfil</span>
              </button>
            ) : (
              <button className="flex items-center" onClick={onAuthClick}>
                <User size={24} />
                <span className="ml-2">Iniciar sesión</span>
              </button>
            )}
            {showUserMenu && user && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <LogOut size={18} className="inline mr-2" />
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
          <button className="flex items-center" onClick={onCartClick}>
            <ShoppingCart size={24} />
            <span className="ml-2">Carrito ({cartItemCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
