
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const QuemSomosPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="chimelo-section">
          <div className="chimelo-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  QUEM SOMOS
                </h1>
                <div className="space-y-4">
                  <p className="text-lg">
                    Fundado em 1998, o escritório Chimelo Advogados & Associados construiu uma reputação sólida baseada na 
                    excelência jurídica e no atendimento personalizado aos seus clientes.
                  </p>
                  <p>
                    Nossa equipe é formada por profissionais com sólida formação acadêmica e vasta experiência prática, 
                    comprometidos com a entrega de soluções jurídicas eficientes e inovadoras para nossos clientes.
                  </p>
                  <p>
                    Ao longo de mais de duas décadas de atuação, desenvolvemos expertise técnica em diversas áreas do direito, 
                    com foco especial em direito empresarial, trabalhista e tributário.
                  </p>
                  <p>
                    Nossa missão é proporcionar segurança jurídica por meio de um atendimento personalizado e eficiente, 
                    contribuindo para o sucesso e desenvolvimento dos nossos clientes.
                  </p>
                  <p>
                    Valorizamos a construção de relacionamentos duradouros baseados na transparência, respeito e confiança mútua.
                  </p>
                  <p>
                    Contamos com infraestrutura moderna e tecnologia de ponta para garantir agilidade e eficiência na 
                    prestação dos nossos serviços, sempre com o compromisso de excelência que nos caracteriza.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="/public/lovable-uploads/232b9587-bb1e-4927-b3f8-40cac72602b6.png" 
                  alt="Chimelo Advogados - Quem Somos" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuemSomosPage;
