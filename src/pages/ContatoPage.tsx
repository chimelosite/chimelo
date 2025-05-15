
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import LocationMap from "../components/contact/LocationMap";

const ContatoPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="chimelo-section">
          <div className="chimelo-container">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h1>
              <p className="text-chimelo-silver max-w-2xl mx-auto">
                Estamos à disposição para atender às suas necessidades jurídicas. 
                Entre em contato conosco através do formulário abaixo ou por nossos canais diretos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>
              
              <div>
                <ContactInfo />
              </div>
            </div>
            
            <div className="mt-12">
              <LocationMap />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContatoPage;
