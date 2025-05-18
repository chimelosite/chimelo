
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, ArrowLeft, Tag, FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const NoticiaDetalhe: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Database of news articles (in a real app, this would come from an API or database)
  const noticias = [
    {
      id: "1",
      titulo: "STF confirma suspensão de leis que proíbem linguagem neutra em dois municípios",
      resumo: "O Plenário do Supremo Tribunal Federal (STF) referendou liminares concedidas pelo ministro Alexandre de Moraes que suspenderam leis municipais que proibiam o uso da linguagem neutra em documentos oficiais. A decisão reforça a proteção à liberdade de expressão e à inclusão linguística.",
      conteudo: `
        <p>O Plenário do Supremo Tribunal Federal (STF) referendou liminares concedidas pelo ministro Alexandre de Moraes que suspenderam leis municipais que proibiam o uso da linguagem neutra em documentos oficiais. A decisão reforça a proteção à liberdade de expressão e à inclusão linguística.</p>
        
        <p>As leis suspensas foram aprovadas pelos municípios de Rondônia e São Paulo, e proibiam expressamente o uso de linguagem neutra em escolas, órgãos públicos e editais de concursos.</p>
        
        <p>Na decisão, o ministro Alexandre de Moraes destacou que tais proibições ferem princípios constitucionais fundamentais como a liberdade de expressão e o direito à educação inclusiva. O relator também observou que normas sobre diretrizes e bases da educação nacional são de competência privativa da União, não cabendo aos municípios legislar sobre o tema.</p>
        
        <p>Com a confirmação pelo plenário, as leis permanecem suspensas até o julgamento final da ação. A decisão foi recebida como uma vitória importante por grupos defensores da inclusão linguística e da diversidade na educação.</p>
      `,
      data: "11 de maio de 2025",
      autor: "Equipe Jurídica",
      imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      categoria: "Jurisprudência",
      tags: ["STF", "Linguagem Neutra", "Direitos Fundamentais"],
      slug: "stf-confirma-suspensao-leis-linguagem-neutra",
      fonte: "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=515220&ori=1",
      pdfUrl: "#" // Placeholder for PDF URL
    },
    {
      id: "2",
      titulo: "STF suspende lei que prorrogou desoneração da folha até 2027",
      resumo: "O ministro Cristiano Zanin observou que a lei não considerou o impacto financeiro da prorrogação dos benefícios fiscais. A decisão do STF impacta diretamente a gestão fiscal e tributária das empresas no país.",
      conteudo: `
        <p>Em decisão recente, o Supremo Tribunal Federal (STF), por meio de liminar concedida pelo ministro Cristiano Zanin, suspendeu a lei que prorrogava a desoneração da folha de pagamento para 17 setores da economia até 2027.</p>
        
        <p>Na análise preliminar, o ministro Zanin destacou que a aprovação da lei não levou em consideração o impacto orçamentário que a medida causaria para as contas públicas, o que contraria disposições constitucionais sobre responsabilidade fiscal.</p>
        
        <p>A lei suspensa previa a manutenção do benefício tributário que permite às empresas substituir a contribuição previdenciária de 20% sobre a folha de pagamento por alíquotas que variam de 1% a 4,5% sobre a receita bruta.</p>
        
        <p>A decisão tem impacto direto no planejamento financeiro e tributário das empresas dos setores beneficiados, que incluem áreas como tecnologia da informação, construção civil, transporte, comunicação e têxtil, entre outros.</p>
      `,
      data: "09 de maio de 2025",
      autor: "Equipe Jurídica",
      imagem: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
      categoria: "Direito Tributário",
      tags: ["STF", "Desoneração", "Tributação", "Empresas"],
      slug: "stf-suspende-lei-desoneracao-folha-2027",
      fonte: "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=534157&ori=1",
      pdfUrl: "#" // Placeholder for PDF URL
    },
    {
      id: "4",
      titulo: "Nova decisão do STF impacta tributação de operações internacionais",
      resumo: "O Supremo Tribunal Federal emitiu nova decisão que altera significativamente a tributação de operações internacionais. Entenda os impactos.",
      conteudo: `
        <p>Em julgamento concluído na última semana, o Supremo Tribunal Federal (STF) estabeleceu novo entendimento sobre a tributação de operações internacionais que promete impactar significativamente empresas com atuação global.</p>
        
        <h3>A decisão e seu contexto</h3>
        <p>Por maioria de votos (8x3), o STF determinou novos parâmetros para a aplicação do conceito de "estabelecimento permanente" para fins tributários, alterando o entendimento que vinha sendo aplicado pela Receita Federal nas últimas décadas. Esta decisão afeta diretamente a tributação de royalties, serviços técnicos e administrativos prestados por empresas estrangeiras no Brasil.</p>
        
        <h3>Principais impactos para empresas</h3>
        <p>Grupos multinacionais precisarão revisar suas estruturas de planejamento tributário internacional, especialmente aqueles com operações envolvendo transferência de tecnologia, serviços técnicos e estruturas de compartilhamento de custos entre subsidiárias.</p>
        
        <h3>Retrospecto do caso</h3>
        <p>A decisão resulta de um processo iniciado em 2018, quando uma multinacional do setor de tecnologia questionou autuações fiscais baseadas na interpretação anterior. O julgamento estabelece um novo marco interpretativo dos tratados para evitar dupla tributação firmados pelo Brasil.</p>
        
        <h3>Recomendações</h3>
        <p>Recomendamos que empresas com operações internacionais realizem um diagnóstico imediato de suas estruturas para identificar possíveis exposições fiscais e oportunidades de adequação ao novo cenário. Nosso escritório dispõe de equipe especializada em direito tributário internacional para auxiliar neste processo.</p>
      `,
      data: "10 de abril de 2025",
      autor: "Dr. André Oliveira",
      imagem: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2080&auto=format&fit=crop",
      categoria: "Direito Tributário",
      tags: ["STF", "Tributação Internacional", "Jurisprudência", "Planejamento"],
      slug: "nova-decisao-stf-tributacao-internacional",
      fonte: "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=534157&ori=1",
      pdfUrl: "#" // Placeholder for PDF URL
    },
    {
      id: "5",
      titulo: "Atualização sobre o novo marco legal das startups",
      resumo: "O novo marco legal das startups completa seu primeiro ano com importantes resultados e ainda muitos desafios. Confira nossa análise.",
      conteudo: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.</p>",
      data: "01 de abril de 2025",
      autor: "Dra. Mariana Santos",
      imagem: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      categoria: "Direito Empresarial",
      tags: ["Startups", "Marco Legal", "Inovação", "Legislação"],
      slug: "atualizacao-marco-legal-startups",
      pdfUrl: "#" // Placeholder for PDF URL
    },
    {
      id: "6",
      titulo: "Mudanças na legislação de proteção de dados corporativos",
      resumo: "Novas regulamentações da ANPD trazem mudanças significativas para o tratamento de dados corporativos. Saiba como se adequar.",
      conteudo: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.</p>",
      data: "20 de março de 2025",
      autor: "Dra. Patrícia Lima",
      imagem: "https://images.unsplash.com/photo-1631624215749-b10b3dd7f47c?q=80&w=2070&auto=format&fit=crop",
      categoria: "Direito Digital",
      tags: ["LGPD", "ANPD", "Proteção de Dados", "Compliance"],
      slug: "mudancas-legislacao-protecao-dados-corporativos",
      pdfUrl: "#" // Placeholder for PDF URL
    },
    {
      id: "7",
      titulo: "Como estruturar contratos internacionais no novo cenário global",
      resumo: "O cenário global de comércio está em transformação. Aprenda como estruturar contratos internacionais seguros neste novo contexto.",
      conteudo: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.</p>",
      data: "15 de março de 2025",
      autor: "Dr. André Oliveira",
      imagem: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      categoria: "Contratos",
      tags: ["Contratos Internacionais", "Comércio Exterior", "Segurança Jurídica", "Negócios Globais"],
      slug: "estruturar-contratos-internacionais-novo-cenario-global",
      pdfUrl: "#" // Placeholder for PDF URL
    },
    {
      id: "8",
      titulo: "Novos precedentes do TST sobre trabalho remoto",
      resumo: "O Tribunal Superior do Trabalho definiu novos precedentes importantes sobre o trabalho remoto. Veja como eles impactam empregadores e empregados.",
      conteudo: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.</p>",
      data: "05 de março de 2025",
      autor: "Dra. Mariana Santos",
      imagem: "https://images.unsplash.com/photo-1584384798892-fbada21e514c?q=80&w=2070&auto=format&fit=crop",
      categoria: "Direito Trabalhista",
      tags: ["TST", "Trabalho Remoto", "Home Office", "Jurisprudência"],
      slug: "novos-precedentes-tst-trabalho-remoto",
      pdfUrl: "#" // Placeholder for PDF URL
    },
    {
      id: "9",
      titulo: "Chimelo Advogados promove webinar sobre governança corporativa",
      resumo: "Nosso escritório realizará webinar gratuito sobre as melhores práticas de governança corporativa para empresas de todos os portes.",
      conteudo: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.</p>",
      data: "01 de março de 2025",
      autor: "Assessoria de Comunicação",
      imagem: "https://images.unsplash.com/photo-1519335337423-a3357c2cd364?q=80&w=2070&auto=format&fit=crop",
      categoria: "Institucional",
      tags: ["Webinar", "Governança", "Compliance", "Capacitação"],
      slug: "chimelo-webinar-governanca-corporativa",
      pdfUrl: "#" // Placeholder for PDF URL
    }
  ];

  // Find the news article with the matching slug
  const noticia = noticias.find((n) => n.slug === slug);

  // Redirect if article not found
  useEffect(() => {
    if (!noticia) {
      navigate("/destaques");
    }
  }, [noticia, navigate]);

  if (!noticia) {
    return null; // Will redirect in useEffect
  }

  const handleDownloadPDF = () => {
    // In a real implementation, this would initiate the actual download
    // For now, we're just showing the feature UI
    console.log(`Downloading PDF for: ${noticia.titulo}`);
    // A proper implementation would use window.open(noticia.pdfUrl) or similar
  };

  return (
    <div className="flex flex-col min-h-screen destaques-page">
      <Header />
      <main className="flex-grow">
        <article className="chimelo-section bg-gray-50">
          <div className="chimelo-container">
            {/* Back button */}
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/destaques")}
                className="flex items-center text-chimelo-black hover:text-chimelo-silver"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para destaques
              </Button>
            </div>
            
            {/* Article header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{noticia.titulo}</h1>
              <div className="flex items-center text-sm text-chimelo-silver mb-6">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{noticia.data}</span>
                <span className="mx-2">•</span>
                <span>{noticia.autor}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {noticia.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-3 py-1 bg-chimelo-black/5 text-chimelo-silver rounded-full flex items-center"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Featured image */}
            {noticia.imagem && (
              <div className="rounded-lg overflow-hidden mb-8">
                <img 
                  src={noticia.imagem} 
                  alt={noticia.titulo}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            
            {/* Article content */}
            <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-sm">
              <div dangerouslySetInnerHTML={{ __html: noticia.conteudo }} />
              
              {/* Source link */}
              {noticia.fonte && (
                <div className="mt-8 pt-4 border-t border-gray-200">
                  <a 
                    href={noticia.fonte} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-chimelo-black hover:text-chimelo-silver inline-flex items-center"
                  >
                    <span>Fonte original: Portal STF</span>
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              )}
              
              {/* PDF Download Button */}
              <div className="mt-6 pt-4">
                <Button 
                  onClick={handleDownloadPDF}
                  className="flex items-center gap-2 bg-chimelo-black hover:bg-chimelo-black/80"
                >
                  <FileText className="h-4 w-4" />
                  <span>Baixar PDF do documento</span>
                  <Download className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NoticiaDetalhe;
