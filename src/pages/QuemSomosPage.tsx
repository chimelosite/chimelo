
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const QuemSomosPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen quem-somos-page">
      <Header />
      <main className="flex-grow">
        <section className="chimelo-section bg-white">
          <div className="chimelo-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Coluna da Esquerda - O ESCRITÓRIO */}
              <div className="py-[50px] lg:py-[100px]">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-chimelo-black">
                  O ESCRITÓRIO
                </h1>
                <div className="space-y-6 text-chimelo-gray leading-relaxed" style={{ fontSize: '16px' }}>
                  <p>
                    A <strong>Chimelo Advogados & Associados</strong> é uma banca jurídica constituída em 2025, que reúne profissionais com sólida trajetória em mais de duas décadas de experiência na área de insolvência empresarial participando de expressivos cases regionais e nacionais. A sociedade é liderada pela Advogada e CEO <strong>Gabriele Chimelo</strong>, reconhecida nacionalmente por sua destacada atuação em reestruturação de empresas, Distressed, M&A, Governança Corporativa, regimes regulatórios e estratégias jurídicas de alta complexidade.
                  </p>
                  <p>
                    O escritório se destaca por sua abordagem multidisciplinar e estratégica na condução de processos de recuperação judicial, falência e reestruturação extrajudicial, alinhando expertise jurídica, contábil e de gestão empresarial. Atua com emissão de pareceres técnicos, diagnósticos gerenciais e jurídicos aprofundados, com foco na viabilidade e sustentabilidade empresarial.
                  </p>
                  <p>
                    Também possui atuação direta em conselhos de governança, especialmente em contextos de crise, entendendo esses espaços como fóruns legítimos e eficazes para a reconstrução da tomada de decisão. O escritório é membro do <strong>TMA Brasil</strong> (Turnaround Management Association) e do <strong>IDRE</strong> - Instituto de Direito da Reestruturação Empresarial. Com atuação nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo e Mato Grosso, mantém presença regional consolidada. O escritório atua na organização e condução de eventos técnicos voltados a investidores institucionais, FIDCs, securitizadoras e setores específicos como o da moda, promovendo o debate qualificado no campo da reestruturação empresarial.
                  </p>
                  <p>
                    <strong>Gabriele</strong> também é Diretora Geral da <strong>CB2D Administração Judicial</strong> e possui relevante inserção institucional sendo Diretora do <strong>Instituto Brasileiro de Insolvência (IBAJUD)</strong>, foi Diretora e uma das fundadoras do <strong>Centro de Mulheres na Reestruturação Empresarial (CMR)</strong>, além de fundadora e Vice-Presidente da <strong>Comissão de Falências e Recuperações Judiciais da OAB/RS</strong>, atuando na formulação de políticas institucionais e técnicas no âmbito da insolvência.
                  </p>
                </div>
              </div>

              {/* Coluna da Direita - Propósito, Missão, Visão e Valores */}
              <div className="py-[50px] lg:py-[100px]">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-chimelo-black mb-4">NOSSO PROPÓSITO</h2>
                    <p className="text-chimelo-gray leading-relaxed" style={{ fontSize: '16px' }}>
                      Nosso propósito é oferecer soluções ágeis e simplificar processos para empresas que buscam um olhar estratégico e diferenciado sobre seus negócios. Destacamo-nos na condução de situações especiais, atuando com excelência em fusões e aquisições, recuperações judiciais e extrajudiciais, operações estruturadas, questões societárias, estratégias trabalhistas, projetos imobiliários e demandas fiscais complexas. Nosso compromisso é transformar desafios em oportunidades, sempre com precisão, inovação e visão de mercado.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-chimelo-black mb-4">NOSSA MISSÃO</h2>
                    <p className="text-chimelo-gray leading-relaxed" style={{ fontSize: '16px' }}>
                      Garantir segurança jurídica e eficiência para empresários, com atuação especializada e inovadora.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-chimelo-black mb-4">NOSSA VISÃO</h2>
                    <p className="text-chimelo-gray leading-relaxed" style={{ fontSize: '16px' }}>
                      Ser referência em soluções jurídicas que impulsionam negócios, garantindo segurança, solidez e crescimento sustentável.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-chimelo-black mb-4">NOSSOS VALORES</h2>
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
