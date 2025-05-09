
import React from "react";
import { Shield, Briefcase, FileText, Users, Book, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface AreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const AreaCard: React.FC<AreaProps> = ({ icon, title, description, link }) => {
  return (
    <Link 
      to={link} 
      className="flex flex-col items-start p-6 rounded-lg border border-chimelo-lightgray/20 bg-white hover:shadow-md transition-shadow group"
    >
      <div className="p-3 rounded-full bg-chimelo-black/5 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-chimelo-silver transition-colors">{title}</h3>
      <p className="text-chimelo-silver">{description}</p>
    </Link>
  );
};

const AreasAtuacao: React.FC = () => {
  const areas = [
    {
      icon: <Shield className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Empresarial",
      description: "Assessoria jurídica especializada para empresas de todos os portes e segmentos.",
      link: "/areas-de-atuacao/direito-empresarial"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Trabalhista",
      description: "Soluções jurídicas preventivas e resolutivas para questões trabalhistas.",
      link: "/areas-de-atuacao/direito-trabalhista"
    },
    {
      icon: <FileText className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Tributário",
      description: "Planejamento tributário e representação em processos administrativos e judiciais.",
      link: "/areas-de-atuacao/direito-tributario"
    },
    {
      icon: <Users className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Civil",
      description: "Assessoria jurídica em contratos, responsabilidade civil e direito de família.",
      link: "/areas-de-atuacao/direito-civil"
    },
    {
      icon: <Book className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Contratual",
      description: "Elaboração, análise e negociação de contratos comerciais e civis.",
      link: "/areas-de-atuacao/direito-contratual"
    },
    {
      icon: <Search className="h-6 w-6 text-chimelo-black" />,
      title: "Consultoria Jurídica",
      description: "Consultoria jurídica personalizada para demandas específicas.",
      link: "/areas-de-atuacao/consultoria-juridica"
    }
  ];

  return (
    <section className="chimelo-section bg-gray-50">
      <div className="chimelo-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Áreas de Atuação</h2>
          <p className="text-chimelo-silver max-w-2xl mx-auto">
            Contamos com profissionais especializados em diversas áreas do direito para atender às necessidades específicas de cada cliente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <AreaCard
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
              link={area.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasAtuacao;
