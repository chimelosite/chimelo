import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
const ContatoPage: React.FC = () => {
  return <div className="flex flex-col min-h-screen contato-page">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-chimelo-black text-white">
          <div className="absolute inset-0 opacity-35 bg-cover bg-center" style={{
          backgroundImage: 'url("/lovable-uploads/27570706-51c0-4d07-a428-af2be4221322.png")',
          backgroundBlendMode: 'overlay'
        }} />
          
          <div className="relative py-16 md:py-[60px]">
            <div className="chimelo-container">
              <div className="max-w-3xl mx-auto mb-12 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Entre em Contato</h1>
                <p className="text-lg text-chimelo-silver max-w-2xl mx-auto">
                  Estamos à disposição para atender às suas necessidades jurídicas. Entre em contato conosco através do formulário abaixo ou por nossos canais diretos.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="p-6 rounded-lg backdrop-blur-sm bg-black/30 border border-white/10">
                  <ContactForm />
                </div>
                
                <div className="p-6 rounded-lg backdrop-blur-sm bg-black/30 border border-white/10">
                  <ContactInfo />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default ContatoPage;