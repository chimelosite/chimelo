
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
          {/* Header Content */}
          <div className="py-16 md:py-[29px]">
            <div className="chimelo-container">
              <div className="max-w-3xl mx-auto mb-12 text-center" style={{ marginTop: '15px' }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Destaques</h1>
                <p className="text-lg text-chimelo-silver max-w-2xl mx-auto">
                  Conheça nossas publicações, associações e cases de sucesso que demonstram nossa excelência jurídica.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="chimelo-container mb-16">
            <div className="flex justify-center">
              <nav className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                <div className="flex space-x-1">
                  <Button
                    variant={activeSection === 'publicacoes' ? 'default' : 'ghost'}
                    className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                      activeSection === 'publicacoes' 
                        ? 'bg-white text-chimelo-black hover:bg-white/90' 
                        : 'text-white hover:bg-white/20'
                    }`}
                    onClick={() => scrollToSection('publicacoes')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Publicações
                  </Button>
                  <Button
                    variant={activeSection === 'associacoes' ? 'default' : 'ghost'}
                    className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                      activeSection === 'associacoes' 
                        ? 'bg-white text-chimelo-black hover:bg-white/90' 
                        : 'text-white hover:bg-white/20'
                    }`}
                    onClick={() => scrollToSection('associacoes')}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Associações
                  </Button>
                  <Button
                    variant={activeSection === 'cases' ? 'default' : 'ghost'}
                    className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                      activeSection === 'cases' 
                        ? 'bg-white text-chimelo-black hover:bg-white/90' 
                        : 'text-white hover:bg-white/20'
                    }`}
                    onClick={() => scrollToSection('cases')}
                  >
                    <Briefcase className="h-4 w-4 mr-2" />
                    Cases
                  </Button>
                </div>
              </nav>
            </div>
          </div>

          {/* Publicações Section */}
          <section id="publicacoes" className="chimelo-section">
            <div className="chimelo-container">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Publicações</h2>
                <p className="text-lg text-chimelo-silver mb-8">
                  Acompanhe nossos artigos, estudos e publicações jurídicas que compartilham conhecimento e análises especializadas.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Publicação 1 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all">
                  <div className="bg-white/20 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-white/60" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Análise Jurisprudencial 2025</h3>
                  <p className="text-chimelo-silver mb-4">
                    Estudo aprofundado das principais decisões judiciais que impactaram o cenário jurídico brasileiro.
                  </p>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/20">
                    Leia mais
                  </Button>
                </div>

                {/* Publicação 2 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all">
                  <div className="bg-white/20 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-white/60" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Direito Empresarial Moderno</h3>
                  <p className="text-chimelo-silver mb-4">
                    Guia completo sobre as novas tendências e regulamentações no direito empresarial.
                  </p>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/20">
                    Leia mais
                  </Button>
                </div>

                {/* Publicação 3 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all">
                  <div className="bg-white/20 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-white/60" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Compliance e Governança</h3>
                  <p className="text-chimelo-silver mb-4">
                    Melhores práticas para implementação de programas de compliance eficazes.
                  </p>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/20">
                    Leia mais
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Associações Section */}
          <section id="associacoes" className="chimelo-section">
            <div className="chimelo-container">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Associações</h2>
                <p className="text-lg text-chimelo-silver mb-8">
                  Conheça as principais associações e entidades das quais fazemos parte, fortalecendo nossa rede de conhecimento.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Associação 1 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 rounded-full p-4 mr-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">OAB - Ordem dos Advogados do Brasil</h3>
                      <p className="text-chimelo-silver">Membro ativo desde 2010</p>
                    </div>
                  </div>
                  <p className="text-chimelo-silver mb-4">
                    Participação ativa nas comissões de Direito Empresarial e Direito Civil, contribuindo para o desenvolvimento da advocacia brasileira.
                  </p>
                </div>

                {/* Associação 2 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 rounded-full p-4 mr-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">AASP - Associação dos Advogados de São Paulo</h3>
                      <p className="text-chimelo-silver">Membro associado</p>
                    </div>
                  </div>
                  <p className="text-chimelo-silver mb-4">
                    Engajamento em eventos, cursos e debates sobre as principais mudanças no cenário jurídico paulista e nacional.
                  </p>
                </div>

                {/* Associação 3 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 rounded-full p-4 mr-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Instituto Brasileiro de Direito Empresarial</h3>
                      <p className="text-chimelo-silver">Conselheiro</p>
                    </div>
                  </div>
                  <p className="text-chimelo-silver mb-4">
                    Contribuição para pesquisas e desenvolvimento de metodologias inovadoras no direito empresarial brasileiro.
                  </p>
                </div>

                {/* Associação 4 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 rounded-full p-4 mr-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Câmara de Mediação e Arbitragem</h3>
                      <p className="text-chimelo-silver">Árbitro credenciado</p>
                    </div>
                  </div>
                  <p className="text-chimelo-silver mb-4">
                    Atuação como árbitro em conflitos empresariais, promovendo soluções eficazes e céleres para disputas comerciais.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cases Section */}
          <section id="cases" className="chimelo-section pb-24">
            <div className="chimelo-container">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Cases de Sucesso</h2>
                <p className="text-lg text-chimelo-silver mb-8">
                  Conheça alguns dos nossos principais casos de sucesso que demonstram nossa expertise e dedicação aos clientes.
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Case 1 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="lg:w-1/3">
                      <div className="bg-white/20 rounded-lg h-48 flex items-center justify-center">
                        <Briefcase className="h-16 w-16 text-white/60" />
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <h3 className="text-2xl font-bold mb-4">Reestruturação Empresarial Complexa</h3>
                      <p className="text-chimelo-silver mb-4">
                        Conduzimos com sucesso a reestruturação de uma empresa de grande porte do setor industrial, 
                        envolvendo reorganização societária, renegociação de dívidas e otimização tributária.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Direito Empresarial</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Tributário</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Reestruturação</span>
                      </div>
                      <p className="text-sm text-chimelo-silver">
                        <strong>Resultado:</strong> Economia de R$ 15 milhões em impostos e preservação de 500 empregos.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 2 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="lg:w-1/3">
                      <div className="bg-white/20 rounded-lg h-48 flex items-center justify-center">
                        <Briefcase className="h-16 w-16 text-white/60" />
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <h3 className="text-2xl font-bold mb-4">Defesa em Ação Trabalhista Milionária</h3>
                      <p className="text-chimelo-silver mb-4">
                        Representamos uma multinacional em ação trabalhista coletiva envolvendo mais de 1.000 funcionários, 
                        conseguindo reduzir significativamente o valor da condenação através de estratégia jurídica inovadora.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Direito Trabalhista</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Ação Coletiva</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Defesa</span>
                      </div>
                      <p className="text-sm text-chimelo-silver">
                        <strong>Resultado:</strong> Redução de 70% no valor da condenação inicial.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case 3 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="lg:w-1/3">
                      <div className="bg-white/20 rounded-lg h-48 flex items-center justify-center">
                        <Briefcase className="h-16 w-16 text-white/60" />
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <h3 className="text-2xl font-bold mb-4">Fusão e Aquisição Internacional</h3>
                      <p className="text-chimelo-silver mb-4">
                        Assessoramos a aquisição de empresa brasileira por grupo internacional, coordenando aspectos 
                        regulatórios, societários e contratuais em operação de R$ 800 milhões.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">M&A</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Internacional</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Regulatório</span>
                      </div>
                      <p className="text-sm text-chimelo-silver">
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
