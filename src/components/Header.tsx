
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Linkedin, Instagram, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Quem Somos", path: "/quem-somos" },
    { name: "Sócios", path: "/socios" },
    { name: "Áreas de Atuação", path: "/areas-de-atuacao" },
    { name: "Processos", path: "/processos" },
    { name: "Assembleias", path: "/assembleias" },
    { name: "Notícias", path: "/noticias" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <header className="border-b border-chimelo-lightgray/20 bg-white sticky top-0 z-50">
      <div className="chimelo-container">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/public/lovable-uploads/e96dac0d-17ec-4820-b30d-1cca6c017987.png" 
              alt="Chimelo Advogados e Associados" 
              className="h-12" 
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="chimelo-menu-item"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="chimelo-social-icon" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="chimelo-social-icon" />
              </a>
              <a 
                href="https://wa.me/5500000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageSquare className="chimelo-social-icon" />
              </a>
            </div>
          </div>

          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden py-4 px-4 bg-white border-t border-chimelo-lightgray/20 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="chimelo-menu-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-chimelo-lightgray/20">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="chimelo-social-icon" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="chimelo-social-icon" />
            </a>
            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageSquare className="chimelo-social-icon" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
