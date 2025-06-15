
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
          const { offsetTop, offsetHeight } = element;
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

  return (
    <div className="flex flex-col min-h-screen destaques-page">
      <Header />
      
      {/* Hero Section with Extended Background */}
      <section className="relative bg-chimelo-black text-white min-h-screen">
        <div className="absolute inset-0 opacity-35 bg-cover bg-center" 
             style={{
               backgroundImage: 'url("/lovable-uploads/27570706-51c0-4d07-a428-af2be4221322.png")',
               backgroundBlendMode: 'overlay'
             }} 
        />
        
        <div className="relative">
          {/* Header Content with adjusted positioning */}
          <div className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ marginTop: '23px' }}>
            <div className="chimelo-container">
              <div className="max-w-4xl mx-auto mb-8 sm:mb-12 text-center px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6">
                  Destaques
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-chimelo-silver max-w-3xl mx-auto leading-relaxed">
                  Conheça nossas publicações, associações e cases de sucesso que demonstram nossa excelência jurídica.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Menu - Fully Responsive */}
          <div className="chimelo-container mb-12 sm:mb-16 px-4">
            <div className="flex justify-center">
              <nav className="bg-white/10 backdrop-blur-sm rounded-full p-1 sm:p-2 w-full max-w-2xl">
                <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1">
                  <Button
                    variant={activeSection === 'publicacoes' ? 'default' : 'ghost'}
                    className={`rounded-full px-3 sm:px-4 md:px-6 py-2 text-xs sm:text-sm font-medium transition-all w-full sm:w-auto ${
                      activeSection === 'publicacoes' 
                        ? 'bg-white text-chimelo-black hover:bg-white/90' 
                        : 'text-white hover:bg-white/20'
                    }`}
                    onClick={() => scrollToSection('publicacoes')}
                  >
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Publicações
                  </Button>
                  <Button
                    variant={activeSection === 'associacoes' ? 'default' : 'ghost'}
                    className={`rounded-full px-3 sm:px-4 md:px-6 py-2 text-xs sm:text-sm font-medium transition-all w-full sm:w-auto ${
                      activeSection === 'associacoes' 
                        ? 'bg-white text-chimelo-black hover:bg-white/90' 
                        : 'text-white hover:bg-white/20'
                    }`}
                    onClick={() => scrollToSection('associacoes')}
                  >
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Associações
                  </Button>
                  <Button
                    variant={activeSection === 'cases' ? 'default' : 'ghost'}
                    className={`rounded-full px-3 sm:px-4 md:px-6 py-2 text-xs sm:text-sm font-medium transition-all w-full sm:w-auto ${
                      activeSection === 'cases' 
                        ? 'bg-white text-chimelo-black hover:bg-white/90' 
                        : 'text-white hover:bg-white/20'
                    }`}
                    onClick={() => scrollToSection('cases')}
                  >
                    <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Cases
                  </Button>
                </div>
              </nav>
            </div>
          </div>

          {/* Publicações Section - Enhanced Responsiveness */}
          <section id="publicacoes" className="chimelo-section">
            <div className="chimelo-container px-4">
              <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Publicações</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-chimelo-silver mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                  Acompanhe nossos artigos, estudos e publicações jurídicas que compartilham conhecimento e análises especializadas.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* Publicação 1 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/15 transition-all">
                  <div className="bg-white/20 rounded-lg h-32 sm:h-40 md:h-48 mb-3 sm:mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white/60" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Análise Jurisprudencial 2025</h3>
                  <p className="text-chimelo-silver mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                    Estudo aprofundado das principais decisões judiciais que impactaram o cenário jurídico brasileiro.
                  </p>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/20 text-sm sm:text-base">
                    Leia mais
                  </Button>
                </div>

                {/* Publicação 2 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/15 transition-all">
                  <div className="bg-white/20 rounded-lg h-32 sm:h-40 md:h-48 mb-3 sm:mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white/60" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Direito Empresarial Moderno</h3>
                  <p className="text-chimelo-silver mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                    Guia completo sobre as novas tendências e regulamentações no direito empresarial.
                  </p>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/20 text-sm sm:text-base">
                    Leia mais
                  </Button>
                </div>

                {/* Publicação 3 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/15 transition-all sm:col-span-2 lg:col-span-1">
                  <div className="bg-white/20 rounded-lg h-32 sm:h-40 md:h-48 mb-3 sm:mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white/60" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Compliance e Governança</h3>
                  <p className="text-chimelo-silver mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                    Melhores práticas para implementação de programas de compliance eficazes.
                  </p>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/20 text-sm sm:text-base">
                    Leia mais
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Associações Section - Enhanced Responsiveness */}
          <section id="associacoes" className="chimelo-section">
            <div className="chimelo-container px-4">
              <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Associações</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-chimelo-silver mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                  Conheça as principais associações e entidades das quais fazemos parte, fortalecendo nossa rede de conhecimento.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Associação 1 */}
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

                {/* Associação 2 */}
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

                {/* Associação 3 */}
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

                {/* Associação 4 */}
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

          {/* Cases Section - Enhanced Responsiveness */}
          <section id="cases" className="chimelo-section pb-16 sm:pb-20 lg:pb-24">
            <div className="chimelo-container px-4">
              <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Cases de Sucesso</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-chimelo-silver mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                  Conheça alguns dos nossos principais cases de sucesso que demonstram nossa expertise e dedicação aos clientes.
                </p>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                {/* Case 1 */}
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

                {/* Case 2 */}
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

                {/* Case 3 */}
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
