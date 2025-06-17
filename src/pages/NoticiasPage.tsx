import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronDown, FileText, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const NoticiasPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("publicacoes");

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['publicacoes', 'associacoes', 'cases'];
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Publications data - 15 items total
  const publicacoes = [{
    id: 1,
    titulo: "Recuperação de Empresas e Falência",
    autor: "",
    descricao: "",
    imagem: "https://images.tcdn.com.br/img/img_prod/1148025/90_recuperacao_de_empresas_e_falencia_18041_1_b7f7272f6f4536cd7c0d328c8d1b88ff.jpg",
    link: "https://www.livrariadoadvogado.com.br/civil/empresarial/recuperacao-de-empresas-e-falencia",
    visible: true
  }, {
    id: 2,
    titulo: "Publicação 2",
    autor: "Autor 2",
    descricao: "Descrição da publicação 2 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 3,
    titulo: "Publicação 3",
    autor: "Autor 3",
    descricao: "Descrição da publicação 3 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 4,
    titulo: "Publicação 4",
    autor: "Autor 4",
    descricao: "Descrição da publicação 4 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 5,
    titulo: "Publicação 5",
    autor: "Autor 5",
    descricao: "Descrição da publicação 5 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 6,
    titulo: "Publicação 6",
    autor: "Autor 6",
    descricao: "Descrição da publicação 6 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 7,
    titulo: "Publicação 7",
    autor: "Autor 7",
    descricao: "Descrição da publicação 7 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 8,
    titulo: "Publicação 8",
    autor: "Autor 8",
    descricao: "Descrição da publicação 8 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 9,
    titulo: "Publicação 9",
    autor: "Autor 9",
    descricao: "Descrição da publicação 9 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 10,
    titulo: "Publicação 10",
    autor: "Autor 10",
    descricao: "Descrição da publicação 10 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 11,
    titulo: "Publicação 11",
    autor: "Autor 11",
    descricao: "Descrição da publicação 11 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 12,
    titulo: "Publicação 12",
    autor: "Autor 12",
    descricao: "Descrição da publicação 12 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 13,
    titulo: "Publicação 13",
    autor: "Autor 13",
    descricao: "Descrição da publicação 13 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 14,
    titulo: "Publicação 14",
    autor: "Autor 14",
    descricao: "Descrição da publicação 14 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }, {
    id: 15,
    titulo: "Publicação 15",
    autor: "Autor 15",
    descricao: "Descrição da publicação 15 - conteúdo temporário para estruturação.",
    imagem: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=150&h=200&auto=format&fit=crop",
    link: "#",
    visible: false
  }];

  // New associations data
  const associacoes = [{
    id: 1,
    nome: "CMR - Centro de Mulheres na Reestruturação Empresarial",
    link: "https://www.cmrempresarial.com/",
    imagem: "https://www.estevez.adv.br/admin/files/apoio/apoio13220121062024_1_.png"
  }, {
    id: 2,
    nome: "IBAJUD",
    link: "https://ibajud.org/",
    imagem: "https://www.estevez.adv.br/admin/files/apoio/apoio13201821062024_1_.png"
  }, {
    id: 3,
    nome: "Fundo Centenário",
    link: "https://www.fundocentenario.com.br/",
    imagem: "https://www.estevez.adv.br/admin/files/apoio/apoio18510825052020_1_.jpg"
  }, {
    id: 4,
    nome: "TMA Brasil",
    link: "https://www.tmabrasil.org/",
    imagem: "https://www.estevez.adv.br/admin/files/apoio/apoio18512725052020_1_.jpg"
  }, {
    id: 5,
    nome: "CAEMP",
    link: "https://competicaodearbitragem.com.br/",
    imagem: "https://www.estevez.adv.br/admin/files/apoio/apoio18514025052020_1_.jpg"
  }, {
    id: 6,
    nome: "Migalhas",
    link: "https://www.migalhas.com.br/",
    imagem: "https://www.estevez.adv.br/admin/files/apoio/apoio18515725052020_1_.jpg"
  }, {
    id: 7,
    nome: "PUCRS Arbitration & Mediation Team",
    link: "https://www.facebook.com/arbitrationteam/",
    imagem: "https://www.estevez.adv.br/admin/files/apoio/apoio18522925052020_1_.jpg"
  }];

  return (
    <div className="flex flex-col min-h-screen destaques-page">
      <Header />
      
      {/* Floating Navigation Buttons */}
      <div className="fixed bottom-32 right-6 z-40 flex flex-col gap-3">
        <div className="group relative">
          <Button onClick={() => scrollToSection('publicacoes')} className={`w-12 h-12 rounded-full shadow-lg transition-all ${activeSection === 'publicacoes' ? 'bg-chimelo-black hover:bg-gray-800' : 'bg-white/90 hover:bg-white text-chimelo-black hover:text-chimelo-black'}`}>
            <FileText className="h-5 w-5" />
          </Button>
          <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-chimelo-black text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Publicações
          </div>
        </div>
        
        <div className="group relative">
          <Button onClick={() => scrollToSection('associacoes')} className={`w-12 h-12 rounded-full shadow-lg transition-all ${activeSection === 'associacoes' ? 'bg-chimelo-black hover:bg-gray-800' : 'bg-white/90 hover:bg-white text-chimelo-black hover:text-chimelo-black'}`}>
            <Users className="h-5 w-5" />
          </Button>
          <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-chimelo-black text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Associações
          </div>
        </div>
        
        <div className="group relative">
          <Button onClick={() => scrollToSection('cases')} className={`w-12 h-12 rounded-full shadow-lg transition-all ${activeSection === 'cases' ? 'bg-chimelo-black hover:bg-gray-800' : 'bg-white/90 hover:bg-white text-chimelo-black hover:text-chimelo-black'}`}>
            <Briefcase className="h-5 w-5" />
          </Button>
          <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-chimelo-black text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Cases
          </div>
        </div>
      </div>
      
      {/* Hero Section with Extended Background */}
      <section className="relative bg-chimelo-black text-white min-h-screen">
        <div className="absolute inset-0 opacity-35 bg-cover bg-center" style={{
          backgroundImage: 'url("/lovable-uploads/27570706-51c0-4d07-a428-af2be4221322.png")',
          backgroundBlendMode: 'overlay'
        }} />
        
        <div className="relative">
          {/* Header Content with 4cm from top adjustment */}
          <div style={{
            marginTop: '150px'
          }} className="sm:py-16 md:py-20 lg:py-[55px] py-[68px]">
            
          </div>

          {/* Publicações Section - Refactored for 15 publications */}
          <section id="publicacoes" className="chimelo-section">
            <div className="chimelo-container px-4">
              <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Publicações</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-chimelo-silver mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                  Acompanhe nossos artigos, estudos e publicações jurídicas que compartilham conhecimento e análises especializadas.
                </p>
              </div>
              
              {/* Publications Grid - Responsive layout */}
              <div className="publicacoes-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6 overflow-x-auto">
                {publicacoes.map(publicacao => (
                  <div key={publicacao.id} className={`publicacao-card bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/15 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg min-w-[150px] ${!publicacao.visible ? 'hidden' : ''}`}>
                    <div className="publicacao-imagem overflow-hidden">
                      <img src={publicacao.imagem} alt={publicacao.titulo} className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
                    </div>
                    <div className="publicacao-conteudo p-3 sm:p-4">
                      <h3 className="publicacao-titulo text-xs font-bold mb-2 text-white leading-tight overflow-hidden" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        fontSize: '0.7rem',
                        lineHeight: '1.2'
                      }}>
                        {publicacao.titulo}
                      </h3>
                      {publicacao.autor && <p className="publicacao-autor text-xs text-chimelo-silver/80 mb-2 font-medium">{publicacao.autor}</p>}
                      {publicacao.descricao && <p className="publicacao-descricao text-chimelo-silver mb-2 text-xs leading-relaxed line-clamp-2">
                          {publicacao.descricao}
                        </p>}
                      <a href={publicacao.link} target="_blank" rel="noopener noreferrer" className="btn-leia-mais inline-block w-full text-center bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-xs py-2 px-3 rounded transition-all duration-300 hover:transform hover:-translate-y-0.5 font-medium no-underline" style={{
                        fontSize: '0.7rem',
                        fontWeight: '600'
                      }}>
                        Leia mais
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Associações Section - Updated with new design */}
          <section id="associacoes" className="chimelo-section">
            <div className="chimelo-container px-4">
              <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Associações</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-chimelo-silver mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                  Organizações e instituições parceiras que fortalecem nossa rede de conhecimento e atuação.
                </p>
              </div>
              
              {/* Associations Grid */}
              <div className="associacoes-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
                {associacoes.map(associacao => (
                  <div key={associacao.id} className="associacao-card bg-white/95 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-2 hover:bg-white">
                    <a href={associacao.link} target="_blank" rel="noopener noreferrer" title={associacao.nome} className="block text-decoration-none">
                      <div className="associacao-logo h-16 lg:h-20 flex items-center justify-center mb-3 lg:mb-4">
                        <img src={associacao.imagem} alt={associacao.nome} className="max-w-full max-h-full object-contain filter grayscale-[20%] transition-all duration-300 hover:grayscale-0" loading="lazy" />
                      </div>
                      <div className="associacao-nome">
                        <h4 className="text-xs lg:text-sm font-semibold text-gray-800 leading-tight line-clamp-2">
                          {associacao.nome}
                        </h4>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cases Section - Updated with single Gabriele Chimelo case */}
          <section id="cases" className="chimelo-section pb-16 sm:pb-20 lg:pb-24">
            <div className="chimelo-container px-4">
              <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Cases de Sucesso</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-chimelo-silver mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                  Conheça alguns dos nossos principais cases de sucesso que demonstram nossa expertise e dedicação aos clientes.
                </p>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 hover:bg-white/15 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6">
                    <div className="lg:w-1/3">
                      <div className="bg-white/20 rounded-lg h-32 sm:h-40 md:h-48 flex items-center justify-center">
                        <Briefcase className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-white/60" />
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Gabriele Chimelo: Referência em Insolvência e Jurisprudência Transformadora</h3>
                      <p className="text-chimelo-silver mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                        Gabriele Chimelo é autora de artigos em veículos de imprensa nacionais, coautora de obras coletivas sobre insolvência e professora da ESPM-Sul, onde leciona temas relacionados à governança e à gestão de crises. Entre os casos de maior repercussão sob sua condução estão: DHB Componentes Automotivos, Serki Fundações, Sultepa, Igreja Metodista, GBOEX, Bela Gula, Leão Engenharia, Sanem Engenharia, Cargill e Top Safe.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Insolvência</span>
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Recuperação Judicial</span>
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Precedente STJ</span>
                      </div>
                      <p className="text-xs sm:text-sm text-chimelo-silver">
                        <strong>Resultado:</strong> Precedente do STJ que autorizou a empresa Emofesa, primeira empresa em recuperação judicial no Brasil a licitar e manter contratos com o poder público, criando jurisprudência que posteriormente beneficiou centenas de empresas na mesma situação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NoticiasPage;
