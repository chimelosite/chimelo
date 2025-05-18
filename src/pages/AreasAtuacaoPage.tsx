import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Shield, 
  Briefcase, 
  FileText, 
  Users, 
  Book, 
  Search, 
  MessageSquare, 
  Scale, 
  Globe, 
  Building, 
  CreditCard, 
  AlertTriangle,
  Tractor,
  Factory,
  Car,
  Component,
  Phone,
  Bot, // Changed from Boot to Bot (valid icon)
  Leaf,
  Truck,
  Milk,
  Utensils,
  Construction,
  Bus,
  Plane,
  CircuitBoard,
  Store,
  Pill,
  Shirt,
  MapPin,
  Code,
  Bolt,
  Heart,
  Train,
  Home,
  Handshake,
  ArrowRight,
  ArrowUp,
  FileSearch,
  TrendingUp,
  ArrowsUpFromLine,
  Trash,
  Terminal
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SetorProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface EspecialidadeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SetorCard: React.FC<SetorProps> = ({ icon, title, description }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-chimelo-lightgray/20 group">
      <CardHeader className="pb-3">
        <div className="p-3 rounded-full bg-chimelo-black/5 w-fit mb-3">
          {icon}
        </div>
        <CardTitle className="group-hover:text-chimelo-silver transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-chimelo-silver">{description}</p>
      </CardContent>
    </Card>
  );
};

const EspecialidadeCard: React.FC<EspecialidadeProps> = ({ icon, title, description }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-chimelo-lightgray/20 group">
      <CardHeader className="pb-3">
        <div className="p-3 rounded-full bg-chimelo-black/5 w-fit mb-3">
          {icon}
        </div>
        <CardTitle className="group-hover:text-chimelo-silver transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-chimelo-silver">{description}</p>
      </CardContent>
    </Card>
  );
};

