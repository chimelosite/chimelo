
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
    <Link to={`/noticias/${slug}`} className="group">
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
      title: "Novidades na legislação trabalhista em 2025",
      excerpt: "Conheça as principais mudanças na legislação trabalhista que entrarão em vigor em 2025 e como elas afetam sua empresa.",
      date: "05 de maio de 2025",
      slug: "novidades-legislacao-trabalhista-2025",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Implicações jurídicas da inteligência artificial nos negócios",
      excerpt: "A inteligência artificial está transformando o ambiente de negócios. Entenda as implicações jurídicas dessa revolução.",
      date: "28 de abril de 2025",
      slug: "implicacoes-juridicas-ia-negocios",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop"
    },
    {
      title: "Chimelo Advogados participa de congresso internacional de direito empresarial",
      excerpt: "Nosso escritório marcou presença no maior congresso internacional de direito empresarial, trazendo insights valiosos para nossos clientes.",
      date: "15 de abril de 2025",
      slug: "chimelo-congresso-internacional-direito-empresarial",
      image: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  return (
    <section className="chimelo-section bg-gray-50">
      <div className="chimelo-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Notícias e Artigos</h2>
            <p className="text-chimelo-silver">Acompanhe as últimas novidades e publicações do nosso escritório</p>
          </div>
          <Button asChild className="chimelo-btn chimelo-btn-outline mt-4 md:mt-0">
            <Link to="/noticias">
              Ver todas as notícias <ArrowRight className="ml-2 h-4 w-4" />
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
