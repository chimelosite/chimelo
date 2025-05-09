import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, ArrowRight, Search, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface NoticiaProps {
  id: string;
  titulo: string;
  resumo: string;
  conteudo: string;
  data: string;
  autor: string;
  imagem: string;
  categoria: string;
  tags: string[];
  slug: string;
}

const NoticiaCard: React.FC<{ noticia: NoticiaProps }> = ({ noticia }) => {
  return (
    <Link 
      to={`/noticias/${noticia.slug}`}
      className="block border border-chimelo-lightgray/20 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={noticia.imagem} 
          alt={noticia.titulo}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-chimelo-silver mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{noticia.data}</span>
          <span className="mx-2">•</span>
          <span>{noticia.autor}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-chimelo-silver transition-colors">
          {noticia.titulo}
        </h3>
        <p className="text-chimelo-silver mb-4 line-clamp-3">{noticia.resumo}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {noticia.tags.map((tag, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-chimelo-black/5 text-chimelo-silver rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm font-medium text-chimelo-black flex items-center hover:text-chimelo-silver transition-colors">
          Leia mais <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </Link>
  );
};

const NoticiasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaFilter, setCategoriaFilter] = useState("");
  
  const noticias: NoticiaProps[] = [
    {
      id: "1",
      titulo: "Novidades na legislação trabalhista em 2025",
      resumo: "Conheça as principais mudanças na legislação trabalhista que entrarão em vigor em 2025 e como elas afetam sua empresa.",
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.",
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
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.",
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
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.",
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
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.",
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
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.",
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
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.",
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
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.",
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
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.",
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
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi. Nullam euismod, nisi vel tincidunt lobortis, mi nisi consectetur nunc, vel molestie nunc nisi vel nisi.",
      data: "01 de março de 2025",
      autor: "Assessoria de Comunicação",
      imagem: "https://images.unsplash.com/photo-1519335337423-a3357c2cd364?q=80&w=2070&auto=format&fit=crop",
      categoria: "Institucional",
      tags: ["Webinar", "Governança", "Compliance", "Capacitação"],
      slug: "chimelo-webinar-governanca-corporativa"
    }
  ];

  // Lista de categorias únicas
  const categorias = Array.from(new Set(noticias.map(noticia => noticia.categoria)));
  
  // Filtrar notícias com base na pesquisa e categoria
  const filteredNoticias = noticias.filter(noticia => {
    const matchesSearch = 
      noticia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
      noticia.resumo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      noticia.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategoria = 
      categoriaFilter === "" || 
      noticia.categoria === categoriaFilter;
    
    return matchesSearch && matchesCategoria;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="chimelo-section bg-gray-50">
          <div className="chimelo-container">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Notícias e Artigos</h1>
              <p className="text-chimelo-silver max-w-2xl mx-auto">
                Acompanhe as últimas novidades, artigos e análises jurídicas produzidas 
                pela equipe do escritório Chimelo Advogados & Associados.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-chimelo-silver h-4 w-4" />
                  <Input
                    placeholder="Pesquisar notícias..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Select value={categoriaFilter} onValueChange={setCategoriaFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todas as categorias</SelectItem>
                    {categorias.map((categoria, index) => (
                      <SelectItem key={index} value={categoria}>{categoria}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {filteredNoticias.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNoticias.map((noticia) => (
                  <NoticiaCard key={noticia.id} noticia={noticia} />
                ))}
              </div>
            ) : (
              <div className="text-center p-8 bg-white rounded-lg border border-chimelo-lightgray/20">
                <p>Nenhuma notícia encontrada com os critérios de pesquisa.</p>
              </div>
            )}
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="flex items-center gap-2">
                Carregar mais notícias
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NoticiasPage;
