
import React from "react";
import { Shield, Scale, Building, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface AreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const AreaCard: React.FC<AreaProps> = ({
  icon,
  title,
  description,
  link
}) => {
  return (
    <Link to={link} className="block h-full">
      <Card className="h-full transition-all hover:shadow-md border-chimelo-lightgray/20 bg-white">
        <CardContent className="p-6 flex flex-col h-full bg-chimelo-lightgray">
          <div className="p-3 rounded-full bg-gray-50 mb-4 w-fit">
            {icon}
          </div>
          <h3 className="text-xl mb-2 group-hover:text-chimelo-silver transition-colors">{title}</h3>
          <p className="text-chimelo-silver text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const AreasAtuacao: React.FC = () => {
  const navigate = useNavigate();

  const handleVerTodasAreasClick = () => {
    navigate("/areas-de-atuacao");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  // Apresentar apenas as 4 áreas principais na home
  const featuredAreas = [
    {
      icon: <Shield className="h-6 w-6 text-chimelo-black" />,
      title: "Governança e Gestão Estratégica",
      description: "Atuação focada na sustentabilidade e expansão dos negócios.",
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
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-chimelo-silver">
      <div className="chimelo-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-3">Áreas de Atuação e Serviços</h2>
          <div className="flex justify-center items-center mb-4">
            <Separator className="w-16 bg-chimelo-silver/40 h-0.5" />
          </div>
          <p className="text-chimelo-silver max-w-2xl mx-auto">
            Contamos com profissionais especializados em diversas áreas do direito para atender às necessidades específicas de cada cliente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {featuredAreas.map((area, index) => (
            <AreaCard 
              key={index} 
              icon={area.icon} 
              title={area.title} 
              description={area.description} 
              link={area.link} 
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button 
            onClick={handleVerTodasAreasClick}
            variant="outline" 
            className="border-chimelo-silver text-chimelo-black hover:bg-chimelo-lightgray/10 px-6"
          >
            Conheça todas as nossas áreas de atuação e serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AreasAtuacao;