const AreasAtuacaoPage: React.FC = () => {
  // Estado para controlar o scroll suave aos âncoras
  const [activeSectionId, setActiveSectionId] = useState<string>("setores");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSectionId(sectionId);
    }
  };

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dados para os Setores de Atuação
  const setores: SetorProps[] = [
    {
      icon: <Tractor className="h-6 w-6 text-chimelo-black" />,
      title: "Agronegócio e Produção Rural",
      description: "Atuação em reestruturações, gestão de passivos, governança e negociações estratégicas em operações rurais e cadeias produtivas do agronegócio."
    },
    {
      icon: <Factory className="h-6 w-6 text-chimelo-black" />,
      title: "Implementos Agrícolas",
      description: "Assessoria em contratos, fusões, auditorias e recuperação de empresas do setor de maquinário e soluções agrícolas."
    },
    {
      icon: <Car className="h-6 w-6 text-chimelo-black" />,
      title: "Concessionárias de Veículos",
      description: "Gestão de demandas societárias, trabalhistas coletivas e recuperação de passivos, além de operações de M&A e governança."
    },
    {
      icon: <Component className="h-6 w-6 text-chimelo-black" />,
      title: "Componentes Automotivos",
      description: "Atuação em reestruturação, inteligência tributária e gestão de contratos e recuperações em cadeia automotiva e fornecimento industrial."
    },
    {
      icon: <Phone className="h-6 w-6 text-chimelo-black" />,
      title: "Telefonia e Telecomunicações",
      description: "Due diligence, recuperação judicial e gestão de passivos em contratos públicos e operações com grandes volumes de ativos e passivos."
    },
    {
      icon: <Bot className="h-6 w-6 text-chimelo-black" />, // Changed from Boot to Bot
      title: "Indústria Calçadista",
      description: "Reestruturação financeira, auditorias, gestão trabalhista coletiva e estratégias de recuperação extrajudicial para indústrias calçadistas."
    },
    {
      icon: <Leaf className="h-6 w-6 text-chimelo-black" />,
      title: "Indústria Fumageira Exportadora",
      description: "Gestão societária, auditoria fiscal, reestruturação de contratos e operações internacionais no setor de exportação agrícola."
    },
    {
      icon: <Truck className="h-6 w-6 text-chimelo-black" />,
      title: "Logística e Transporte Rodoviário",
      description: "Atuação em recuperação de ativos, renegociação de dívidas, inteligência tributária e estruturação societária de empresas de transporte."
    },
    {
      icon: <Milk className="h-6 w-6 text-chimelo-black" />,
      title: "Indústria de Laticínios",
      description: "Due diligence, M&A, reestruturação societária e recuperação judicial para indústrias de alimentos e produtos perecíveis."
    },
    {
      icon: <Utensils className="h-6 w-6 text-chimelo-black" />,
      title: "Indústria Alimentícia",
      description: "Assessoria em governança corporativa, contratos, recuperação de empresas e auditorias fiscais e contábeis."
    },
    {
      icon: <Construction className="h-6 w-6 text-chimelo-black" />,
      title: "Construção Civil e Fundações",
      description: "Gestão de contratos, governança de sociedades, recuperação judicial e reestruturação tributária de construtoras e empreiteiras."
    },
    {
      icon: <Bus className="h-6 w-6 text-chimelo-black" />,
      title: "Fabricação de Ônibus e Borrachas",
      description: "Atuação em operações de M&A, auditorias e reestruturação empresarial em cadeias industriais automotivas e de insumos."
    },
    {
      icon: <Plane className="h-6 w-6 text-chimelo-black" />,
      title: "Companhias Aéreas Regionais",
      description: "Assessoria em governança, contratos públicos, recuperação judicial e reestruturação de passivos para companhias aéreas."
    },
    {
      icon: <CircuitBoard className="h-6 w-6 text-chimelo-black" />,
      title: "Engenharia e Tecnologia Automotiva",
      description: "Due diligence, contratos e estruturação societária em empresas de engenharia aplicada à indústria automotiva."
    },
    {
      icon: <Store className="h-6 w-6 text-chimelo-black" />,
      title: "Redes Varejistas",
      description: "Gestão de contratos, auditorias tributárias e reestruturação de operações comerciais e societárias em redes de alimentação e informática."
    },
    {
      icon: <Pill className="h-6 w-6 text-chimelo-black" />,
      title: "Indústria Farmacêutica e Distribuição de Alimentos",
      description: "Atuação em governança, auditorias, reestruturação societária e gestão de passivos setoriais."
    },
    {
      icon: <Shirt className="h-6 w-6 text-chimelo-black" />,
      title: "Indústria Têxtil",
      description: "Gestão de passivos trabalhistas, recuperação extrajudicial e estruturação societária de indústrias têxteis."
    },
    {
      icon: <MapPin className="h-6 w-6 text-chimelo-black" />,
      title: "Infraestrutura Rodoviária",
      description: "Assessoria em contratos públicos, reestruturação de concessões e gestão de litígios estratégicos."
    },
    {
      icon: <Code className="h-6 w-6 text-chimelo-black" />,
      title: "Tecnologia da Informação",
      description: "Governança corporativa, contratos internacionais e estruturação societária para empresas de tecnologia e serviços."
    },
    {
      icon: <Bolt className="h-6 w-6 text-chimelo-black" />,
      title: "Energia e Setor de Seguros",
      description: "Atuação estratégica em gestão de contratos, recuperação de créditos e estruturação tributária."
    },
    {
      icon: <Heart className="h-6 w-6 text-chimelo-black" />,
      title: "Saúde e Instituições Hospitalares",
      description: "Due diligence, reestruturação de contratos, gestão de passivos trabalhistas e societários."
    },
    {
      icon: <Bus className="h-6 w-6 text-chimelo-black" />,
      title: "Transporte Coletivo",
      description: "Recuperação judicial, gestão de contratos públicos e renegociação de passivos em empresas de transporte urbano e rodoviário."
    }
  ];

  // Dados para os Produtos e Especialidades
  const especialidades: EspecialidadeProps[] = [
    {
      icon: <Home className="h-6 w-6 text-chimelo-black" />,
      title: "Imobiliário e Real Estate (Distressed & Special Situations)",
      description: "Gestão e estruturação de operações imobiliárias estratégicas, incluindo ativos em situação especial, reestruturação de empreendimentos e negociação de ativos distressed."
    },
    {
      icon: <Handshake className="h-6 w-6 text-chimelo-black" />,
      title: "Trabalhista Coletivo",
      description: "Atuação em demandas trabalhistas de grande escala, negociações sindicais, ações coletivas e gestão estratégica de passivos trabalhistas."
    },
    {
      icon: <Users className="h-6 w-6 text-chimelo-black" />,
      title: "Societário e Governança Corporativa",
      description: "Estruturação societária, planejamento de sucessão empresarial e implementação de boas práticas de governança corporativa para empresas de diversos portes."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-chimelo-black" />,
      title: "Fusões e Aquisições (M&A)",
      description: "Assessoria em processos de compra, venda, fusão ou incorporação de empresas, desde a negociação até o fechamento da operação."
    },
    {
      icon: <FileSearch className="h-6 w-6 text-chimelo-black" />,
      title: "Due Diligence e Auditoria Contábil",
      description: "Análise completa de riscos legais, financeiros e contábeis em operações societárias, aquisições, contratos e estrutura patrimonial."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-chimelo-black" />,
      title: "Inteligência Tributária",
      description: "Estratégias para otimização fiscal, revisão de carga tributária, compliance e aproveitamento de créditos tributários para maximização de resultados."
    },
    {
      icon: <ArrowsUpFromLine className="h-6 w-6 text-chimelo-black" />,
      title: "Reestruturação Empresarial, Insolvência e Recuperação Judicial",
      description: "Elaboração e condução de planos de reestruturação financeira e operacional, recuperação judicial e negociações com credores."
    },
    {
      icon: <Handshake className="h-6 w-6 text-chimelo-black" />,
      title: "Recuperação Extrajudicial e Workout",
      description: "Mediação e negociação direta com credores para reestruturação de dívidas e passivos sem intervenção judicial, preservando a operação da empresa."
    },
    {
      icon: <Trash className="h-6 w-6 text-chimelo-black" />,
      title: "Falência e Gestão de Passivos",
      description: "Atuação em processos falimentares, administração de ativos e gestão de passivos para redução de impactos e preservação de patrimônio."
    },
    {
      icon: <Terminal className="h-6 w-6 text-chimelo-black" />,
      title: "Tecnologia e Serviços",
      description: "Manutenção de contratos públicos em recuperação e estruturação de joint ventures internacionais, com foco em eficiência e continuidade operacional."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-0">
        {/* Hero Section */}
        <section className="relative bg-chimelo-black text-white">
          <div 
            className="absolute inset-0 opacity-35 bg-cover bg-center" 
            style={{
              backgroundImage: 'url("/lovable-uploads/27570706-51c0-4d07-a428-af2be4221322.png")',
              backgroundBlendMode: 'overlay'
            }}
          />
          
          <div className="relative py-16 md:py-24">
            <div className="chimelo-container">
              <div className="max-w-3xl mx-auto mb-8 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Áreas de Atuação e Serviços</h1>
                <p className="text-lg text-chimelo-silver max-w-2xl mx-auto">
                 O escritório Chimelo Advogados e Associados oferece soluções jurídicas integradas nas mais diversas áreas do direito, sempre com foco nas necessidades específicas de cada cliente e na busca pelos melhores resultados.
                </p>
              </div>
              
              {/* Navigation Tabs */}
              <div className="flex justify-center mt-8">
                <div className="inline-flex rounded-md shadow-sm p-1 bg-white/10 backdrop-blur-sm">
                  <button 
                    onClick={() => scrollToSection('setores')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeSectionId === 'setores' ? 'bg-white text-chimelo-black' : 'text-white hover:bg-white/20'}`}
                  >
                    Setores de Atuação
                  </button>
                  <button 
                    onClick={() => scrollToSection('especialidades')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeSectionId === 'especialidades' ? 'bg-white text-chimelo-black' : 'text-white hover:bg-white/20'}`}
                  >
                    Produtos e Especialidades
                  </button>
                </div>
              </div>
            </div>
          </div>    
        </section>
        
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-3 border-b border-gray-200">
          <div className="chimelo-container">
            <nav className="flex text-sm">
              <Link to="/" className="text-chimelo-silver hover:text-chimelo-black">Home</Link>
              <span className="mx-2 text-chimelo-silver">/</span>
              <span className="text-chimelo-black font-medium">Áreas de Atuação e Serviços</span>
            </nav>
          </div>
        </div>
        
        {/* Setores de Atuação Section */}
        <section id="setores" className="py-16 bg-white">
          <div className="chimelo-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Setores de Atuação</h2>
              <p className="text-chimelo-silver">
                Nosso escritório possui expertise em diversos setores econômicos, permitindo uma atuação especializada nas particularidades de cada indústria.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {setores.map((setor, index) => (
                <SetorCard
                  key={index}
                  icon={setor.icon}
                  title={setor.title}
                  description={setor.description}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                onClick={() => scrollToSection('especialidades')} 
                variant="outline" 
                className="border-chimelo-silver text-chimelo-black bg-transparent hover:bg-chimelo-lightgray/10"
              >
                Ver Produtos e Especialidades <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Produtos e Especialidades Section */}
        <section id="especialidades" className="py-16 bg-gray-50">
          <div className="chimelo-container">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Produtos e Especialidades</h2>
              <p className="text-chimelo-silver">
                Conheça nossos serviços jurídicos especializados e soluções estratégicas para os mais diversos desafios empresariais.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {especialidades.map((especialidade, index) => (
                <EspecialidadeCard
                  key={index}
                  icon={especialidade.icon}
                  title={especialidade.title}
                  description={especialidade.description}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                onClick={voltarAoTopo} 
                variant="outline" 
                className="border-chimelo-silver text-chimelo-black bg-transparent hover:bg-chimelo-lightgray/10"
              >
                Voltar ao Topo <ArrowUp className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call To Action */}
        <section className="py-16 bg-chimelo-black text-white">
          <div className="chimelo-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Precisa de Assessoria Jurídica Especializada?</h2>
              <p className="text-chimelo-silver mb-8">
                Entre em contato com nossa equipe para uma avaliação personalizada das necessidades do seu negócio.
              </p>
              <Link to="/contato">
                <Button className="bg-white text-chimelo-black hover:bg-gray-100">
                  Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Floating Navigation */}
      <div className="fixed bottom-8 right-8 z-10 flex flex-col space-y-2">
        <button 
          onClick={() => scrollToSection('setores')} 
          className={`p-3 rounded-full shadow-lg transition-colors ${activeSectionId === 'setores' ? 'bg-chimelo-black text-white' : 'bg-white text-chimelo-black hover:bg-gray-100'}`}
          aria-label="Ir para Setores de Atuação"
        >
          <Factory className="h-5 w-5" />
        </button>
        <button 
          onClick={() => scrollToSection('especialidades')} 
          className={`p-3 rounded-full shadow-lg transition-colors ${activeSectionId === 'especialidades' ? 'bg-chimelo-black text-white' : 'bg-white text-chimelo-black hover:bg-gray-100'}`}
          aria-label="Ir para Produtos e Especialidades"
        >
          <Briefcase className="h-5 w-5" />
        </button>
        <button 
          onClick={voltarAoTopo} 
          className="p-3 bg-white text-chimelo-black rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default AreasAtuacaoPage;
