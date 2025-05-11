import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const QuemSomosSection: React.FC = () => {
  return <section className="chimelo-section">
      <div className="chimelo-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              QUEM SOMOS
            </h2>
            <div className="space-y-4">
              <p className="text-lg">
                Somos um escritório de advocacia especializado em soluções jurídicas 
                integradas para empresas.
              </p>
              <p>
                Com mais de 20 anos de experiência, conduzimos demandas complexas com 
                expertise técnica e inovação, garantindo segurança e eficiência jurídica.
              </p>
              <p>
                Nossa equipe é formada por profissionais altamente qualificados, com 
                especialização em diversas áreas do direito, prontos para oferecer um 
                atendimento personalizado e de excelência.
              </p>
            </div>
            <Button asChild className="chimelo-btn chimelo-btn-primary mt-6">
              <Link to="/quem-somos">
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <img alt="Chimelo Advogados - Quem Somos" className="w-full h-auto rounded-lg shadow-lg object-fill" src="https://imgur.com/3Oy29Nq" />
          </div>
        </div>
      </div>
    </section>;
};
export default QuemSomosSection;