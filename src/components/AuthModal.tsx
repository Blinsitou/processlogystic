import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
  onSwitchToLogin: () => void;
  isLogin: boolean;
  onSuccessfulAuth: (isLogin: boolean) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSwitchToRegister, onSwitchToLogin, isLogin, onSuccessfulAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Inicio de sesión exitoso');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('Registro exitoso');
      }
      onSuccessfulAuth(isLogin);
      onClose();
    } catch (error: any) {
      console.error('Error de autenticación:', error);
      setError(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2">Número de teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#EDDBD2] text-[#000000] py-2 rounded hover:bg-[#000000] hover:text-[#EDDBD2]">
            {isLogin ? 'Iniciar sesión' : 'Registrarse'}
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="mt-4 text-center">
          {isLogin ? (
            <p>¿No tienes una cuenta? <button onClick={onSwitchToRegister} className="text-blue-500">Regístrate</button></p>
          ) : (
            <p>¿Ya tienes una cuenta? <button onClick={onSwitchToLogin} className="text-blue-500">Inicia sesión</button></p>
          )}
        </div>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">X</button>
      </div>
    </div>
  );
};

export default AuthModal;
