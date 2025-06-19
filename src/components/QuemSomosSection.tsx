import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const QuemSomosSection: React.FC = () => {
  return <section className="chimelo-section bg-chimelo-lightgray py-[43px]">
      <div className="chimelo-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-chimelo-black">
            O ESCRITÓRIO
          </h2>
          <div className="space-y-6 text-chimelo-gray leading-relaxed" style={{
          fontSize: '16px'
        }}>
            <p>
              A <strong>Chimelo Advogados & Associados</strong> é uma banca jurídica constituída em 2025, que reúne profissionais com sólida trajetória em mais de duas décadas de experiência na área de insolvência empresarial participando de expressivos cases regionais e nacionais. A sociedade é liderada pela Advogada e CEO <strong>Gabriele Chimelo</strong>, reconhecida nacionalmente por sua destacada atuação em reestruturação de empresas, Distressed, M&A, Governança Corporativa, regimes regulatórios e estratégias jurídicas de alta complexidade.
            </p>
            <p>
              O escritório se destaca por sua abordagem multidisciplinar e estratégica na condução de processos de recuperação judicial, falência e reestruturação extrajudicial, alinhando expertise jurídica, contábil e de gestão empresarial. Atua com emissão de pareceres técnicos, diagnósticos gerenciais e jurídicos aprofundados, com foco na viabilidade e sustentabilidade empresarial.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="chimelo-btn chimelo-btn-primary">
            <Link to="/quem-somos">
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <p className="text-chimelo-gray mt-8 my-[33px] px-0 text-center">
          Estamos prontos para ser a sua parceria estratégica em questões jurídicas.
        </p>
      </div>
    </section>;
};
export default QuemSomosSection;