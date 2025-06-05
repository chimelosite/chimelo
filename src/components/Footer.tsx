
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-chimelo-black text-white">
      <div className="chimelo-container py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img alt="Chimelo Advogados e Associados" className="h-24 mb-6 brightness-0 invert" src="https://i.imgur.com/v5A7jTI.png" />
            <p className="mt-4 text-sm text-chimelo-silver max-w-xs">
              Somos um escritório de advocacia especializado em soluções jurídicas integradas para empresas.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/chimelo-advogados-associados" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-chimelo-silver">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/chimeloadvogados" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-chimelo-silver">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5551991786703" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white hover:text-chimelo-silver">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-chimelo-silver transition-colors">Home</Link></li>
              <li><Link to="/quem-somos" className="hover:text-chimelo-silver transition-colors">Quem Somos</Link></li>
              <li><Link to="/socios" className="hover:text-chimelo-silver transition-colors">Time</Link></li>
              <li><Link to="/areas-de-atuacao" className="hover:text-chimelo-silver transition-colors">Áreas de Atuação</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><Link to="/destaques" className="hover:text-chimelo-silver transition-colors">Destaques</Link></li>
              <li><Link to="/contato" className="hover:text-chimelo-silver transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="relative mr-2">
                  <MessageCircle size={18} className="text-chimelo-silver" />
                  <span className="absolute -top-1 -right-1 text-xs"></span>
                </div>
                <a href="https://wa.me/5551991786703" className="hover:text-chimelo-silver transition-colors">
                  (51) 99178-6703
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-chimelo-silver" />
                <a href="mailto:contato@chimelo.com.br" className="hover:text-chimelo-silver transition-colors">
                  contato@chimelo.com.br
                </a>
              </div>
              
              {/* Endereços - visível apenas no mobile */}
              <div className="block md:hidden">
                <div className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 text-chimelo-silver" />
                  <div className="text-sm">
                    <p className="mb-1">📍 Porto Alegre:</p>
                    <p className="mb-3">R. Carlos Huber, 110 - Três Figueiras<br />Porto Alegre - RS, 91330-150</p>
                    
                    <p className="mb-1">📍 Curitiba:</p>
                    <p className="mb-3">R. Comendador Araújo, 252 - sl. 3304<br />Centro - Curitiba - PR, 80420-000</p>
                    
                    <p className="mb-1">📍 Caxias do Sul:</p>
                    <p>Rua Coronel Flores 810 - Sala 100 - Moinho da Estação<br />Bairro São Pelegrino - Caxias do Sul - RS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Endereços - visível apenas no desktop, posicionados ACIMA da linha cinza */}
        <div className="hidden md:flex items-center justify-center space-x-6 mt-6 mb-4" style={{
        fontSize: '14px'
      }}>
          <div className="flex items-center text-chimelo-silver/80">
            <MapPin size={14} className="mr-1" />
            <span>Porto Alegre: R. Carlos Huber, 110 - Três Figueiras</span>
          </div>
          <div className="flex items-center text-chimelo-silver/80">
            <MapPin size={14} className="mr-1" />
            <span>Curitiba: R. Comendador Araújo, 252 - sl. 3304</span>
          </div>
          <div className="flex items-center text-chimelo-silver/80">
            <MapPin size={14} className="mr-1" />
            <span>Caxias do Sul: Rua Coronel Flores 810 - Sala 100</span>
          </div>
        </div>
        
        <div className="border-t border-chimelo-silver/20 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-chimelo-silver" style={{
            fontSize: '14px'
          }}>
              &copy; {currentYear} Chimelo Advogados e Associados. Todos os direitos reservados.
            </p>
            
            <div className="text-chimelo-silver mt-2 md:mt-0" style={{
            fontSize: '14px'
          }}>
              <span>Desenvolvido por <a href="https://somostexai.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Texai Brasil Ltda</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
