
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const QuemSomosSection: React.FC = () => {
  return (
    <section className="chimelo-section bg-white">
      <div className="chimelo-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-chimelo-black mb-4">
            Para O Escritório
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-chimelo-black mb-4">
              NOSSO PROPÓSITO
            </h3>
            <p className="text-chimelo-gray leading-relaxed" style={{ fontSize: '16px' }}>
              Nosso propósito é oferecer soluções ágeis e simplificar processos para empresas que buscam um olhar estratégico e diferenciado sobre seus negócios. Destacamo-nos na condução de situações especiais, atuando com excelência em fusões e aquisições, recuperações judiciais e extrajudiciais, operações estruturadas, questões societárias, estratégias trabalhistas, projetos imobiliários e demandas fiscais complexas. Nosso compromisso é transformar desafios em oportunidades, sempre com precisão, inovação e visão de mercado.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-chimelo-black mb-4">
              NOSSA MISSÃO
            </h3>
            <p className="text-chimelo-gray leading-relaxed" style={{ fontSize: '16px' }}>
              Garantir segurança jurídica e eficiência para empresários, com atuação especializada e inovadora.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-chimelo-black mb-4">
              NOSSA VISÃO
            </h3>
            <p className="text-chimelo-gray leading-relaxed" style={{ fontSize: '16px' }}>
              Ser referência em soluções jurídicas que impulsionam negócios, garantindo segurança, solidez e crescimento sustentável.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-chimelo-black mb-4">
              NOSSOS VALORES
            </h3>
            <div className="space-y-4">
              <p className="text-chimelo-gray leading-relaxed" style={{ fontSize: '16px' }}>
                <strong>Expertise e Visão Abrangente:</strong> Atuamos de forma multidisciplinar, antecipando desafios e propondo soluções eficazes.
              </p>
              <p className="text-chimelo-gray leading-relaxed" style={{ fontSize: '16px' }}>
                <strong>Inovação e Sustentabilidade:</strong> Buscamos novas abordagens jurídicas para promover crescimento sólido e seguro.
              </p>
              <p className="text-chimelo-gray leading-relaxed" style={{ fontSize: '16px' }}>
                <strong>Compromisso com o Cliente:</strong> Oferecemos soluções personalizadas, alinhadas às necessidades e objetivos de cada empresa.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="chimelo-btn chimelo-btn-primary">
            <Link to="/quem-somos">
              Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <p className="text-center text-chimelo-gray mt-8">
          Estamos prontos para ser a sua parceria estratégica em questões jurídicas.
        </p>
      </div>
    </section>
  );
};

export default QuemSomosSection;
