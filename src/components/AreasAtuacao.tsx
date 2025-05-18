
import React from "react";
import { Shield, Scale, Building, Users, Book, Briefcase, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

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
      title: "Governança e Gestão Estratégica",
      description: "Atuação focada na sustentabilidade, segurança jurídica e expansão dos negócios.",
      link: "/areas-de-atuacao"
    },
    {
      icon: <Scale className="h-6 w-6 text-chimelo-black" />,
      title: "Resolução de Conflitos",
      description: "Soluções ágeis e vantajosas para disputas empresariais.",
      link: "/areas-de-atuacao"
    },
    {
      icon: <Building className="h-6 w-6 text-chimelo-black" />,
      title: "Reestruturação e Recuperação",
      description: "Assessoria completa para empresas, credores e investidores.",
      link: "/areas-de-atuacao"
    },
    {
      icon: <Users className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Societário e M&A",
      description: "Segurança e eficiência para operações societárias.",
      link: "/areas-de-atuacao"
    },
    {
      icon: <Book className="h-6 w-6 text-chimelo-black" />,
      title: "Planejamento Patrimonial",
      description: "Preservação de patrimônio e continuidade dos negócios.",
      link: "/areas-de-atuacao"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Trabalhista Estratégico",
      description: "Atuação preventiva e gestão de passivos trabalhistas.",
      link: "/areas-de-atuacao"
    }
  ];

  return (
    <section className="chimelo-section bg-gray-50">
      <div className="chimelo-container">
        <div className="text-center mb-12" style={{ marginTop: '30px' }}>
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
