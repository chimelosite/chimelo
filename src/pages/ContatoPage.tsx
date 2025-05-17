
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import LocationMap from "../components/contact/LocationMap";
import PageHero from "../components/PageHero";

const ContatoPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PageHero 
          title="Entre em Contato" 
          subtitle="Estamos à disposição para atender às suas necessidades jurídicas. Entre em contato conosco através do formulário abaixo ou por nossos canais diretos."
        />
        
        <section className="chimelo-section">
          <div className="chimelo-container">
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
