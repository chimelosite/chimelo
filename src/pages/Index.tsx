
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import QuemSomosSection from "@/components/QuemSomosSection";
import AreasAtuacao from "@/components/AreasAtuacao";
import NoticiasSection from "@/components/NoticiasSection";
import ContatoSection from "@/components/ContatoSection";

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuemSomosSection />
        <AreasAtuacao />
        <NoticiasSection />
        <ContatoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
