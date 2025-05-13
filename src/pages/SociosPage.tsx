
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface SocioProps {
  nome: string;
  cargo: string;
  descricao: string;
  especializacoes: string[];
  formacao: string[];
  imagem: string;
}

const Socio: React.FC<SocioProps> = ({ nome, cargo, descricao, especializacoes, formacao, imagem }) => {
  return (
    <div className="border border-chimelo-lightgray/20 rounded-lg overflow-hidden bg-white">
      <div className="aspect-square overflow-hidden">
        <img 
          src={imagem} 
          alt={nome} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{nome}</h3>
        <p className="text-chimelo-silver mb-4">{cargo}</p>
        <p className="mb-4">{descricao}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Áreas de Especialização</h4>
          <ul className="list-disc pl-5 space-y-1">
            {especializacoes.map((esp, index) => (
              <li key={index} className="text-sm">{esp}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Formação Acadêmica</h4>
          <ul className="list-disc pl-5 space-y-1">
            {formacao.map((form, index) => (
              <li key={index} className="text-sm">{form}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const SociosPage: React.FC = () => {
  const socios: SocioProps[] = [
    {
      nome: "Gabriele Chimelo",
      cargo: "Sócio Fundador",
      descricao: "Sócia-fundadora e Diretora Geral da CB2D Administração Judicial e da Chimelo Advogados & Associados, Gabriele Chimelo é um dos nomes mais destacados do país na área de insolvência empresarial, com forte atuação em reestruturação de empresas, distressed M&A, governança corporativa, regimes regulatórios e estratégias jurídicas de alta complexidade. Com mais de 20 anos de experiência, construiu uma carreira sólida liderando soluções jurídicas em cenários críticos. Por 14 anos, integrou a liderança da tradicional banca Scalzilli Althaus Chimelo e Spohr, contribuindo decisivamente para o desenvolvimento de áreas sensíveis do Direito Empresarial. Em 2025, decide assumir a marca Chimelo — em homenagem ao avô paterno, empresário de destaque no comércio regional do Centro-Oeste — consolidando sua identidade de atuação.",
      especializacoes: [
        "Direito Empresarial",
        "Direito Tributário",
        "Fusões e Aquisições",
        "Planejamento Societário",
        "Reestruturação de Empresas",
        "Insolvência Empresarial"
      ],
      formacao: [
        "Doutorado em Direito Tributário - Universidade de São Paulo (USP)",
        "Mestrado em Direito Empresarial - Pontifícia Universidade Católica (PUC)",
        "Especialização em Direito Internacional - Harvard Law School"
      ],
      imagem: "https://i.imgur.com/jBmxcTd.png"
    },
    {
      nome: "Conrado Dall'Igna",
      cargo: "Sócio Sênior",
      descricao: "Especialista em direito trabalhista e previdenciário, com vasta experiência na condução de processos complexos e negociações sindicais, atuando diretamente junto a empresas de grande porte.",
      especializacoes: [
        "Direito Trabalhista",
        "Direito Previdenciário",
        "Negociações Coletivas",
        "Compliance Trabalhista"
      ],
      formacao: [
        "Mestrado em Direito do Trabalho - Universidade de São Paulo (USP)",
        "Especialização em Compliance - Fundação Getúlio Vargas (FGV)",
        "Programa de Negociação Avançada - University of California"
      ],
      imagem: "https://i.imgur.com/t43ksK9.png"
    },
    {
      nome: "Tiago Luz",
      cargo: "Sócio",
      descricao: "Advogado especializado em direito civil e contratual, com expertise em resolução de conflitos complexos e elaboração de instrumentos jurídicos para operações nacionais e internacionais.",
      especializacoes: [
        "Direito Civil",
        "Direito Contratual",
        "Resolução de Disputas",
        "Contratos Internacionais"
      ],
      formacao: [
        "Mestrado em Direito Civil - Universidade de Coimbra",
        "Especialização em Arbitragem - Câmara de Comércio Internacional",
        "LLM em Contratos Internacionais - King's College London"
      ],
      imagem: "https://i.imgur.com/DPS2rJN.png"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="chimelo-section">
          <div className="chimelo-container">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Nossos Sócios</h1>
              <p className="text-chimelo-silver max-w-2xl mx-auto">
                Conheça os profissionais que lideram o escritório Chimelo Advogados & Associados, 
                com extensa formação acadêmica e vasta experiência nas mais diversas áreas do direito.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socios.map((socio, index) => (
                <Socio 
                  key={index}
                  nome={socio.nome}
                  cargo={socio.cargo}
                  descricao={socio.descricao}
                  especializacoes={socio.especializacoes}
                  formacao={socio.formacao}
                  imagem={socio.imagem}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SociosPage;
