import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import AdminModal from "./AdminModal";
import WhatsAppIcon from "./WhatsAppIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Simulação de autenticação
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Função para abrir o modal de admin
  const openAdminPanel = () => {
    if (isLoggedIn) {
      setIsAdminModalOpen(true);
    } else {
      window.location.href = "/admin-login";
    }
  };

  const getHeaderClass = () => {
    return scrolled ? 'header-scrolled py-3 shadow-md' : 'header-transparent py-6';
  };
  
  // Função para verificar se um link está ativo
  const isActive = (path) => {
    if (path === '/areas-de-atuacao' && location.pathname === '/areas-de-atuacao') {
      return true;
    }
    return location.pathname === path;
  };
  
  return (
    <header className={`transition-all duration-300 ${getHeaderClass()}`}>
      <div className="chimelo-container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            alt="CHIMELO" 
            className={`brightness-0 invert object-contain transition-all duration-300 ${scrolled ? 'h-16' : 'h-28'}`}
            src="https://i.imgur.com/v5A7jTI.png" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="mr-8">
            <ul className="flex space-x-1">
              <li><Link to="/" className={`chimelo-menu-item text-sm uppercase font-medium tracking-wider ${isActive('/') ? 'chimelo-menu-item-active' : ''}`}>Home</Link></li>
              <li><Link to="/quem-somos" className={`chimelo-menu-item text-sm uppercase font-medium tracking-wider ${isActive('/quem-somos') ? 'chimelo-menu-item-active' : ''}`}>Quem Somos</Link></li>
              <li><Link to="/socios" className={`chimelo-menu-item text-sm uppercase font-medium tracking-wider ${isActive('/socios') ? 'chimelo-menu-item-active' : ''}`}>Nosso Time</Link></li>
              <li><Link to="/areas-de-atuacao" className={`chimelo-menu-item text-sm uppercase font-medium tracking-wider ${isActive('/areas-de-atuacao') ? 'chimelo-menu-item-active' : ''}`}>Áreas de Atuação & Serviços</Link></li>
              <li><Link to="/destaques" className={`chimelo-menu-item text-sm uppercase font-medium tracking-wider ${isActive('/destaques') ? 'chimelo-menu-item-active' : ''}`}>Destaques</Link></li>
              <li><Link to="/contato" className={`chimelo-menu-item text-sm uppercase font-medium tracking-wider ${isActive('/contato') ? 'chimelo-menu-item-active' : ''}`}>Contato</Link></li>
              <li>
                <button onClick={openAdminPanel} className="chimelo-menu-item text-sm uppercase font-medium tracking-wider hidden" aria-label="Painel Administrativo">
                  Admin
                </button>
              </li>
            </ul>
          </nav>
          
          {/* Social Icons Desktop */}
          <div className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/company/chimelo-advogados-associados" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300 text-white">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/chimeloadvogados" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300 text-white">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/5551991786703" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-gray-300 text-white">
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"} className="p-2 text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-chimelo-black absolute top-full left-0 right-0 z-50">
          <ul className="container mx-auto px-4 py-4 space-y-2">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)} className={`block py-2 text-white hover:text-gray-300 ${isActive('/') ? 'font-bold' : ''}`}>Home</Link></li>
            <li><Link to="/quem-somos" onClick={() => setIsMenuOpen(false)} className={`block py-2 text-white hover:text-gray-300 ${isActive('/quem-somos') ? 'font-bold' : ''}`}>Quem Somos</Link></li>
            <li><Link to="/socios" onClick={() => setIsMenuOpen(false)} className={`block py-2 text-white hover:text-gray-300 ${isActive('/socios') ? 'font-bold' : ''}`}>Nosso Time</Link></li>
            <li><Link to="/areas-de-atuacao" onClick={() => setIsMenuOpen(false)} className={`block py-2 text-white hover:text-gray-300 ${isActive('/areas-de-atuacao') ? 'font-bold' : ''}`}>Áreas de Atuação & Serviços</Link></li>
            <li><Link to="/destaques" onClick={() => setIsMenuOpen(false)} className={`block py-2 text-white hover:text-gray-300 ${isActive('/destaques') ? 'font-bold' : ''}`}>Destaques</Link></li>
            <li><Link to="/contato" onClick={() => setIsMenuOpen(false)} className={`block py-2 text-white hover:text-gray-300 ${isActive('/contato') ? 'font-bold' : ''}`}>Contato</Link></li>
            <li className="pt-4">
              <div className="flex space-x-4 text-white">
                <a href="https://www.linkedin.com/company/chimelo-advogados-associados" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/chimeloadvogados" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/5551991786703" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon size={20} />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      )}

      {/* Admin Modal */}
      <AdminModal isOpen={isAdminModalOpen} onClose={() => setIsAdminModalOpen(false)} />
    </header>
  );
};

export default Header;
