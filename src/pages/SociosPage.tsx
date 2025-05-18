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
    cargo: "Sócia",
    descricao: "Sócia-fundadora e Diretora Geral da CB2D Administração Judicial e da Chimelo Advogados & Associados, Gabriele Chimelo é um dos nomes mais destacados do país na área de insolvência empresarial, com forte atuação em reestruturação de empresas, distressed M&A, governança corporativa, regimes regulatórios e estratégias jurídicas de alta complexidade.\n\nCom mais de 20 anos de experiência, construiu uma carreira sólida liderando soluções jurídicas em cenários críticos. Por 14 anos, integrou a liderança da tradicional banca Scalzilli Althaus Chimelo e Spohr, contribuindo decisivamente para o desenvolvimento de áreas sensíveis do Direito Empresarial. Em 2025, decide assumir a marca Chimelo — em homenagem ao avô paterno, empresário de destaque no comércio regional do Centro-Oeste — consolidando sua identidade de atuação.\n\nÉ diretora do IBAJUD, membro do TMA Brasil (Turnaround Management Association) e do IDRE (Instituto de Direito da Reestruturação Empresarial), além de fundadora do CMR – Centro de Mulheres na Reestruturação Empresarial. Nessas instituições, lidera iniciativas de impacto técnico e institucional. Sua atuação é constantemente reconhecida por rankings como Leaders League, Legal 500 e Análise Advocacia 500, além de sua presença ativa em eventos de grande repercussão nacional.\n\nGabriele atua em diversos setores da economia, com destaque para agronegócio, infraestrutura, imobiliário, hospitalar, vestuário, alimentação, comércio, bancário, postos de combustíveis, seguradoras, tecnologia, indústria (automotiva, metalúrgica, alimentícia), educação, transportes, meio ambiente e serviços regulados. É especialista em real estate (inclusive em operações de venda de ativos), LGPD e compliance, além de atuar fortemente na gestão reputacional empresarial e em questões trabalhistas de alta complexidade.\n\nPossui profundo conhecimento contábil e expertise na análise gerencial das empresas, conduzindo seu trabalho a partir de diagnósticos sólidos, pareceres técnicos e cenários jurídicos fundamentados. Tem papel ativo na liderança de conselhos de governança, que enxerga como centro decisório legítimo da empresa em crise ou transformação. Sua atuação é concentrada nos estados do Rio Grande do Sul, Paraná, Santa Catarina, São Paulo e Mato Grosso.\n\nÉ autora de artigos em veículos especializados, coautora de obras coletivas sobre insolvência e professora da ESPM-Sul, onde compartilha sua experiência em gestão de crises e governança empresarial. Organizou e liderou diversos eventos técnicos voltados a fundos, FIDCs, securitizadoras e ao setor de moda.\n\nEntre os casos de grande repercussão em sua trajetória estão empresas como DHB Componentes Automotivos, Serki Fundações, Sultepa, Sul Catarinense, Ensino Metodista, GBOEX, Bela Gula, Leão Engenharia, Sanem Engenharia, Cargill e Top Safe, entre outros. Também se destacou na construção do precedente do STJ que autorizou a Emofesa, em recuperação judicial, a manter contratos com o poder público — marco importante no cenário nacional.\n\nCom inteligência tática e força na execução, lidera uma equipe altamente qualificada, com atuação integrada em análise de risco, estruturação jurídica e governança. Seu foco absoluto em resultados, aliado à inovação e à entrega de valor real, consolidou sua posição como uma das principais lideranças no campo empresarial.",
    especializacoes: [],
    formacao: [],
    imagem: "https://i.imgur.com/jBmxcTd.png"
  }, {
    nome: "Conrado Dall'Igna",
    cargo: "Sócio",
    descricao: "",
    especializacoes: [],
    formacao: [],
    imagem: "https://i.imgur.com/t43ksK9.png"
  }, {
    nome: "Tiago Luz",
    cargo: "Sócio",
    descricao: "",
    especializacoes: [],
    formacao: [],
    imagem: "https://i.imgur.com/DPS2rJN.png"
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
          
          <div className="relative py-16 md:py-[39px]">
            <div className="chimelo-container">
              <div className="max-w-3xl mx-auto mb-12 text-center" style={{
              marginTop: '15px'
            }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Nossos Sócios</h1>
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
                      <img src={socios[selectedSocio].imagem} alt={socios[selectedSocio].nome} className="w-full h-full object-center object-scale-down" />
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