
import React from "react";
import { Linkedin, Instagram, MessageSquare } from "lucide-react";

const ContatoSection: React.FC = () => {
  return (
    <section className="chimelo-section bg-chimelo-black text-white">
      <div className="chimelo-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em contato</h2>
          <p className="text-chimelo-silver mb-8">
            Estamos à disposição para atender às suas necessidades jurídicas. Entre em contato conosco através de nossas redes sociais.
          </p>
          
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
              href="https://instagram.com"
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
              href="https://wa.me/5500000000000"
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
          
          <div className="mt-12 pt-8 border-t border-chimelo-silver/20">
            <p className="text-chimelo-silver">
              Endereço: Av. Exemplo, 1000, Centro - Cidade/UF<br />
              Telefone: (00) 0000-0000<br />
              Email: contato@chimelo.com.br
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
