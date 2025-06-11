import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
interface SocioProps {
  nome: string;
  cargo: string;
  descricao: string;
  especializacoes: string[];
  formacao: string[];
  imagem: string;
}
const SociosPage: React.FC = () => {
  const [selectedSocio, setSelectedSocio] = useState<number>(0);
  const [expandedSocio, setExpandedSocio] = useState<number | null>(null);
  const socios: SocioProps[] = [{
    nome: "Gabriele Chimelo",
    cargo: "Sócia-fundadora e Diretora Geral",
    descricao: "Sócia-fundadora e Diretora Geral da CB2D Administração Judicial e Sócia e CEO da Chimelo Advogados & Associados\n\nGabriele Chimelo é uma das principais referências nacionais na área de insolvência empresarial, com atuação destacada em reestruturação de empresas, distressed M&A, governança corporativa, regimes regulatórios e estratégias jurídicas de alta complexidade. É sócia-fundadora e Diretora Geral da CB2D Administração Judicial e da banca Chimelo Advogados & Associados.\n\nCom mais de 20 anos de experiência, construiu uma carreira sólida liderando soluções jurídicas em cenários críticos. Por 14 anos, integrou a liderança da área de Falências e Recuperações Judiciais da Scalzilli Althaus Chimelo e Spohr, tendo papel decisivo no desenvolvimento de áreas estratégicas do Direito Empresarial. Em 2025, assumiu a marca Chimelo — uma homenagem ao avô materno, agropecuarista de destaque no Sul e Centro-Oeste do país — consolidando sua identidade profissional.\n\nÉ diretora do Instituto Brasileiro de Insolvência (IBAJUD), membro do Turnaround Management Association Brasil (TMA Brasil) e do Instituto de Direito da Reestruturação Empresarial (IDRE), além de fundadora do CMR – Centro de Mulheres na Reestruturação Empresarial. Também foi fundadora e Vice-Presidente da Comissão de Falências e Recuperações Judiciais da OAB/RS, liderando iniciativas de impacto técnico e institucional.\n\nReconhecida por rankings especializados como Leaders League, Legal 500 e Análise Advocacia 500, Gabriele participa ativamente de eventos jurídicos de relevância nacional. Sua experiência abrange diversos setores da economia, como agronegócio, infraestrutura, mercado imobiliário, saúde, moda, alimentação, energia, serviços regulados, indústria, educação, tecnologia, transportes, seguros e sistema financeiro.\n\nEspecialista também em real estate, LGPD e compliance, alia profundo conhecimento contábil à análise gerencial das empresas, oferecendo diagnósticos precisos, pareceres técnicos e cenários jurídicos fundamentados. Atua de forma ativa em conselhos de governança, que considera centros legítimos de decisão nas empresas em crise ou em transformação.\n\nSua atuação concentra-se nos estados do RS, PR, SC, SP e MT. É autora de artigos em veículos especializados, coautora de obras coletivas sobre insolvência e professora da ESPM-Sul, onde compartilha sua experiência em gestão de crises e governança empresarial. Também organiza e lidera eventos técnicos voltados a fundos, FIDCs, securitizadoras e setores específicos como o da moda.\n\nEntre os casos de maior repercussão sob sua condução estão: DHB Componentes Automotivos, Serki Fundações, Sultepa, Igreja Metodista, GBOEX, Bela Gula, Leão Engenharia, Sanem Engenharia, Cargill e Top Safe. Destaca-se ainda sua atuação no precedente do STJ que autorizou a Emofesa, em recuperação judicial, a manter contratos com o poder público — marco importante no cenário jurídico nacional.\n\nCom inteligência tática, foco em resultados e força na execução, lidera uma equipe altamente qualificada, integrando análise de risco, estruturação jurídica e governança com inovação e entrega de valor real.",
    especializacoes: [],
    formacao: [],
    imagem: "https://imgur.com/2JVmdBr.png"
  }, {
    nome: "Conrado Dall'Igna",
    cargo: "Sócio",
    descricao: "Conrado Dall´Igna é Advogado e Administrador Judicial com 21 anos de experiência em processos de reestruturação empresarial, falências e recuperações judiciais, com atuação em casos de grande relevância no cenário nacional.\n\nFormado em Direito pela PUC/RS, é especializado em Falência e Recuperação de Empresas pela FGV, com formação complementar em Administração Judicial pelo INSPER e pelo TMA Brasil.\n\nAtua ativamente na comunidade jurídica como membro da Comissão Especial de Falências e Recuperações Judiciais da OAB/RS, do Instituto Brasileiro da Insolvência (IBAJUD) e do Turnaround Management Association do Brasil (TMA Brasil).",
    especializacoes: [],
    formacao: [],
    imagem: "https://i.imgur.com/t43ksK9.png"
  }, {
    nome: "Tiago Jaskulski Luz",
    cargo: "Sócio",
    descricao: "Com mais de 15 anos de experiência em reestruturação empresarial e gestão de crises, Tiago Jaskulski Luz atua como Advogado e Administrador Judicial. Reconhecido por sua abordagem técnica e estratégica, possui sólida expertise na identificação de problemas, definição de soluções e implementação de mudanças voltadas à recuperação e ao crescimento de empresas.\n\nTem atuação em casos relevantes nos Estados do Rio Grande do Sul, Santa Catarina e Paraná.\n\nÉ Especialista em Direito Empresarial, Direito Tributário e Processo Civil, é membro ativo de entidades relevantes do setor, como o TMA Brasil (Turnaround Management Association), o IBAJUD (Instituto Brasileiro de Administração Judicial) e a Comissão de Recuperações Judiciais e Falências da OAB/RS.",
    especializacoes: [],
    formacao: [],
    imagem: "https://imgur.com/lAMM2zr.png"
  }];

  // Function to split the description into paragraphs
  const formatDescription = (description: string) => {
    return description.split('\n\n').map((paragraph, index) => <p key={index} className="mb-4 last:mb-0">{paragraph}</p>);
  };

  // Function to handle mobile biography expansion
  const handleBiographyClick = (index: number) => {
    setExpandedSocio(expandedSocio === index ? null : index);
  };
  return <div className="flex flex-col min-h-screen socios-page">
      <Header />
      <main className="flex-grow bg-gray-50">
        <section className="relative bg-chimelo-black text-white">
          <div className="absolute inset-0 opacity-35 bg-cover bg-center" style={{
          backgroundImage: 'url("/lovable-uploads/27570706-51c0-4d07-a428-af2be4221322.png")',
          backgroundBlendMode: 'overlay'
        }} />
          
          <div className="relative py-16 md:py-[14px]">
            <div className="chimelo-container">
              <div className="max-w-3xl mx-auto mb-12 text-center" style={{
              marginTop: '15px'
            }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Nosso Time</h1>
                <p className="text-lg text-chimelo-silver max-w-2xl py-0 my-0 px-0 mx-0">
                  Conheça os profissionais que lideram o escritório Chimelo Advogados & Associados, 
                  com extensa formação acadêmica e vasta experiência nas mais diversas áreas do direito.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="chimelo-section">
          <div className="chimelo-container">
            {/* Desktop View */}
            <div className="hidden lg:flex gap-8">
              <div className="w-1/3 space-y-6 sticky top-8 self-start">
                {socios.map((socio, index) => <Card key={index} className={cn("cursor-pointer transition-all hover:shadow-md", selectedSocio === index ? "border-chimelo-black ring-1 ring-chimelo-black" : "border-transparent")} onClick={() => setSelectedSocio(index)}>
                    <CardContent className="p-4 flex items-center gap-4">
                      <Avatar className="h-16 w-16 border border-chimelo-lightgray/20">
                        <AvatarImage src={socio.imagem} alt={socio.nome} />
                        <AvatarFallback>{socio.nome.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg">{socio.nome}</h3>
                        <p className="text-chimelo-silver">{socio.cargo}</p>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
              
              <div className="w-2/3">
                <Card className="overflow-hidden bg-white">
                  {/* Updated aspect ratio with object-center instead of object-top */}
                  <div className="aspect-[3/2] overflow-hidden bg-gray-100 border-b">
                    <AspectRatio ratio={3 / 2} className="bg-gray-100">
                      <img src={socios[selectedSocio].imagem} alt={socios[selectedSocio].nome} className="w-full h-full object-center object-cover" />
                    </AspectRatio>
                  </div>
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-1">{socios[selectedSocio].nome}</h2>
                    <p className="text-chimelo-silver text-xl mb-6">{socios[selectedSocio].cargo}</p>
                    
                    {socios[selectedSocio].descricao && <div className="prose prose-lg max-w-none">
                        {formatDescription(socios[selectedSocio].descricao)}
                      </div>}
                    
                    {socios[selectedSocio].especializacoes.length > 0 && <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-3">Áreas de Especialização</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {socios[selectedSocio].especializacoes.map((esp, index) => <li key={index}>{esp}</li>)}
                        </ul>
                      </div>}
                    
                    {socios[selectedSocio].formacao.length > 0 && <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-3">Formação Acadêmica</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {socios[selectedSocio].formacao.map((form, index) => <li key={index}>{form}</li>)}
                        </ul>
                      </div>}
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Mobile View with expanded biography functionality */}
            <div className="lg:hidden space-y-8">
              {socios.map((socio, index) => <Card key={index} className="overflow-hidden bg-white">
                  <div className="aspect-square overflow-hidden bg-gray-100 border-b">
                    <img src={socio.imagem} alt={socio.nome} className="w-full h-full object-cover object-center" />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-1">{socio.nome}</h2>
                    <p className="text-chimelo-silver mb-4">{socio.cargo}</p>
                    
                    {/* Show full biography if expanded, otherwise only first paragraph */}
                    {socio.descricao && <div className="prose max-w-none mb-4">
                        {expandedSocio === index ? formatDescription(socio.descricao) : socio.descricao ? formatDescription(socio.descricao.split('\n\n')[0]) : null}
                      </div>}
                    
                    {socio.descricao && <button onClick={() => handleBiographyClick(index)} className="text-chimelo-black font-medium hover:underline">
                        {expandedSocio === index ? "Ocultar biografia" : "Ler biografia completa"}
                      </button>}
                    
                    {expandedSocio === index && socio.especializacoes.length > 0 && <div className="mt-6">
                        <h3 className="font-semibold mb-2">Áreas de Especialização</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {socio.especializacoes.map((esp, espIndex) => <li key={espIndex} className="text-sm">{esp}</li>)}
                        </ul>
                      </div>}
                    
                    {expandedSocio === index && socio.formacao.length > 0 && <div className="mt-6">
                        <h3 className="font-semibold mb-2">Formação Acadêmica</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {socio.formacao.map((form, formIndex) => <li key={formIndex} className="text-sm">{form}</li>)}
                        </ul>
                      </div>}
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default SociosPage;