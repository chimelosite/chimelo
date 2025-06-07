import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const QuemSomosSection: React.FC = () => {
  return <section className="chimelo-section bg-chimelo-lightgray py-[43px]">
      <div className="chimelo-container">
        <div className="text-center mb-12">
          
        </div>

        

        <div className="text-center mt-12">
          <Button asChild className="chimelo-btn chimelo-btn-primary">
            <Link to="/quem-somos">
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <p className="text-chimelo-gray mt-8 text-left my-[33px] px-0">
          Estamos prontos para ser a sua parceria estratégica em questões jurídicas.
        </p>
      </div>
    </section>;
};
export default QuemSomosSection;