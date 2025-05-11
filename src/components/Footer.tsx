
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, MessageSquare, Mail, Phone } from "lucide-react";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-chimelo-black text-white">
      <div className="chimelo-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img alt="Chimelo Advogados e Associados" className="h-12 mb-6 brightness-0 invert" src="https://i.imgur.com/v5A7jTI.png" />
            <p className="mt-4 text-sm text-chimelo-silver max-w-xs">
              Somos um escritório de advocacia especializado em soluções jurídicas integradas para empresas.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/chimelo-advogados-associados" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-chimelo-silver">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-chimelo-silver">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5551991786703" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white hover:text-chimelo-silver">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-chimelo-silver transition-colors">Home</Link></li>
              <li><Link to="/quem-somos" className="hover:text-chimelo-silver transition-colors">Quem Somos</Link></li>
              <li><Link to="/socios" className="hover:text-chimelo-silver transition-colors">Sócios</Link></li>
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
                <Phone size={18} className="mr-2 text-chimelo-silver" />
                <span>(51) 99178-6703</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-chimelo-silver" />
                <a href="mailto:contato@chimelo.com.br" className="hover:text-chimelo-silver transition-colors">
                  contato@chimelo.com.br
                </a>
              </div>
              <div className="flex items-start">
                <MessageSquare size={18} className="mr-2 mt-1 text-chimelo-silver" />
                <a href="https://wa.me/5551991786703" className="hover:text-chimelo-silver transition-colors">
                  WhatsApp: (51) 99178-6703
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-chimelo-silver/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-chimelo-silver">
            &copy; {currentYear} Chimelo Advogados e Associados. Todos os direitos reservados.
          </p>
          <div className="text-sm text-chimelo-silver mt-2 md:mt-0">
            <span>Desenvolvido por <a href="https://somostexai.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Texai Brasil Ltda</a></span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
