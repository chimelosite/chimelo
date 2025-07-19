import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import AdminModal from "./AdminModal";
import WhatsAppIcon from "./WhatsAppIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Responsive menu detection
  useEffect(() => {
    const checkResponsiveMenu = () => {
      const screenWidth = window.innerWidth;
      
      // Desktop: >1024px - menu horizontal completo
      // Tablet: 768px-1024px - menu mobile
      // Mobile: <768px - menu mobile
      if (screenWidth <= 1024) {
        setIsMobileMenuActive(true);
      } else {
        setIsMobileMenuActive(false);
        setIsMenuOpen(false); // Fechar menu se estiver aberto quando voltar para desktop
      }
    };

    // Verificar no carregamento inicial
    checkResponsiveMenu();
    
    // Adicionar listener para resize
    window.addEventListener('resize', checkResponsiveMenu);
    
    return () => {
      window.removeEventListener('resize', checkResponsiveMenu);
    };
  }, []);

  // Fechar menu ao clicar em link (mobile)
  const handleLinkClick = () => {
    if (isMobileMenuActive) {
      setIsMenuOpen(false);
    }
  };

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
      <div ref={containerRef} className="chimelo-container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            alt="CHIMELO" 
            className={`brightness-0 invert object-contain transition-all duration-300 ${scrolled ? 'h-16' : 'h-28'}`}
            src="https://i.imgur.com/v5A7jTI.png" 
          />
        </Link>

        {/* Desktop Navigation - Visível apenas em telas grandes */}
        <div className={`items-center ${isMobileMenuActive ? 'hidden' : 'hidden lg:flex'}`}>
          <nav ref={navRef} className="mr-8">
            <ul className="flex space-x-1">
              <li><Link to="/" className={`chimelo-menu-item text-sm uppercase font-medium tracking-wider ${isActive('/') ? 'chimelo-menu-item-active' : ''}`}>Home</Link></li>
              <li><Link to="/quem-somos" className={`chimelo-menu-item text-sm uppercase font-medium tracking-wider ${isActive('/quem-somos') ? 'chimelo-menu-item-active' : ''}`}>O Escritório</Link></li>
              <li><Link to="/time" className={`chimelo-menu-item text-sm uppercase font-medium tracking-wider ${isActive('/time') ? 'chimelo-menu-item-active' : ''}`}>Nosso Time</Link></li>
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
            <a href="https://wa.me/555132761950" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-gray-300 text-white">
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button - Visível em tablets e mobiles */}
        <div className={`${isMobileMenuActive ? 'block' : 'block lg:hidden'}`}>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"} 
            className="p-2 text-white hover:text-gray-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Sidebar com overlay */}
      {isMenuOpen && isMobileMenuActive && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Sidebar */}
          <nav className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-chimelo-black z-50 transform transition-transform duration-300 ease-in-out shadow-xl">
            <div className="p-6">
              {/* Header do menu mobile */}
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-white font-bold text-lg">Menu</h3>
                <button 
                  onClick={() => setIsMenuOpen(false)} 
                  aria-label="Fechar Menu" 
                  className="p-2 text-white hover:text-gray-300 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Links do menu */}
              <ul className="space-y-1">
                <li>
                  <Link 
                    to="/" 
                    onClick={handleLinkClick} 
                    className={`block py-3 px-4 text-white hover:bg-white/10 rounded-md transition-colors ${isActive('/') ? 'bg-white/20 font-bold' : ''}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/quem-somos" 
                    onClick={handleLinkClick} 
                    className={`block py-3 px-4 text-white hover:bg-white/10 rounded-md transition-colors ${isActive('/quem-somos') ? 'bg-white/20 font-bold' : ''}`}
                  >
                    O Escritório
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/time" 
                    onClick={handleLinkClick} 
                    className={`block py-3 px-4 text-white hover:bg-white/10 rounded-md transition-colors ${isActive('/time') ? 'bg-white/20 font-bold' : ''}`}
                  >
                    Nosso Time
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/areas-de-atuacao" 
                    onClick={handleLinkClick} 
                    className={`block py-3 px-4 text-white hover:bg-white/10 rounded-md transition-colors ${isActive('/areas-de-atuacao') ? 'bg-white/20 font-bold' : ''}`}
                  >
                    Áreas de Atuação & Serviços
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/destaques" 
                    onClick={handleLinkClick} 
                    className={`block py-3 px-4 text-white hover:bg-white/10 rounded-md transition-colors ${isActive('/destaques') ? 'bg-white/20 font-bold' : ''}`}
                  >
                    Destaques
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contato" 
                    onClick={handleLinkClick} 
                    className={`block py-3 px-4 text-white hover:bg-white/10 rounded-md transition-colors ${isActive('/contato') ? 'bg-white/20 font-bold' : ''}`}
                  >
                    Contato
                  </Link>
                </li>
              </ul>
              
              {/* Social Icons Mobile */}
              <div className="pt-8 mt-8 border-t border-white/20">
                <p className="text-white/70 text-sm mb-4">Siga-nos:</p>
                <div className="flex space-x-4 text-white">
                  <a 
                    href="https://www.linkedin.com/company/chimelo-advogados-associados" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                    className="p-2 hover:bg-white/10 rounded-md transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/chimeloadvogados" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram"
                    className="p-2 hover:bg-white/10 rounded-md transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://wa.me/555132761950" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="WhatsApp"
                    className="p-2 hover:bg-white/10 rounded-md transition-colors"
                  >
                    <WhatsAppIcon size={20} />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}

      {/* Admin Modal */}
      <AdminModal isOpen={isAdminModalOpen} onClose={() => setIsAdminModalOpen(false)} />
    </header>
  );
};

export default Header;
