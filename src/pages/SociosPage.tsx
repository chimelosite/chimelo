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
      descricao: "É diretora do IBAJUD, membro do TMA Brasil (Turnaround Management Association) e do IDRE (Instituto de Direito da Reestruturação Empresarial), além de fundadora do CMR – Centro de Mulheres na Reestruturação Empresarial. Nessas instituições, lidera iniciativas de impacto técnico e institucional. Sua atuação é constantemente reconhecida por rankings como Leaders League, Legal 500 e Análise Advocacia 500, além de sua presença ativa em eventos de grande repercussão nacional.\n\nGabriele atua em diversos setores da economia, com destaque para agronegócio, infraestrutura, imobiliário, hospitalar, vestuário, alimentação, comércio, bancário, postos de combustíveis, seguradoras, tecnologia, indústria (automotiva, metalúrgica, alimentícia), educação, transportes, meio ambiente e serviços regulados. É especialista em real estate (inclusive em operações de venda de ativos), LGPD e compliance, além de atuar fortemente na gestão reputacional empresarial e em questões trabalhistas de alta complexidade.\n\nPossui profundo conhecimento contábil e expertise na análise gerencial das empresas, conduzindo seu trabalho a partir de diagnósticos sólidos, pareceres técnicos e cenários jurídicos fundamentados. Tem papel ativo na liderança de conselhos de governança, que enxerga como centro decisório legítimo da empresa em crise ou transformação. Sua atuação é concentrada nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo e Mato Grosso.\n\nÉ autora de artigos em veículos especializados, coautora de obras coletivas sobre insolvência e professora da ESPM-Sul, onde compartilha sua experiência em gestão de crises e governança empresarial. Organizou e liderou diversos eventos técnicos voltados a fundos, FIDCs, securitizadoras e ao setor de moda.\n\nEntre os casos de grande repercussão em sua trajetória estão empresas como DHB Componentes Automotivos, Serki Fundações, Sultepa, Sul Catarinense, Ensino Metodista, GBOEX, Bela Gula, Leão Engenharia, Sanem Engenharia, Cargill e Top Safe, entre outros. Também se destacou na construção do precedente do STJ que autorizou a Emofesa, em recuperação judicial, a manter contratos com o poder público — marco importante no cenário nacional.\n\nCom inteligência tática e força na execução, lidera uma equipe altamente qualificada, com atuação integrada em análise de risco, estruturação jurídica e governança. Seu foco absoluto em resultados, aliado à inovação e à entrega de valor real, consolidou sua posição como uma das principais lideranças no campo empresarial.",
      especializacoes: [],
      formacao: [],
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
