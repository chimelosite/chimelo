
import React from "react";
import { ArrowRight } from "lucide-react";
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
  AlertTriangle 
} from "lucide-react";

interface AreaDetalhadaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  servicos: string[];
  casos?: string[];
}

const AreaDetalhada: React.FC<AreaDetalhadaProps> = ({ icon, title, description, servicos, casos }) => {
  return (
    <div className="border border-chimelo-lightgray/20 rounded-lg overflow-hidden bg-white p-6 mb-8">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-chimelo-black/5 mr-4">
          {icon}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <p className="mb-6 text-chimelo-silver">{description}</p>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Serviços Oferecidos</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {servicos.map((servico, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 text-chimelo-silver">•</div>
              <span>{servico}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {casos && casos.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Casos Relevantes</h3>
          <ul className="space-y-2">
            {casos.map((caso, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-2 mt-1 text-chimelo-silver">•</div>
                <span>{caso}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const AreasAtuacaoPage: React.FC = () => {
  const areasDetalhadas: AreaDetalhadaProps[] = [
    {
      icon: <Shield className="h-6 w-6 text-chimelo-black" />,
      title: "GOVERNANÇA E GESTÃO ESTRATÉGICA",
      description: "Atuação focada na sustentabilidade, segurança jurídica e expansão dos negócios.",
      servicos: [
        "Governança corporativa e compliance",
        "Planejamento jurídico para fusões, aquisições e crescimento",
        "Estruturação de dívidas, investimentos e captação de recursos",
        "Constituição de conselhos e reorganização societária"
      ]
    },
    {
      icon: <Scale className="h-6 w-6 text-chimelo-black" />,
      title: "RESOLUÇÃO DE CONFLITOS E MEDIAÇÃO EMPRESARIAL",
      description: "Soluções ágeis e vantajosas para disputas empresariais.",
      servicos: [
        "Negociação estratégica de contratos e passivos",
        "Mediação societária e acordos estruturados",
        "Atuação em câmaras de arbitragem"
      ]
    },
    {
      icon: <Building className="h-6 w-6 text-chimelo-black" />,
      title: "REESTRUTURAÇÃO, FALÊNCIAS E RECUPERAÇÃO EMPRESARIAL",
      description: "Assessoria completa para empresas, credores e investidores.",
      servicos: [
        "Planejamento de ativos e proteção patrimonial",
        "Representação em assembleias e processos estratégicos",
        "Estruturação de novos modelos de negócios"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-chimelo-black" />,
      title: "DIREITO SOCIETÁRIO E M&A",
      description: "SEGURANÇA E EFICIÊNCIA PARA OPERAÇÕES SOCIETÁRIAS.",
      servicos: [
        "Constituição, fusões, cisões e aquisições",
        "Mediação entre sócios e reestruturações",
        "Due diligence e estruturação de ativos"
      ]
    },
    {
      icon: <Book className="h-6 w-6 text-chimelo-black" />,
      title: "PLANEJAMENTO PATRIMONIAL E SUCESSÓRIO",
      description: "PRESERVAÇÃO DE PATRIMÔNIO E CONTINUIDADE DOS NEGÓCIOS.",
      servicos: [
        "Inventários e sucessão empresarial",
        "Gestão de ativos familiares",
        "Blindagem patrimonial"
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6 text-chimelo-black" />,
      title: "DIREITO TRABALHISTA ESTRATÉGICO",
      description: "ATUAÇÃO PREVENTIVA E GESTÃO DE PASSIVOS.",
      servicos: [
        "Conciliação e negociação coletiva",
        "Diagnóstico trabalhista e reestruturações",
        "Centralização de execuções e alienação de ativos"
      ]
    },
    {
      icon: <FileText className="h-6 w-6 text-chimelo-black" />,
      title: "DIREITO TRIBUTÁRIO E TRANSAÇÃO FISCAL",
      description: "EFICIÊNCIA FISCAL COM SEGURANÇA JURÍDICA.",
      servicos: [
        "Planejamento tributário e consultoria empresarial",
        "Transações fiscais e parcelamentos",
        "Recuperação de tributos e incentivos"
      ]
    },
    {
      icon: <Search className="h-6 w-6 text-chimelo-black" />,
      title: "CONSELHO DE GOVERNANÇA",
      description: "Atuação estratégica na constituição e suporte a conselhos empresariais, promovendo ambientes corporativos sólidos, éticos e com visão de longo prazo.",
      servicos: [
        "Constituição de conselhos de administração",
        "Assessoria jurídica para conselheiros",
        "Estruturação de regimentos e políticas de governança",
        "Treinamento e capacitação de conselheiros"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero section replicando o estilo da home */}
        <section className="relative bg-chimelo-black text-white overflow-hidden">
          <div 
            className="absolute inset-0 opacity-30 bg-cover bg-center" 
            style={{
              backgroundImage: 'url("https://i.imgur.com/1FQHSz1.jpeg")',
              backgroundBlendMode: 'overlay'
            }}
          />
          
          <div className="relative chimelo-container py-32 md:py-36 lg:py-44 flex flex-col items-start">
            <div className="max-w-3xl mt-8 md:mt-10">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Áreas de Atuação & Serviços
              </h1>
              <p className="text-xl text-chimelo-silver mb-8 max-w-2xl">
                O escritório Chimelo Advogados & Associados oferece soluções jurídicas integradas nas mais diversas áreas do direito, sempre com foco nas necessidades específicas de cada cliente e na busca pelos melhores resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="chimelo-btn chimelo-btn-primary">
                  <a href="#areas-detalhadas">
                    Ver áreas de atuação <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link to="/contato">
                    Entre em contato
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section id="areas-detalhadas" className="chimelo-section bg-gray-50">
          <div className="chimelo-container">            
            <div className="space-y-8">
              {areasDetalhadas.map((area, index) => (
                <AreaDetalhada
                  key={index}
                  icon={area.icon}
                  title={area.title}
                  description={area.description}
                  servicos={area.servicos}
                  casos={area.casos}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AreasAtuacaoPage;
