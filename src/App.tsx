import React, { useState, useEffect } from 'react';
import { auth } from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { User } from 'firebase/auth';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import BrandSlider from './components/BrandSlider';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';
import Cart from './components/Cart';
import { Product } from './types';
import AuthModal from './components/AuthModal';
import Notification from './components/Notification';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setNotification({ message: 'Has iniciado sesión correctamente', type: 'success' });
      }
    });
    return () => unsubscribe();
  }, []);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const handleSuccessfulAuth = (isLogin: boolean) => {
    setShowAuthModal(false);
    setNotification({
      message: isLogin ? 'Has iniciado sesión correctamente' : 'Te has registrado correctamente',
      type: 'success'
    });
  };

  const handleLogout = () => {
    setUser(null);
    setNotification({ message: 'Has cerrado sesión correctamente', type: 'success' });
  };

  return (
    <div className="min-h-screen bg-[#FFF6F4] flex flex-col">
      <Header 
        cartItemCount={cartItems.length} 
        onCartClick={() => setShowCart(true)} 
        onAuthClick={() => setShowAuthModal(true)}
        user={user}
        onLogout={handleLogout}
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Carousel />
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6 text-[#000000]">Categorías</h2>
          <CategoryList />
        </section>
        <BrandSlider />
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6 text-[#000000]">Ofertas del día</h2>
          <ProductList showDiscount={true} limit={4} onAddToCart={addToCart} />
        </section>
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6 text-[#000000]">Productos destacados</h2>
          <ProductList limit={8} onAddToCart={addToCart} />
        </section>
      </main>
      <Footer />
      <Cart 
        items={cartItems} 
        isOpen={showCart} 
        onClose={() => setShowCart(false)} 
        onRemoveItem={removeFromCart}
      />
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSwitchToRegister={() => setIsLogin(false)}
        onSwitchToLogin={() => setIsLogin(true)}
        isLogin={isLogin}
        onSuccessfulAuth={handleSuccessfulAuth}
      />
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}

export default App;
