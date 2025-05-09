
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Briefcase, FileText, Users, Book, Search, MessageSquare, Scale, Globe, Building, CreditCard, AlertTriangle } from "lucide-react";

interface AreaDetalhadaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  servicos: string[];
  casos: string[];
}

const AreaDetalhada: React.FC<AreaDetalhadaProps> = ({ icon, title, description, servicos, casos }) => {
  return (
    <div className="border border-chimelo-lightgray/20 rounded-lg overflow-hidden bg-white p-6 mb-8">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-chimelo-black/5 mr-4">
          {icon}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <p className="mb-6 text-chimelo-silver">{description}</p>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Serviços Oferecidos</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {servicos.map((servico, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 text-chimelo-silver">•</div>
              <span>{servico}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">Casos Relevantes</h3>
        <ul className="space-y-2">
          {casos.map((caso, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 text-chimelo-silver">•</div>
              <span>{caso}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AreasAtuacaoPage: React.FC = () => {
  const areasDetalhadas: AreaDetalhadaProps[] = [
    {
      icon: <Shield className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Empresarial",
      description: "Assessoria jurídica especializada para empresas de todos os portes e segmentos, com foco em soluções jurídicas estratégicas para o desenvolvimento sustentável dos negócios.",
      servicos: [
        "Constituição e dissolução de sociedades",
        "Elaboração e revisão de contratos empresariais",
        "Reorganização societária",
        "Fusões e aquisições (M&A)",
        "Governança corporativa",
        "Due diligence",
        "Recuperação judicial e falência",
        "Arbitragem comercial"
      ],
      casos: [
        "Assessoria em fusão de duas grandes empresas do setor de tecnologia, com valor de transação superior a R$ 500 milhões",
        "Reestruturação societária de grupo empresarial familiar com mais de 15 empresas, visando otimização tributária e sucessão empresarial",
        "Elaboração de acordo de acionistas para empresa de capital aberto, estabelecendo regras claras de governança e transição de gestão"
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Trabalhista",
      description: "Soluções jurídicas preventivas e resolutivas para questões trabalhistas, visando minimizar riscos e garantir o cumprimento da legislação trabalhista.",
      servicos: [
        "Consultoria preventiva em relações de trabalho",
        "Elaboração de contratos de trabalho e políticas internas",
        "Negociações coletivas e acordos sindicais",
        "Defesa em processos trabalhistas individuais e coletivos",
        "Auditorias trabalhistas (due diligence)",
        "Terceirização e contratos de prestação de serviços",
        "Planos de demissão voluntária",
        "Compliance trabalhista"
      ],
      casos: [
        "Negociação de acordo coletivo para empresa do setor industrial com mais de 2.000 funcionários, evitando greve iminente",
        "Defesa em ação civil pública movida pelo Ministério Público do Trabalho relacionada a condições de trabalho, com êxito na redução de 90% do valor pleiteado",
        "Implementação de programa de compliance trabalhista para multinacional, adequando políticas internas à legislação brasileira"
      ]
    },
    {
      icon: <FileText className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Tributário",
      description: "Planejamento tributário e representação em processos administrativos e judiciais, com foco na redução da carga tributária e na resolução de contenciosos fiscais.",
      servicos: [
        "Planejamento tributário estratégico",
        "Consultoria em tributos diretos e indiretos",
        "Recuperação de créditos tributários",
        "Defesa em processos administrativos fiscais",
        "Contencioso tributário judicial",
        "Reorganização societária com enfoque tributário",
        "Análise de benefícios fiscais",
        "Consultoria em tributação internacional"
      ],
      casos: [
        "Obtenção de economia tributária de aproximadamente R$ 15 milhões através de planejamento tributário para grupo empresarial do setor de varejo",
        "Êxito em processo administrativo fiscal, com cancelamento de autuação de R$ 30 milhões relacionada a ICMS",
        "Recuperação de créditos tributários no valor de R$ 8 milhões para empresa do setor industrial"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Civil",
      description: "Assessoria jurídica em contratos, responsabilidade civil e direito de família, com foco na proteção dos interesses dos clientes em questões civis.",
      servicos: [
        "Elaboração e revisão de contratos civis",
        "Ações de responsabilidade civil",
        "Direito de família e sucessões",
        "Planejamento sucessório",
        "Inventários e partilhas",
        "Ações de cobrança e execução",
        "Direito imobiliário",
        "Mediação e conciliação"
      ],
      casos: [
        "Estruturação de planejamento sucessório para família com patrimônio estimado em R$ 100 milhões, incluindo empresas e bens imóveis",
        "Êxito em ação de indenização por danos morais e materiais contra grande instituição financeira, com condenação superior a R$ 500 mil",
        "Mediação em conflito familiar relacionado à sucessão empresarial, evitando litígio judicial e preservando a continuidade do negócio"
      ]
    },
    {
      icon: <Book className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Contratual",
      description: "Elaboração, análise e negociação de contratos comerciais e civis, com foco na segurança jurídica e na prevenção de litígios.",
      servicos: [
        "Elaboração de contratos comerciais nacionais e internacionais",
        "Revisão e adequação de contratos existentes",
        "Negociação de cláusulas contratuais",
        "Contratos de franquia e representação comercial",
        "Contratos de licenciamento e transferência de tecnologia",
        "Contratos de distribuição e fornecimento",
        "Contratos imobiliários",
        "Resolução de disputas contratuais"
      ],
      casos: [
        "Estruturação de contrato de joint venture entre empresa brasileira e multinacional europeia para exploração de novo mercado",
        "Negociação de contrato de distribuição exclusiva para empresa do setor farmacêutico, com operações em toda América Latina",
        "Revisão completa da política de contratos de grande varejista, reduzindo em 40% o índice de litígios contratuais"
      ]
    },
    {
      icon: <Search className="h-6 w-6 text-chimelo-black" />,
      title: "Consultoria Jurídica",
      description: "Consultoria jurídica personalizada para demandas específicas, com foco na identificação de riscos e oportunidades jurídicas para os negócios dos clientes.",
      servicos: [
        "Diagnóstico jurídico empresarial",
        "Gestão de riscos legais",
        "Assessoria jurídica para startups",
        "Compliance e governança corporativa",
        "Consultoria em proteção de dados (LGPD)",
        "Mediação de conflitos empresariais",
        "Pareceres jurídicos especializados",
        "Treinamentos e capacitações jurídicas"
      ],
      casos: [
        "Implementação de programa de compliance para empresa do setor financeiro, em conformidade com exigências regulatórias nacionais e internacionais",
        "Consultoria para adequação de startup à Lei Geral de Proteção de Dados, com revisão completa de políticas e processos",
        "Elaboração de parecer jurídico complexo sobre questão tributária inovadora, servindo como base para decisão estratégica de multinacional"
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Digital",
      description: "Assessoria jurídica especializada em questões relacionadas ao ambiente digital, com foco na proteção de dados e na segurança jurídica das operações online.",
      servicos: [
        "Adequação à Lei Geral de Proteção de Dados (LGPD)",
        "Elaboração de termos de uso e políticas de privacidade",
        "Consultoria em comércio eletrônico",
        "Contratos de tecnologia e licenciamento de software",
        "Proteção de ativos digitais",
        "Registro de domínios e nomes de sites",
        "Crimes cibernéticos",
        "Direito do consumidor digital"
      ],
      casos: [
        "Assessoria completa para implementação de LGPD em empresa do setor de saúde, incluindo mapeamento de dados e elaboração de relatório de impacto",
        "Defesa exitosa em ação relacionada a suposto vazamento de dados, com reconhecimento da adequação das medidas de segurança adotadas pelo cliente",
        "Estruturação jurídica para marketplace digital com operações em múltiplos países da América Latina"
      ]
    },
    {
      icon: <Scale className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Regulatório",
      description: "Assessoria especializada para navegação no complexo ambiente regulatório brasileiro, com foco na conformidade e na interação com órgãos reguladores.",
      servicos: [
        "Consultoria em regulação setorial",
        "Representação perante agências reguladoras",
        "Obtenção de licenças e autorizações",
        "Defesa em processos administrativos",
        "Análise de impacto regulatório",
        "Estudos de viabilidade regulatória",
        "Acompanhamento legislativo",
        "Compliance regulatório"
      ],
      casos: [
        "Obtenção de licença para operação de empresa do setor financeiro junto ao Banco Central, com superação de complexos requisitos regulatórios",
        "Defesa em processo sancionador da ANEEL, com redução da penalidade em 80% do valor inicialmente aplicado",
        "Estruturação de operação inovadora no setor de saúde, navegando pelo complexo ambiente regulatório da ANS e ANVISA"
      ]
    },
    {
      icon: <Globe className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Internacional",
      description: "Assessoria jurídica para operações e negócios internacionais, com foco na segurança jurídica em um ambiente global e multicultural.",
      servicos: [
        "Contratos internacionais",
        "Investimento estrangeiro no Brasil",
        "Investimento brasileiro no exterior",
        "Acordos de comércio internacional",
        "Arbitragem internacional",
        "Due diligence internacional",
        "Imigração empresarial",
        "Consultoria em tratados internacionais"
      ],
      casos: [
        "Assessoria jurídica completa para entrada de multinacional europeia no mercado brasileiro, incluindo estruturação societária e conformidade regulatória",
        "Negociação de contrato internacional de fornecimento para grande exportador brasileiro, com cláusulas de proteção cambial e resolução de disputas",
        "Representação em arbitragem internacional com sede em Paris, relacionada a contrato de joint venture, com resultado favorável ao cliente brasileiro"
      ]
    },
    {
      icon: <Building className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Imobiliário",
      description: "Consultoria especializada em operações imobiliárias comerciais e residenciais, com foco na segurança jurídica das transações e no desenvolvimento de projetos.",
      servicos: [
        "Análise e auditoria de imóveis (due diligence)",
        "Estruturação de operações imobiliárias",
        "Contratos de compra e venda",
        "Locações comerciais",
        "Incorporações imobiliárias",
        "Regularização fundiária",
        "Aprovação de projetos junto a órgãos públicos",
        "Litígios imobiliários"
      ],
      casos: [
        "Estruturação jurídica para desenvolvimento de complexo multiuso em área central de grande metrópole, com solução para questões urbanísticas complexas",
        "Due diligence para aquisição de portfólio de imóveis avaliado em R$ 200 milhões, identificando e solucionando questões que poderiam impactar a operação",
        "Defesa exitosa em litígio relacionado a grande empreendimento comercial, evitando paralisação das obras e prejuízos estimados em R$ 50 milhões"
      ]
    },
    {
      icon: <CreditCard className="h-6 w-6 text-chimelo-black" />,
      title: "Direito Bancário e Financeiro",
      description: "Assessoria jurídica especializada para instituições financeiras e empresas em operações bancárias e do mercado de capitais.",
      servicos: [
        "Estruturação de operações financeiras",
        "Emissão de títulos e valores mobiliários",
        "Financiamentos estruturados",
        "Project finance",
        "Securitização de recebíveis",
        "Reestruturação de dívidas",
        "Contencioso bancário",
        "Consultoria regulatória para instituições financeiras"
      ],
      casos: [
        "Estruturação jurídica de operação de securitização de recebíveis imobiliários no valor de R$ 150 milhões para empresa do setor de construção civil",
        "Assessoria em emissão de debêntures para financiamento de expansão de indústria, no valor de R$ 300 milhões",
        "Reestruturação de dívidas corporativas de grupo empresarial, envolvendo múltiplas instituições financeiras e dívida superior a R$ 500 milhões"
      ]
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-chimelo-black" />,
      title: "Contencioso Estratégico",
      description: "Representação em litígios complexos, com definição estratégica e condução processual especializada para defesa dos interesses dos clientes.",
      servicos: [
        "Litígios empresariais complexos",
        "Disputas societárias",
        "Ações coletivas",
        "Recuperação de créditos",
        "Disputas contratuais de grande valor",
        "Medidas cautelares e de urgência",
        "Recursos aos tribunais superiores",
        "Arbitragem doméstica e internacional"
      ],
      casos: [
        "Vitória em disputa societária envolvendo controle de empresa avaliada em R$ 1 bilhão, após 5 anos de litígio em múltiplas instâncias",
        "Defesa exitosa em ação coletiva de consumo com potencial impacto financeiro superior a R$ 200 milhões",
        "Obtenção de decisão favorável em tribunal superior em caso paradigmático sobre tributação, com impacto para todo o setor econômico"
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="chimelo-section bg-gray-50">
          <div className="chimelo-container">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Áreas de Atuação & Serviços</h1>
              <p className="text-chimelo-silver max-w-2xl mx-auto">
                O escritório Chimelo Advogados & Associados oferece soluções jurídicas integradas 
                nas mais diversas áreas do direito, sempre com foco nas necessidades específicas 
                de cada cliente e na busca pelos melhores resultados.
              </p>
            </div>
            
            <div className="space-y-8">
              {areasDetalhadas.map((area, index) => (
                <AreaDetalhada
                  key={index}
                  icon={area.icon}
                  title={area.title}
                  description={area.description}
                  servicos={area.servicos}
                  casos={area.casos}
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

export default AreasAtuacaoPage;
