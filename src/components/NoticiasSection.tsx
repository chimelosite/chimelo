
import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NoticiaProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
}

const NoticiaCard: React.FC<NoticiaProps> = ({ title, excerpt, date, slug, image }) => {
  return (
    <Link to={`/destaques/${slug}`} className="group">
      <div className="overflow-hidden rounded-lg border border-chimelo-lightgray/20 bg-white hover:shadow-md transition-shadow h-full flex flex-col">
        {image && (
          <div className="aspect-video overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center text-sm text-chimelo-silver mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-chimelo-silver transition-colors line-clamp-2">{title}</h3>
          <p className="text-chimelo-silver line-clamp-3 mb-4">{excerpt}</p>
          <div className="mt-auto">
            <span className="text-sm font-medium text-chimelo-black flex items-center group-hover:text-chimelo-silver transition-colors">
              Leia mais <ArrowRight className="h-4 w-4 ml-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const NoticiasSection: React.FC = () => {
  const noticias = [
    {
      title: "STF confirma suspensão de leis que proíbem linguagem neutra em dois municípios",
      excerpt: "O Plenário do Supremo Tribunal Federal (STF) referendou liminares concedidas pelo ministro Alexandre de Moraes que suspenderam leis municipais que proibiam o uso da linguagem neutra em documentos oficiais.",
      date: "11 de maio de 2025",
      slug: "stf-confirma-suspensao-leis-linguagem-neutra",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "STF suspende lei que prorrogou desoneração da folha até 2027",
      excerpt: "O ministro Cristiano Zanin observou que a lei não considerou o impacto financeiro da prorrogação dos benefícios fiscais. A decisão do STF impacta diretamente a gestão fiscal e tributária das empresas no país.",
      date: "09 de maio de 2025",
      slug: "stf-suspende-lei-desoneracao-folha-2027",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop"
    },
    {
      title: "A Importância da Due Diligence Jurídica em Operações Empresariais",
      excerpt: "A due diligence jurídica é uma ferramenta essencial para a avaliação de riscos e passivos ocultos em transações empresariais, permitindo maior segurança jurídica e prevenção de litígios futuros.",
      date: "05 de maio de 2025",
      slug: "importancia-due-diligence-juridica-operacoes-empresariais",
      image: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  return (
    <section className="chimelo-section bg-gray-50">
      <div className="chimelo-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Destaques</h2>
            <p className="text-chimelo-silver">Acompanhe as últimas novidades e publicações do nosso escritório</p>
          </div>
          <Button asChild className="chimelo-btn chimelo-btn-outline mt-4 md:mt-0">
            <Link to="/destaques">
              Ver todos os destaques <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {noticias.map((noticia, index) => (
            <NoticiaCard
              key={index}
              title={noticia.title}
              excerpt={noticia.excerpt}
              date={noticia.date}
              slug={noticia.slug}
              image={noticia.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;
