
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SociosPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with exact same structure as destaques page */}
        <section className="relative bg-chimelo-black text-white">
          <div 
            className="absolute inset-0 opacity-35 bg-cover bg-center" 
            style={{
              backgroundImage: 'url("/lovable-uploads/27570706-51c0-4d07-a428-af2be4221322.png")',
              backgroundBlendMode: 'overlay'
            }} 
          />
          
          <div className="relative py-16 md:py-24">
            <div className="chimelo-container py-px">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Nosso Time
                </h1>
                <p className="text-lg text-chimelo-silver max-w-2xl mx-auto">
                  Conheça os profissionais especializados que formam a equipe do escritório Chimelo Advogados & Associados, com expertise reconhecida em suas respectivas áreas de atuação.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200 py-3">
          <div className="chimelo-container">
            <nav className="flex text-sm">
              <Link to="/" className="text-chimelo-silver hover:text-chimelo-black">Home</Link>
              <span className="mx-2 text-chimelo-silver">/</span>
              <span className="text-chimelo-black font-medium">Nosso Time</span>
            </nav>
          </div>
        </div>
        
        {/* Conteúdo da página */}
        <section className="chimelo-section bg-gray-50">
          <div className="chimelo-container">
            <div className="text-center mb-12">
              <p className="text-chimelo-silver max-w-3xl mx-auto">
                Em breve, apresentaremos aqui os perfis detalhados de todos os profissionais que compõem nossa equipe multidisciplinar.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SociosPage;
