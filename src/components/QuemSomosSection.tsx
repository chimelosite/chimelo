import React from "react";
import { ArrowRight, Users, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const QuemSomosSection: React.FC = () => {
  return <section className="chimelo-section bg-white">
      <div className="chimelo-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-chimelo-black mb-4">
            Quem Somos
          </h2>
          <p className="text-lg text-chimelo-silver max-w-3xl mx-auto" style={{
          fontSize: '16px'
        }}>
            Somos um escritório de advocacia especializado em soluções jurídicas integradas para empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-chimelo-black mb-6">
              Nossa Experiência
            </h3>
            <p className="text-chimelo-gray mb-6 leading-relaxed" style={{
            fontSize: '16px'
          }}>
              Com mais de 20 anos de experiência, o escritório Chimelo Advogados & Associados construiu uma reputação sólida baseada na excelência jurídica e no atendimento personalizado aos seus clientes.
            </p>
            <p className="text-chimelo-gray mb-6 leading-relaxed">
              Nosso compromisso é oferecer soluções personalizadas e eficazes, sempre alinhadas às necessidades de cada cliente.
            </p>
            <Button asChild className="chimelo-btn chimelo-btn-primary">
              <Link to="/quem-somos">
                Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div>
            <img alt="Quem Somos" className="rounded-lg shadow-md" src="https://i.imgur.com/3Oy29Nq.png" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 text-blue-500 mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold text-chimelo-black mb-2">
              Equipe Qualificada
            </h4>
            <p className="text-chimelo-gray">
              Profissionais experientes e especializados em diversas áreas do direito empresarial.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-100 text-green-500 mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold text-chimelo-black mb-2">
              Reconhecimento
            </h4>
            <p className="text-chimelo-gray">
              Reconhecidos pela excelência e compromisso com a satisfação dos nossos clientes.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-red-100 text-red-500 mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold text-chimelo-black mb-2">
              Foco no Cliente
            </h4>
            <p className="text-chimelo-gray">
              Atendimento personalizado e soluções sob medida para as necessidades de cada empresa.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-yellow-100 text-yellow-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-6 w-6"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            <h4 className="text-xl font-semibold text-chimelo-black mb-2">
              Disponibilidade
            </h4>
            <p className="text-chimelo-gray">
              Atendimento rápido e eficiente, sempre que você precisar.
            </p>
          </div>
        </div>

        <p className="text-center text-chimelo-gray mt-8">
          Estamos prontos para ser a sua parceria estratégica em questões jurídicas.
        </p>
      </div>
    </section>;
};
export default QuemSomosSection;