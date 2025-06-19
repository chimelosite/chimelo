import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Scale, Building, Users } from "lucide-react";

const AreasAtuacaoPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen areas-de-atuacao-page">
      <Header />
      <main className="flex-grow">
        <section className="chimelo-section bg-chimelo-lightgray py-12">
          <div className="chimelo-container">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl mb-3">
                Áreas de Atuação e Serviços
              </h2>
              <p className="text-chimelo-gray max-w-2xl mx-auto">
                Contamos com profissionais especializados em diversas áreas do
                direito para atender às necessidades específicas de cada cliente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Área 1: Governança e Gestão Estratégica */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 mr-2 text-chimelo-black" />
                  <h3 className="text-xl font-semibold text-chimelo-black">
                    Governança e Gestão Estratégica
                  </h3>
                </div>
                <p className="text-chimelo-gray">
                  Atuação focada na sustentabilidade e expansão dos negócios,
                  oferecendo soluções para aprimorar a gestão e garantir o
                  cumprimento das normas.
                </p>
              </div>

              {/* Área 2: Resolução de Conflitos */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Scale className="h-6 w-6 mr-2 text-chimelo-black" />
                  <h3 className="text-xl font-semibold text-chimelo-black">
                    Resolução de Conflitos
                  </h3>
                </div>
                <p className="text-chimelo-gray">
                  Soluções ágeis e vantajosas para disputas empresariais,
                  buscando sempre a melhor estratégia para proteger os
                  interesses de nossos clientes.
                </p>
              </div>

              {/* Área 3: Reestruturação e Recuperação */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 mr-2 text-chimelo-black" />
                  <h3 className="text-xl font-semibold text-chimelo-black">
                    Reestruturação e Recuperação
                  </h3>
                </div>
                <p className="text-chimelo-gray">
                  Assessoria completa para empresas, credores e investidores,
                  visando a reestruturação financeira e a recuperação judicial.
                </p>
              </div>

              {/* Área 4: Direito Societário e M&A */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 mr-2 text-chimelo-black" />
                  <h3 className="text-xl font-semibold text-chimelo-black">
                    Direito Societário e M&A
                  </h3>
                </div>
                <p className="text-chimelo-gray">
                  Segurança e eficiência para operações societárias, fusões e
                  aquisições, garantindo o sucesso de seus negócios.
                </p>
              </div>

              {/* Área 5: Direito Tributário */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Scale className="h-6 w-6 mr-2 text-chimelo-black" />
                  <h3 className="text-xl font-semibold text-chimelo-black">
                    Direito Tributário
                  </h3>
                </div>
                <p className="text-chimelo-gray">
                  Planejamento tributário estratégico, consultoria e
                  contencioso fiscal para otimizar a carga tributária de sua
                  empresa.
                </p>
              </div>

              {/* Área 6: Direito Civil e Contratos */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 mr-2 text-chimelo-black" />
                  <h3 className="text-xl font-semibold text-chimelo-black">
                    Direito Civil e Contratos
                  </h3>
                </div>
                <p className="text-chimelo-gray">
                  Elaboração e análise de contratos, responsabilidade civil e
                  demais questões do direito civil para garantir a segurança
                  jurídica de suas relações.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AreasAtuacaoPage;
