import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const QuemSomosPage: React.FC = () => {
  return <div className="flex flex-col min-h-screen quem-somos-page">
      <Header />
      <main className="flex-grow">
        <section className="chimelo-section">
          <div className="chimelo-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="py-[49px]">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  QUEM SOMOS
                </h1>
                <div className="space-y-4">
                  <p className="text-lg">Com mais de 20 anos de experiência, o escritório Chimelo Advogados &amp; Associados construiu uma reputação sólida baseada na excelência jurídica e no atendimento personalizado aos seus clientes.</p>
                  <p>
                    Nossa equipe é formada por profissionais com sólida formação acadêmica e vasta experiência prática, 
                    comprometidos com a entrega de soluções jurídicas eficientes e inovadoras para nossos clientes.
                  </p>
                  <p>
                    Ao longo de mais de duas décadas de atuação, desenvolvemos expertise técnica em diversas áreas do direito, 
                    com foco especial em direito empresarial, trabalhista e tributário.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">NOSSO PROPÓSITO</h2>
                  <p>
                    Nosso propósito é oferecer soluções ágeis e simplificar processos para empresas que buscam um olhar estratégico e diferenciado sobre seus negócios.
                    Destacamo-nos na condução de situações especiais, atuando com excelência em fusões e aquisições, recuperações judiciais e extrajudiciais, operações estruturadas, questões societárias, estratégias trabalhistas, projetos imobiliários e demandas fiscais complexas. Nosso compromisso é transformar desafios em oportunidades, sempre com precisão, inovação e visão de mercado.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">NOSSA MISSÃO</h2>
                  <p>
                    Garantir segurança jurídica e eficiência para empresários, com atuação especializada e inovadora.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">NOSSA VISÃO</h2>
                  <p>
                    Ser referência em soluções jurídicas que impulsionam negócios, garantindo segurança, solidez e crescimento sustentável.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">NOSSOS VALORES</h2>
                  <ul className="space-y-2">
                    <li><strong>Expertise e Visão Abrangente:</strong> Atuamos de forma multidisciplinar, antecipando desafios e propondo soluções eficazes.</li>
                    <li><strong>Inovação e Sustentabilidade:</strong> Buscamos novas abordagens jurídicas para promover crescimento sólido e seguro.</li>
                    <li><strong>Compromisso com o Cliente:</strong> Oferecemos soluções personalizadas, alinhadas às necessidades e objetivos de cada empresa.</li>
                  </ul>
                </div>
              </div>
              <div>
                <img alt="Chimelo Advogados - Quem Somos" className="w-full h-auto rounded-lg shadow-lg" src="https://i.imgur.com/3Oy29Nq.png" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default QuemSomosPage;