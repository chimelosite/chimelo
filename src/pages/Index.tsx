
import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import QuemSomosSection from '../components/QuemSomosSection'
import AreasAtuacao from '../components/AreasAtuacao'
import NoticiasSection from '../components/NoticiasSection'
import Footer from '../components/Footer'
import AdminModal from '../components/AdminModal'

export default function Index() {
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Função que pode ser usada para abrir o painel administrativo
  // (por exemplo, através de uma combinação de teclas ou botão oculto)
  const openAdminPanel = () => {
    setIsAdminModalOpen(true);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuemSomosSection />
        <AreasAtuacao />
        <NoticiasSection />
        {/* Seção de contato removida conforme solicitado */}
      </main>
      <Footer />
      
      {/* Modal do painel administrativo */}
      <AdminModal isOpen={isAdminModalOpen} onClose={() => setIsAdminModalOpen(false)} />
      
      {/* Botão oculto para acessar o painel administrativo (apenas para demonstração) */}
      <div className="fixed bottom-4 right-4" style={{ opacity: 0.1 }}>
        <button
          onClick={openAdminPanel}
          className="p-2"
          aria-label="Painel Administrativo"
        >
          Admin
        </button>
      </div>
    </div>
  )
}
