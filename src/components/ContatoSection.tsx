
import React from "react";
import { Linkedin, Instagram, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContatoSection: React.FC = () => {
  return (
    <section className="chimelo-section bg-chimelo-black text-white">
      <div className="chimelo-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em contato</h2>
          <p className="text-chimelo-silver mb-8">
            Estamos à disposição para atender às suas necessidades jurídicas. Entre em contato conosco através de nossas redes sociais ou formulário de contato.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10">
            <Button variant="outline" className="bg-white/5 border-chimelo-silver/20 hover:bg-white/10 text-white" asChild>
              <Link to="/contato" className="flex items-center gap-2">
                Envie uma mensagem
                <MessageSquare className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="p-4 rounded-full border border-chimelo-silver/20 bg-white/5 mb-3 group-hover:bg-white/10 transition-colors">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm group-hover:text-chimelo-silver transition-colors">LinkedIn</span>
            </a>
            
            <a
              href="https://www.instagram.com/chimeloadvogados"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="p-4 rounded-full border border-chimelo-silver/20 bg-white/5 mb-3 group-hover:bg-white/10 transition-colors">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm group-hover:text-chimelo-silver transition-colors">Instagram</span>
            </a>
            
            <a
              href="https://wa.me/5551991786703"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="p-4 rounded-full border border-chimelo-silver/20 bg-white/5 mb-3 group-hover:bg-white/10 transition-colors">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm group-hover:text-chimelo-silver transition-colors">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
