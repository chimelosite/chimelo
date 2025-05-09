
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import AdminModal from "./AdminModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

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

  return (
    <header className="bg-chimelo-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold">CHIMELO</h1>
          <span className="text-xs ml-2">ADVOGADOS & ASSOCIADOS</span>
        </Link>

        {/* Social Icons Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300">
            <Instagram size={20} />
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2z" />
              <path d="M14 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2z" />
              <path d="M9.5 15a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
            </svg>
          </a>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/quem-somos" className="hover:text-gray-300">Quem Somos</Link></li>
            <li><Link to="/socios" className="hover:text-gray-300">Sócios</Link></li>
            <li><Link to="/areas-de-atuacao" className="hover:text-gray-300">Áreas de Atuação & Serviços</Link></li>
            <li><Link to="/processos" className="hover:text-gray-300">Processos</Link></li>
            <li><Link to="/assembleias" className="hover:text-gray-300">Assembleias</Link></li>
            <li><Link to="/noticias" className="hover:text-gray-300">Notícias</Link></li>
            <li><Link to="/contato" className="hover:text-gray-300">Contato</Link></li>
            <li>
              <button 
                onClick={openAdminPanel} 
                className="hover:text-gray-300 hidden" 
                aria-label="Painel Administrativo"
              >
                Admin
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            className="p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-chimelo-black">
          <ul className="container mx-auto px-4 py-4 space-y-2">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/quem-somos" onClick={() => setIsMenuOpen(false)}>Quem Somos</Link></li>
            <li><Link to="/socios" onClick={() => setIsMenuOpen(false)}>Sócios</Link></li>
            <li><Link to="/areas-de-atuacao" onClick={() => setIsMenuOpen(false)}>Áreas de Atuação & Serviços</Link></li>
            <li><Link to="/processos" onClick={() => setIsMenuOpen(false)}>Processos</Link></li>
            <li><Link to="/assembleias" onClick={() => setIsMenuOpen(false)}>Assembleias</Link></li>
            <li><Link to="/noticias" onClick={() => setIsMenuOpen(false)}>Notícias</Link></li>
            <li><Link to="/contato" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
            <li className="pt-4">
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2z" />
                    <path d="M14 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2z" />
                    <path d="M9.5 15a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                  </svg>
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
