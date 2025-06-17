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
  const publicacoes = [
    {
      id: 1,
      titulo: "Recuperação de Empresas e Falência",
      autor: "Coordenação Editorial",
      descricao: "A Lei 14.112/20 modernizou a legislação de insolvência, com avanços e críticas acadêmicas relevantes.",
      imagem: "https://images.tcdn.com.br/img/img_prod/1148025/90_recuperacao_de_empresas_e_falencia_18041_1_b7f7272f6f4536cd7c0d328c8d1b88ff.jpg",
      link: "https://www.livrariadoadvogado.com.br/civil/empresarial/recuperacao-de-empresas-e-falencia",
      visible: true
    },
    {
      id: 2,
      titulo: "Publicação 2",
      autor: "Autor 2",
      descricao: "Descrição da publicação 2 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 3,
      titulo: "Publicação 3",
      autor: "Autor 3",
      descricao: "Descrição da publicação 3 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 4,
      titulo: "Publicação 4",
      autor: "Autor 4",
      descricao: "Descrição da publicação 4 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 5,
      titulo: "Publicação 5",
      autor: "Autor 5",
      descricao: "Descrição da publicação 5 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 6,
      titulo: "Publicação 6",
      autor: "Autor 6",
      descricao: "Descrição da publicação 6 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 7,
      titulo: "Publicação 7",
      autor: "Autor 7",
      descricao: "Descrição da publicação 7 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 8,
      titulo: "Publicação 8",
      autor: "Autor 8",
      descricao: "Descrição da publicação 8 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 9,
      titulo: "Publicação 9",
      autor: "Autor 9",
      descricao: "Descrição da publicação 9 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 10,
      titulo: "Publicação 10",
      autor: "Autor 10",
      descricao: "Descrição da publicação 10 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 11,
      titulo: "Publicação 11",
      autor: "Autor 11",
      descricao: "Descrição da publicação 11 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 12,
      titulo: "Publicação 12",
      autor: "Autor 12",
      descricao: "Descrição da publicação 12 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 13,
      titulo: "Publicação 13",
      autor: "Autor 13",
      descricao: "Descrição da publicação 13 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 14,
      titulo: "Publicação 14",
      autor: "Autor 14",
      descricao: "Descrição da publicação 14 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    },
    {
      id: 15,
      titulo: "Publicação 15",
      autor: "Autor 15",
      descricao: "Descrição da publicação 15 - conteúdo temporário para estruturação.",
      imagem: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=150&h=200&auto=format&fit=crop",
      link: "#",
      visible: false
    }
  ];

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
          }} className="py-12 sm:py-16 md:py-20 lg:py-[55px]">
            
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
                {publicacoes.map((publicacao) => (
                  <div 
                    key={publicacao.id} 
                    className={`publicacao-card bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/15 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg min-w-[150px] ${!publicacao.visible ? 'hidden' : ''}`}
                  >
                    <div className="publicacao-imagem overflow-hidden">
                      <img 
                        src={publicacao.imagem} 
                        alt={publicacao.titulo}
                        className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="publicacao-conteudo p-3 sm:p-4">
                      <h3 className="publicacao-titulo text-sm sm:text-base font-bold mb-1 sm:mb-2 text-white leading-tight line-clamp-2">{publicacao.titulo}</h3>
                      <p className="publicacao-autor text-xs text-chimelo-silver/80 mb-1 sm:mb-2 font-medium">{publicacao.autor}</p>
                      <p className="publicacao-descricao text-chimelo-silver mb-2 sm:mb-3 text-xs leading-relaxed line-clamp-2">
                        {publicacao.descricao}
                      </p>
                      <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/20 text-xs py-1 px-2 btn-leia-mais" asChild>
                        <a 
                          href={publicacao.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Leia mais
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Associações Section - Keep existing code */}
          <section id="associacoes" className="chimelo-section">
            <div className="chimelo-container px-4">
              <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Associações</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-chimelo-silver mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                  Conheça as principais associações e entidades das quais fazemos parte, fortalecendo nossa rede de conhecimento.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 hover:bg-white/15 transition-all">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                    <div className="bg-white/20 rounded-full p-3 sm:p-4 mr-0 sm:mr-4 mb-3 sm:mb-0 self-center sm:self-auto">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">OAB - Ordem dos Advogados do Brasil</h3>
                      <p className="text-chimelo-silver text-sm sm:text-base">Membro ativo desde 2010</p>
                    </div>
                  </div>
                  <p className="text-chimelo-silver mb-4 text-sm sm:text-base leading-relaxed">
                    Participação ativa nas comissões de Direito Empresarial e Direito Civil, contribuindo para o desenvolvimento da advocacia brasileira.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 hover:bg-white/15 transition-all">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                    <div className="bg-white/20 rounded-full p-3 sm:p-4 mr-0 sm:mr-4 mb-3 sm:mb-0 self-center sm:self-auto">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">AASP - Associação dos Advogados de São Paulo</h3>
                      <p className="text-chimelo-silver text-sm sm:text-base">Membro associado</p>
                    </div>
                  </div>
                  <p className="text-chimelo-silver mb-4 text-sm sm:text-base leading-relaxed">
                    Engajamento em eventos, cursos e debates sobre as principais mudanças no cenário jurídico paulista e nacional.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 hover:bg-white/15 transition-all">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                    <div className="bg-white/20 rounded-full p-3 sm:p-4 mr-0 sm:mr-4 mb-3 sm:mb-0 self-center sm:self-auto">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">Instituto Brasileiro de Direito Empresarial</h3>
                      <p className="text-chimelo-silver text-sm sm:text-base">Conselheiro</p>
                    </div>
                  </div>
                  <p className="text-chimelo-silver mb-4 text-sm sm:text-base leading-relaxed">
                    Contribuição para pesquisas e desenvolvimento de metodologias inovadoras no direito empresarial brasileiro.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 hover:bg-white/15 transition-all">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                    <div className="bg-white/20 rounded-full p-3 sm:p-4 mr-0 sm:mr-4 mb-3 sm:mb-0 self-center sm:self-auto">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">Câmara de Mediação e Arbitragem</h3>
                      <p className="text-chimelo-silver text-sm sm:text-base">Árbitro credenciado</p>
                    </div>
                  </div>
                  <p className="text-chimelo-silver mb-4 text-sm sm:text-base leading-relaxed">
                    Atuação como árbitro em conflitos empresariais, promovendo soluções eficazes e céleres para disputas comerciais.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cases Section - Keep existing code */}
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
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Reestruturação Empresarial Complexa</h3>
                      <p className="text-chimelo-silver mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                        Conduzimos com sucesso a reestruturação de uma empresa de grande porte do setor industrial, 
                        envolvendo reorganização societária, renegociação de dívidas e otimização tributária.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Direito Empresarial</span>
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Tributário</span>
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Reestruturação</span>
                      </div>
                      <p className="text-xs sm:text-sm text-chimelo-silver">
                        <strong>Resultado:</strong> Economia de R$ 15 milhões em impostos e preservação de 500 empregos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 hover:bg-white/15 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6">
                    <div className="lg:w-1/3">
                      <div className="bg-white/20 rounded-lg h-32 sm:h-40 md:h-48 flex items-center justify-center">
                        <Briefcase className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-white/60" />
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Defesa em Ação Trabalhista Milionária</h3>
                      <p className="text-chimelo-silver mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                        Representamos uma multinacional em ação trabalhista coletiva envolvendo mais de 1.000 funcionários, 
                        conseguindo reduzir significativamente o valor da condenação através de estratégia jurídica inovadora.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Direito Trabalhista</span>
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Ação Coletiva</span>
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Defesa</span>
                      </div>
                      <p className="text-xs sm:text-sm text-chimelo-silver">
                        <strong>Resultado:</strong> Redução de 70% no valor da condenação inicial.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 hover:bg-white/15 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6">
                    <div className="lg:w-1/3">
                      <div className="bg-white/20 rounded-lg h-32 sm:h-40 md:h-48 flex items-center justify-center">
                        <Briefcase className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-white/60" />
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Fusão e Aquisição Internacional</h3>
                      <p className="text-chimelo-silver mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                        Assessoramos a aquisição de empresa brasileira por grupo internacional, coordenando aspectos 
                        regulatórios, societários e contratuais em operação de R$ 800 milhões.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">M&A</span>
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Internacional</span>
                        <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Regulatório</span>
                      </div>
                      <p className="text-xs sm:text-sm text-chimelo-silver">
                        <strong>Resultado:</strong> Operação concluída em tempo recorde de 4 meses.
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
