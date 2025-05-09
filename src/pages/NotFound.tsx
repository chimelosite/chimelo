
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Página não encontrada</h2>
          <p className="text-chimelo-silver mb-8">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Link to="/" className="inline-block bg-chimelo-black text-white px-6 py-3 rounded hover:bg-opacity-90">
            Voltar para Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
