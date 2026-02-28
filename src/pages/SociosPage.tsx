import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface MembroProps {
  nome: string;
  cargo: string;
  descricao: string;
  especializacoes: string[];
  formacao: string[];
  imagem: string;
}

const SociosPage: React.FC = () => {
  const [selectedMembro, setSelectedMembro] = useState<number>(0);
  const [expandedMembro, setExpandedMembro] = useState<number | null>(null);
  
  const membrosTime: MembroProps[] = [
    {
      nome: "Gabriele Chimelo",
      cargo: "Sócia Fundadora e Diretora Institucional",
      descricao: "Sócia-fundadora e Diretora Geral da CB2D Administração Judicial e Sócia Fundadora da Chimelo Advogados & Associados\n\nGabriele Chimelo é uma das principais referências nacionais na área de insolvência empresarial, com atuação destacada em reestruturação de empresas, distressed M&A, governança corporativa, regimes regulatórios e estratégias jurídicas de alta complexidade. É sócia-fundadora e Diretora Geral da CB2D Administração Judicial e da banca Chimelo Advogados & Associados.\n\nCom mais de 20 anos de experiência, construiu uma carreira sólida liderando soluções jurídicas em cenários críticos. Por 14 anos, integrou a liderança da área de Falências e Recuperações Judiciais da Scalzilli Althaus Chimelo e Spohr, tendo papel decisivo no desenvolvimento de áreas estratégicas do Direito Empresarial. Em 2025, assumiu a marca Chimelo — uma homenagem ao avô materno, agropecuarista de destaque no Sul e Centro-Oeste do país — consolidando sua identidade profissional.\n\nÉ diretora do Instituto Brasileiro de Insolvência (IBAJUD), membro do Turnaround Management Association Brasil (TMA Brasil) e do Instituto de Direito da Reestruturação Empresarial (IDRE), além de fundadora do CMR – Centro de Mulheres na Reestruturação Empresarial. Também foi fundadora e Vice-Presidente da Comissão de Falências e Recuperações Judiciais da OAB/RS, liderando iniciativas de impacto técnico e institucional.\n\nReconhecida por rankings especializados como Leaders League, Legal 500 e Análise Advocacia 500, Gabriele participa ativamente de eventos jurídicos de relevância nacional. Sua experiência abrange diversos setores da economia, como agronegócio, infraestrutura, mercado imobiliário, saúde, moda, alimentação, energia, serviços regulados, indústria, educação, tecnologia, transportes, seguros e sistema financeiro.\n\nEspecialista também em real estate, LGPD e compliance, alia profundo conhecimento contábil à análise gerencial das empresas, oferecendo diagnósticos precisos, pareceres técnicos e cenários jurídicos fundamentados. Atua de forma ativa em conselhos de governança, que considera centros legítimos de decisão nas empresas em crise ou em transformação.\n\nSua atuação concentra-se nos estados do RS, PR, SC, SP e MT. É autora de artigos em veículos especializados, coautora de obras coletivas sobre insolvência e professora da ESPM-Sul, onde compartilha sua experiência em gestão de crises e governança empresarial. Também organiza e lidera eventos técnicos voltados a fundos, FIDCs, securitizadoras e setores específicos como o da moda.\n\nEntre os casos de maior repercussão sob sua condução estão: DHB Componentes Automotivos, Serki Fundações, Sultepa, Igreja Metodista, GBOEX, Bela Gula, Leão Engenharia, Sanem Engenharia, Cargill e Top Safe. Destaca-se ainda sua atuação no precedente do STJ que autorizou a Emofesa, em recuperação judicial, a manter contratos com o poder público — marco importante no cenário jurídico nacional.\n\nCom inteligência tática, foco em resultados e força na execução, lidera uma equipe altamente qualificada, integrando análise de risco, estruturação jurídica e governança com inovação e entrega de valor real.",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/b24KOuZ.png"
    },
    {
      nome: "Marco Ronconi",
      cargo: "CEO e Diretor Executivo",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/c1u2nYj.png"
    },
    {
      nome: "Leandro Chimelo",
      cargo: "Sócio e Diretor Jurídico",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/WqYu9V2.png"
    },
//   {
//      nome: "Conrado Dall'Igna",
//      cargo: "Sócio e Membro do Conselho",
//      descricao: "Conrado Dall´Igna é Advogado e Administrador Judicial com 21 anos de experiência em processos de reestruturação empresarial, falências e recuperações judiciais, com atuação em casos de grande relevância no cenário nacional.\n\nFormado em Direito pela PUC/RS, é especializado em Falência e Recuperação de Empresas pela FGV, com formação complementar em Administração Judicial pelo INSPER e pelo TMA Brasil.\n\nAtua ativamente na comunidade jurídica como membro da Comissão Especial de Falências e Recuperações Judiciais da OAB/RS, do Instituto Brasileiro da Insolvência (IBAJUD) e do Turnaround Management Association do Brasil (TMA Brasil).",
//      especializacoes: [],
//      formacao: [],
//      imagem: "https://imgur.com/Niry2yb.png"
//    },  
    {
      nome: "Claudine Rotta",
      cargo: "Head de Expansão e Novos Negócios",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/dPTGEAq.png"
    },
    {
      nome: "Rodrigo Zanettini",
      cargo: "Conselheiro de Relações Internacionais",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/bwESv7h.png"
    },
    {
      nome: "Liliana Ferreira",
      cargo: "Compliance Officer e Controladoria Jurídica",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/HtEj9WW.png"
    },
    {
      nome: "Tiago Jaskulski Luz",
      cargo: "Advogado Sênior",
      descricao: "",
    // "Com mais de 15 anos de experiência em reestruturação empresarial e gestão de crises, Tiago Jaskulski Luz atua como Advogado e Administrador Judicial. Reconhecido por sua abordagem técnica e estratégica, possui sólida expertise na identificação de problemas, definição de soluções e implementação de mudanças voltadas à recuperação e ao crescimento de empresas.\n\nTem atuação em casos relevantes nos Estados do Rio Grande do Sul, Santa Catarina e Paraná.\n\nÉ Especialista em Direito Empresarial, Direito Tributário e Processo Civil, é membro ativo de entidades relevantes do setor, como o TMA Brasil (Turnaround Management Association), o IBAJUD (Instituto Brasileiro de Administração Judicial) e a Comissão de Recuperações Judiciais e Falências da OAB/RS.",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/wXgcX07.png"
    },
    {
      nome: "Henrique Volcato",
      cargo: "Advogado de Reestruturação Empresarial",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/JpukxtH.png"
    },
    {
      nome: "Felipe Bernandoni",
      cargo: "Head Contábil e Financeiro",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/JTPiots.png"
    },
    {
      nome: "Vitor Schleintvein",
      cargo: "Assessor Financeiro",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/7OZpmfO.png"
    },
    {
      nome: "Érika Fontes",
      cargo: "Assessora Contábil e Financeira",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/GYgE3dp.png"
    },
    {
      nome: "Igor Povarczuk",
      cargo: "Contábil e Fiscal",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/wFpI2Rr.png"
    },
    {
      nome: "Leonardo Baziloni",
      cargo: "Fiscal e Contencioso",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/6CGcbYA.png"
    },
    {
      nome: "Lucas Scher",
      cargo: "Advogado Tributarista",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/2kSst85.png"
    },
    {
      nome: "Eduarda Boni",
      cargo: "Advogada Empresarial",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/w2ikr42.png"
    },
    {
      nome: "Kailene Somacal",
      cargo: "Assessora Jurídica",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/ZRoJyug.png"
    },
//   {
//      nome: "Viviane Silva",
//      cargo: "Assistente Administrativa",
//      descricao: "",
//      especializacoes: [],
//      formacao: [],
//      imagem: "https://imgur.com/jF5VHdb.png"
//    },
   {
      nome: "Janaína Alves",
      cargo: "Secretária",
      descricao: "",
      especializacoes: [],
      formacao: [],
      imagem: "https://imgur.com/o5k3HkS.png"
    },
//   {
//      nome: "Jenifer Silva",
//      cargo: "Auxiliar",
//      descricao: "",
//      especializacoes: [],
//      formacao: [],
//      imagem: "https://imgur.com/VAM6eRs.png"
//    }
  ];

  // Function to split the description into paragraphs
  const formatDescription = (description: string) => {
    return description.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
    ));
  };

  // Function to handle mobile biography expansion
  const handleBiographyClick = (index: number) => {
    setExpandedMembro(expandedMembro === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen destaques-page">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-chimelo-black text-white">
          <div 
            className="absolute inset-0 opacity-35 bg-cover bg-center" 
            style={{
              backgroundImage: 'url("/lovable-uploads/27570706-51c0-4d07-a428-af2be4221322.png")',
              backgroundBlendMode: 'overlay'
            }}
          />
          
          <div className="relative py-16 md:py-[29px]">
            <div className="chimelo-container">
              <div className="max-w-3xl mx-auto mb-12 text-center" style={{ marginTop: '15px' }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Nosso Time</h1>
                <p className="text-lg text-chimelo-silver max-w-2xl mx-auto">
                  Conheça os profissionais que lideram o escritório Chimelo Advogados & Associados, 
                  com extensa formação acadêmica e vasta experiência nas mais diversas áreas do direito.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200 py-[11px]">
          <div className="chimelo-container">
            <nav className="flex text-sm">
              <Link to="/" className="text-chimelo-silver hover:text-chimelo-black">Home</Link>
              <span className="mx-2 text-chimelo-silver">/</span>
              <span className="text-chimelo-black font-medium">Nosso Time</span>
            </nav>
          </div>
        </div>

        <section className="chimelo-section bg-gray-50">
          <div className="chimelo-container">
            {/* Desktop View */}
            <div className="hidden lg:flex gap-8">
              <div className="w-1/3 space-y-6 sticky top-8 self-start">
                {membrosTime.map((membro, index) => (
                  <Card 
                    key={index}
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md",
                      selectedMembro === index ? "border-chimelo-black ring-1 ring-chimelo-black" : "border-transparent"
                    )}
                    onClick={() => setSelectedMembro(index)}
                  >
                    <CardContent className="p-4 flex items-center gap-4 py-px">
                      <Avatar className="h-16 w-16 border border-chimelo-lightgray/20">
                        <AvatarImage src={membro.imagem} alt={membro.nome} className="object-cover" />
                        <AvatarFallback>{membro.nome.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg">{membro.nome}</h3>
                        <p className="text-chimelo-silver">{membro.cargo}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="w-2/3">
                <Card className="overflow-hidden bg-white">
                  <div className="aspect-[3/2] overflow-hidden bg-gray-100 border-b">
                    <AspectRatio ratio={3/2} className="bg-gray-100">
                      <img 
                        src={membrosTime[selectedMembro].imagem} 
                        alt={membrosTime[selectedMembro].nome}
                        className="w-full h-full object-center object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-1">{membrosTime[selectedMembro].nome}</h2>
                    <p className="text-chimelo-silver text-xl mb-6">{membrosTime[selectedMembro].cargo}</p>
                    
                    {membrosTime[selectedMembro].descricao && (
                      <div className="prose prose-lg max-w-none">
                        {formatDescription(membrosTime[selectedMembro].descricao)}
                      </div>
                    )}
                    
                    {membrosTime[selectedMembro].especializacoes.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-3">Áreas de Especialização</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {membrosTime[selectedMembro].especializacoes.map((esp, index) => (
                            <li key={index}>{esp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {membrosTime[selectedMembro].formacao.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-3">Formação Acadêmica</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {membrosTime[selectedMembro].formacao.map((form, index) => (
                            <li key={index}>{form}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Mobile View with expanded biography functionality */}
            <div className="lg:hidden space-y-8">
              {membrosTime.map((membro, index) => (
                <Card key={index} className="overflow-hidden bg-white">
                  <div className="aspect-square overflow-hidden bg-gray-100 border-b">
                    <img 
                      src={membro.imagem} 
                      alt={membro.nome}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-1">{membro.nome}</h2>
                    <p className="text-chimelo-silver mb-4">{membro.cargo}</p>
                    
                    {membro.descricao && (
                      <div className="prose max-w-none mb-4">
                        {expandedMembro === index 
                          ? formatDescription(membro.descricao)
                          : membro.descricao 
                            ? formatDescription(membro.descricao.split('\n\n')[0])
                            : null
                        }
                      </div>
                    )}
                    
                    {membro.descricao && (
                      <button 
                        onClick={() => handleBiographyClick(index)}
                        className="text-chimelo-black font-medium hover:underline"
                      >
                        {expandedMembro === index ? "Ocultar biografia" : "Ler biografia completa"}
                      </button>
                    )}
                    
                    {expandedMembro === index && membro.especializacoes.length > 0 && (
                      <div className="mt-6">
                        <h3 className="font-semibold mb-2">Áreas de Especialização</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {membro.especializacoes.map((esp, espIndex) => (
                            <li key={espIndex} className="text-sm">{esp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {expandedMembro === index && membro.formacao.length > 0 && (
                      <div className="mt-6">
                        <h3 className="font-semibold mb-2">Formação Acadêmica</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {membro.formacao.map((form, formIndex) => (
                            <li key={formIndex} className="text-sm">{form}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
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
