
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const NoticiaDetalhe: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Database of news articles (in a real app, this would come from an API or database)
  const noticias = [
    {
      id: "1",
      titulo: "Novidades na legislação trabalhista em 2025",
      resumo: "Conheça as principais mudanças na legislação trabalhista que entrarão em vigor em 2025 e como elas afetam sua empresa.",
      conteudo: `
        <p>A legislação trabalhista brasileira passará por importantes atualizações em 2025, com o objetivo de modernizar as relações de trabalho e ajustar-se às novas realidades do mercado. Entre as principais mudanças, destacam-se:</p>
        
        <h3>Novas modalidades de contratação</h3>
        <p>O governo federal implementará uma nova categoria de contrato de trabalho híbrido, que regulamenta formalmente a divisão de horas entre trabalho presencial e remoto. Esta modalidade trará regras específicas para reembolso de despesas domésticas e estabelecerá limites claros para a jornada de trabalho.</p>
        
        <h3>Atualizações na legislação de benefícios</h3>
        <p>As regras para concessão e tributação de benefícios como vale-alimentação, vale-transporte e planos de saúde serão alteradas, com um novo sistema de cálculo que impacta diretamente a folha de pagamento das empresas.</p>
        
        <h3>Reformulação das normas de segurança e medicina do trabalho</h3>
        <p>As NRs (Normas Regulamentadoras) passarão por uma significativa atualização, com foco em trabalho remoto e uso de novas tecnologias. Empresas precisarão adaptar seus programas de segurança e saúde ocupacional.</p>
        
        <h3>Impactos para empresas</h3>
        <p>As organizações terão um prazo de adaptação de 90 dias após a publicação das normas. Recomendamos que as empresas iniciem o quanto antes o processo de revisão de seus contratos de trabalho e políticas internas para adequação à nova legislação.</p>
        
        <p>Nossa equipe está à disposição para auxiliar na transição e implementação destas mudanças, garantindo total conformidade legal e minimizando riscos trabalhistas.</p>
      `,
      data: "05 de maio de 2025",
      autor: "Dr. Ricardo Chimelo",
      imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      categoria: "Direito Trabalhista",
      tags: ["Legislação Trabalhista", "Reforma", "CLT", "Empresas"],
      slug: "novidades-legislacao-trabalhista-2025"
    },
    {
      id: "2",
      titulo: "Implicações jurídicas da inteligência artificial nos negócios",
      resumo: "A inteligência artificial está transformando o ambiente de negócios. Entenda as implicações jurídicas dessa revolução tecnológica para sua empresa.",
      conteudo: `
        <p>A ascensão da inteligência artificial (IA) está revolucionando os modelos de negócios em diversos setores, trazendo consigo um conjunto complexo de desafios jurídicos que empresas precisam enfrentar.</p>
        
        <h3>Propriedade intelectual e obras geradas por IA</h3>
        <p>Um dos debates mais intensos gira em torno da titularidade de obras criadas por sistemas de IA. Quem detém os direitos sobre uma música, texto ou imagem gerada por algoritmos? A legislação atual ainda não oferece respostas definitivas, criando insegurança jurídica para empresas que utilizam estas tecnologias.</p>
        
        <h3>Responsabilidade civil e tomada de decisão autônoma</h3>
        <p>À medida que sistemas de IA assumem funções decisórias em áreas sensíveis como contratação, concessão de crédito ou diagnósticos médicos, surgem questões complexas sobre responsabilização em caso de danos. Empresas precisam implementar sistemas robustos de governança de IA para mitigar riscos.</p>
        
        <h3>Proteção de dados e vieses algorítmicos</h3>
        <p>O treinamento de modelos de IA frequentemente depende de volumes massivos de dados pessoais, exigindo rigorosa conformidade com legislações como a LGPD. Além disso, algoritmos podem perpetuar ou amplificar vieses existentes, resultando em potenciais violações de direitos e danos reputacionais.</p>
        
        <h3>Recomendações para empresas</h3>
        <p>Recomendamos a implementação de estruturas de governança específicas para IA, incluindo comitês interdisciplinares de supervisão, auditorias regulares de algoritmos e políticas claras de uso responsável. A documentação detalhada dos processos de desenvolvimento e decisão de sistemas de IA será crucial para demonstrar conformidade regulatória.</p>
        
        <p>Nossa equipe especializada está preparada para auxiliar sua empresa a navegar por este novo cenário jurídico, garantindo inovação responsável e minimização de riscos legais.</p>
      `,
      data: "28 de abril de 2025",
      autor: "Dra. Patrícia Lima",
      imagem: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
      categoria: "Direito Digital",
      tags: ["Inteligência Artificial", "Tecnologia", "Inovação", "Regulação"],
      slug: "implicacoes-juridicas-ia-negocios"
    },
    {
      id: "3",
      titulo: "Chimelo Advogados participa de congresso internacional de direito empresarial",
      resumo: "Nosso escritório marcou presença no maior congresso internacional de direito empresarial, trazendo insights valiosos para nossos clientes.",
      conteudo: `
        <p>O escritório Chimelo Advogados e Associados participou do 18º Congresso Internacional de Direito Empresarial, realizado em Madri, Espanha, entre os dias 10 e 14 de abril de 2025. O evento reuniu mais de 3.000 profissionais de direito de 45 países para discutir as principais tendências e desafios jurídicos enfrentados por empresas no cenário global.</p>
        
        <h3>Participação em painéis de discussão</h3>
        <p>Dr. Ricardo Chimelo, sócio-fundador do escritório, foi convidado como palestrante no painel "Contratos Internacionais na Era Digital", onde apresentou estratégias inovadoras para elaboração de contratos em ambientes de negócios globalizados e digitais.</p>
        
        <h3>Temas de destaque do congresso</h3>
        <p>Entre os principais temas abordados no evento, destacaram-se a regulação de criptoativos, os novos modelos de tributação internacional pós-BEPS 2.0, compliance ESG e os impactos jurídicos da computação quântica nas estruturas de segurança corporativa.</p>
        
        <h3>Benefícios para nossos clientes</h3>
        <p>A participação da equipe Chimelo no congresso reforça nosso compromisso com a excelência e atualização constante em direito empresarial internacional. Os conhecimentos adquiridos serão compartilhados com nossos clientes através de uma série de webinars e materiais exclusivos que serão disponibilizados nas próximas semanas.</p>
        
        <h3>Próximos eventos</h3>
        <p>Em breve anunciaremos um ciclo de palestras baseado nos principais insights coletados durante o congresso, com foco especial nas novas tendências de direito digital e comércio internacional que impactarão o mercado brasileiro nos próximos anos.</p>
      `,
      data: "15 de abril de 2025",
      autor: "Assessoria de Comunicação",
      imagem: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?q=80&w=2070&auto=format&fit=crop",
      categoria: "Institucional",
      tags: ["Congresso", "Internacional", "Direito Empresarial", "Networking"],
      slug: "chimelo-congresso-internacional-direito-empresarial"
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
      slug: "nova-decisao-stf-tributacao-internacional"
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
      slug: "atualizacao-marco-legal-startups"
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
      slug: "mudancas-legislacao-protecao-dados-corporativos"
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
      slug: "estruturar-contratos-internacionais-novo-cenario-global"
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
      slug: "novos-precedentes-tst-trabalho-remoto"
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
      slug: "chimelo-webinar-governanca-corporativa"
    }
  ];

  // Find the news article with the matching slug
  const noticia = noticias.find((n) => n.slug === slug);

  // Redirect if article not found
  useEffect(() => {
    if (!noticia) {
      navigate("/noticias");
    }
  }, [noticia, navigate]);

  if (!noticia) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <article className="chimelo-section bg-gray-50">
          <div className="chimelo-container">
            {/* Back button */}
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/noticias")}
                className="flex items-center text-chimelo-black hover:text-chimelo-silver"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para notícias
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
            </div>
            
            {/* Share and related articles (optional, can be implemented later) */}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NoticiaDetalhe;
