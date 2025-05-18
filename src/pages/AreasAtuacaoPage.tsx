
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

import { 
  Tractor,
  Building,
  Store,
  Factory,
  Code,
  Briefcase,
  FileText,
  ArrowsUpFromLine,
  Search,
  Calculator,
  ArrowUp,
  ArrowRight 
} from "lucide-react";

const AreasAtuacaoPage: React.FC = () => {
  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dados para os Setores de Atuação
  const setores = [
    {
      icon: <Tractor className="h-6 w-6 text-chimelo-black" />,
      title: "Agronegócio e Produção Rural",
      description: "Atuação em reestruturações, gestão de passivos, governança e negociações estratégicas em operações rurais e cadeias produtivas do agronegócio."
    },
    {
      icon: <Building className="h-6 w-6 text-chimelo-black" />,
      title: "Construção Civil e Incorporações",
      description: "Assessoria jurídica completa para projetos imobiliários, contratos, regularizações e soluções para construtoras e incorporadoras."
    },
    {
      icon: <Store className="h-6 w-6 text-chimelo-black" />,
      title: "Varejo e E-commerce",
      description: "Suporte jurídico para operações comerciais físicas e digitais, incluindo conformidade regulatória e proteção ao consumidor."
    },
    {
      icon: <Factory className="h-6 w-6 text-chimelo-black" />,
      title: "Indústria e Manufatura",
      description: "Soluções jurídicas para o setor industrial, incluindo licenciamento, propriedade intelectual e contratos de fornecimento."
    },
    {
      icon: <Code className="h-6 w-6 text-chimelo-black" />,
      title: "Tecnologia e Startups",
      description: "Assessoria especializada para empresas de tecnologia e startups em todas as fases de desenvolvimento, incluindo captação de investimentos e proteção de ativos intelectuais."
    }
  ];

  // Dados para os Produtos e Especialidades
  const especialidades = [
    {
      icon: <Briefcase className="h-6 w-6 text-chimelo-black" />,
      title: "Consultoria Jurídica Empresarial",
      description: "Atendimento jurídico integrado e personalizado para empresas, com foco em prevenção de conflitos e otimização de resultados."
    },
    {
      icon: <FileText className="h-6 w-6 text-chimelo-black" />,
      title: "Gestão de Contratos",
      description: "Elaboração, análise e gestão estratégica de contratos comerciais e corporativos para maximizar segurança jurídica e vantagens negociais."
    },
    {
      icon: <ArrowsUpFromLine className="h-6 w-6 text-chimelo-black" />,
      title: "Recuperação Judicial e Reestruturação",
      description: "Condução de processos de recuperação judicial e extrajudicial, renegociação de dívidas e reestruturação organizacional para empresas em crise."
    },
    {
      icon: <Search className="h-6 w-6 text-chimelo-black" />,
      title: "Due Diligence e M&A",
      description: "Análise jurídica completa para operações de fusão, aquisição e incorporação, com identificação de riscos e oportunidades."
    },
    {
      icon: <Calculator className="h-6 w-6 text-chimelo-black" />,
      title: "Planejamento Tributário",
      description: "Estratégias fiscais legítimas para otimização da carga tributária, com foco em conformidade e proteção patrimonial."
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
              <div className="max-w-3xl mx-auto mb-8 text-center" style={{ marginTop: '15px' }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Áreas de Atuação e Serviços</h1>
                <p className="text-lg text-chimelo-silver max-w-2xl mx-auto">
                  O escritório Chimelo Advogados e Associados oferece soluções jurídicas integradas nas mais diversas áreas do direito, sempre com foco nas necessidades específicas de cada cliente e na busca pelos melhores resultados.
                </p>
                <div className="mx-auto mt-4 h-[1px] w-[60px] bg-white/50"></div>
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
        
        {/* Área de Conteúdo Principal - Layout Duas Colunas */}
        <section className="py-16 bg-white">
          <div className="chimelo-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Coluna 1: Setores de Atuação */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Setores de Atuação</h2>
                <div className="mx-auto mb-8 h-[1px] w-[60px] bg-chimelo-silver/50"></div>
                <p className="text-chimelo-silver mb-8">
                  Nosso escritório possui expertise em diversos setores econômicos, permitindo uma atuação especializada nas particularidades de cada indústria.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  {setores.map((setor, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`setor-${index}`}
                      className="border border-chimelo-lightgray/20 rounded-md mb-3 overflow-hidden bg-white hover:shadow-sm transition-shadow"
                    >
                      <AccordionTrigger className="px-4 py-4 flex items-center hover:no-underline">
                        <div className="flex items-center">
                          <div className="p-2 rounded-full bg-chimelo-black/5 mr-3">
                            {setor.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-chimelo-black">{setor.title}</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2">
                        <p className="text-chimelo-silver">{setor.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              
              {/* Coluna 2: Produtos e Especialidades */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Produtos e Especialidades</h2>
                <div className="mx-auto mb-8 h-[1px] w-[60px] bg-chimelo-silver/50"></div>
                <p className="text-chimelo-silver mb-8">
                  Conheça nossos serviços jurídicos especializados e soluções estratégicas para os mais diversos desafios empresariais.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  {especialidades.map((especialidade, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`especialidade-${index}`}
                      className="border border-chimelo-lightgray/20 rounded-md mb-3 overflow-hidden bg-white hover:shadow-sm transition-shadow"
                    >
                      <AccordionTrigger className="px-4 py-4 flex items-center hover:no-underline">
                        <div className="flex items-center">
                          <div className="p-2 rounded-full bg-chimelo-black/5 mr-3">
                            {especialidade.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-chimelo-black">{especialidade.title}</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2">
                        <p className="text-chimelo-silver">{especialidade.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
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
      <div className="fixed bottom-8 right-8 z-10">
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
