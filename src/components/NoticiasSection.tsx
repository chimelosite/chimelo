
import React from "react";
import { ArrowRight, FileText, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NoticiasSection: React.FC = () => {
  const destaqueCards = [
    {
      id: "publicacoes",
      titulo: "Publicações",
      resumo: "Artigos especializados, análises jurídicas e comentários sobre legislação empresarial e recuperação judicial.",
      icone: FileText,
      link: "/destaques?section=publicacoes"
    },
    {
      id: "associacoes", 
      titulo: "Associações",
      resumo: "Parcerias estratégicas e participação ativa em organizações do setor jurídico e empresarial.",
      icone: Users,
      link: "/destaques?section=associacoes"
    },
    {
      id: "cases",
      titulo: "Cases",
      resumo: "Cases de sucesso em recuperação judicial, reestruturação empresarial e precedentes jurisprudenciais.",
      icone: Briefcase,
      link: "/destaques?section=cases"
    }
  ];

  return (
    <section className="chimelo-section bg-gray-50">
      <div className="chimelo-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Destaques</h2>
          <p className="text-chimelo-silver text-lg max-w-2xl mx-auto">
            Conheça nosso trabalho através de publicações especializadas, 
            parcerias estratégicas e cases de sucesso que transformaram o cenário jurídico empresarial
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {destaqueCards.map((card) => {
            const IconComponent = card.icone;
            
            return (
              <Link
                key={card.id}
                to={card.link}
                className="group block"
              >
                <div className="bg-white rounded-lg border border-chimelo-lightgray/30 hover:shadow-lg transition-all duration-300 h-full p-6 group-hover:bg-gray-50">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-chimelo-black group-hover:bg-chimelo-silver transition-colors mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-chimelo-black group-hover:text-chimelo-silver transition-colors">
                      {card.titulo}
                    </h3>
                  </div>
                  
                  <p className="text-chimelo-silver text-sm leading-relaxed mb-4 line-clamp-3">
                    {card.resumo}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-chimelo-black group-hover:text-chimelo-silver transition-colors">
                    Explorar {card.titulo.toLowerCase()}
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild className="chimelo-btn chimelo-btn-primary px-8 py-3 text-base">
            <Link to="/destaques">
              Ver Todos os Destaques <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;
