
import React from "react";
import { MapPin, Phone, Mail, Linkedin, Instagram, MessageSquare } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-chimelo-black text-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 mr-4 mt-1 text-chimelo-silver" />
          <div>
            <h3 className="font-medium">Endereços</h3>
            <div className="text-chimelo-silver mt-1">
              <p className="mb-1">📍 Porto Alegre:</p>
              <p className="mb-3">R. Carlos Huber, 110 - Três Figueiras<br />Porto Alegre - RS, 91330-150</p>
              
              <p className="mb-1">📍 Curitiba:</p>
              <p>R. Comendador Araújo, 252 - sl. 3304<br />Centro - Curitiba - PR, 80420-000</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="h-5 w-5 mr-4 mt-1 text-chimelo-silver" />
          <div>
            <h3 className="font-medium">Telefones</h3>
            <p className="text-chimelo-silver mt-1">
              +55 (51) 99178-6703
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-5 w-5 mr-4 mt-1 text-chimelo-silver" />
          <div>
            <h3 className="font-medium">E-mail</h3>
            <p className="text-chimelo-silver mt-1">
              contato@chimelo.com.br
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6">
          <h3 className="font-medium mb-4">Redes Sociais</h3>
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://wa.me/5551991786703" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6">
          <h3 className="font-medium mb-4">Horário de Atendimento</h3>
          <p className="text-chimelo-silver">
            Segunda a Sexta: 9h às 18h<br />
            Sábados e Domingos: Fechado
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
