import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, ArrowRight, Search, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  fonte?: string;
}
const NoticiaCard: React.FC<{
  noticia: NoticiaProps;
}> = ({
  noticia
}) => {
  return <Link to={`/destaques/${noticia.slug}`} className="block border border-chimelo-lightgray/20 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
      <div className="aspect-[16/9] overflow-hidden">
        <img src={noticia.imagem} alt={noticia.titulo} className="w-full h-full object-cover transition-transform hover:scale-105" />
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
          {noticia.tags.map((tag, i) => <span key={i} className="text-xs px-2 py-1 bg-chimelo-black/5 text-chimelo-silver rounded-full">
              {tag}
            </span>)}
        </div>
        <div className="text-sm font-medium text-chimelo-black flex items-center hover:text-chimelo-silver transition-colors">
          Leia mais <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </Link>;
};
const NoticiasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaFilter, setCategoriaFilter] = useState("all");
  const noticias: NoticiaProps[] = [{
    id: "1",
    titulo: "STF confirma suspensão de leis que proíbem linguagem neutra em dois municípios",
    resumo: "O Plenário do Supremo Tribunal Federal (STF) referendou liminares concedidas pelo ministro Alexandre de Moraes que suspenderam leis municipais que proibiam o uso da linguagem neutra em documentos oficiais. A decisão reforça a proteção à liberdade de expressão e à inclusão linguística.",
    conteudo: "O Plenário do Supremo Tribunal Federal (STF) referendou liminares concedidas pelo ministro Alexandre de Moraes que suspenderam leis municipais que proibiam o uso da linguagem neutra em documentos oficiais. A decisão reforça a proteção à liberdade de expressão e à inclusão linguística.",
    data: "11 de maio de 2025",
    autor: "Equipe Jurídica",
    imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    categoria: "Jurisprudência",
    tags: ["STF", "Linguagem Neutra", "Direitos Fundamentais"],
    slug: "stf-confirma-suspensao-leis-linguagem-neutra",
    fonte: "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=515220&ori=1"
  }, {
    id: "2",
    titulo: "STF suspende lei que prorrogou desoneração da folha até 2027",
    resumo: "O ministro Cristiano Zanin observou que a lei não considerou o impacto financeiro da prorrogação dos benefícios fiscais. A decisão do STF impacta diretamente a gestão fiscal e tributária das empresas no país.",
    conteudo: "O ministro Cristiano Zanin observou que a lei não considerou o impacto financeiro da prorrogação dos benefícios fiscais. A decisão do STF impacta diretamente a gestão fiscal e tributária das empresas no país.",
    data: "09 de maio de 2025",
    autor: "Equipe Jurídica",
    imagem: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    categoria: "Direito Tributário",
    tags: ["STF", "Desoneração", "Tributação", "Empresas"],
    slug: "stf-suspende-lei-desoneracao-folha-2027",
    fonte: "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=534157&ori=1"
  }];

  // Lista de categorias únicas
  const categorias = Array.from(new Set(noticias.map(noticia => noticia.categoria)));

  // Filtrar notícias com base na pesquisa e categoria
  const filteredNoticias = noticias.filter(noticia => {
    const matchesSearch = noticia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || noticia.resumo.toLowerCase().includes(searchTerm.toLowerCase()) || noticia.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategoria = categoriaFilter === "all" || noticia.categoria === categoriaFilter;
    return matchesSearch && matchesCategoria;
  });
  return <div className="flex flex-col min-h-screen destaques-page">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-chimelo-black text-white">
          <div className="absolute inset-0 opacity-35 bg-cover bg-center" style={{
          backgroundImage: 'url("/lovable-uploads/27570706-51c0-4d07-a428-af2be4221322.png")',
          backgroundBlendMode: 'overlay'
        }} />
          
          <div className="relative py-16 md:py-[29px]">
            <div className="-bottom-1 ">
              <div className="max-w-3xl mx-auto mb-12 text-center" style={{
              marginTop: '15px'
            }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Notícias e Artigos</h1>
                <p className="text-lg text-chimelo-silver max-w-2xl mx-auto">
                  Acompanhe as últimas novidades, artigos e análises jurídicas produzidas 
                  pela equipe do escritório Chimelo Advogados & Associados.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="chimelo-section bg-gray-50">
          <div className="chimelo-container">
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-chimelo-silver h-4 w-4" />
                  <Input placeholder="Pesquisar notícias..." className="pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </div>
                
                <Select value={categoriaFilter} onValueChange={setCategoriaFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as categorias</SelectItem>
                    {categorias.map((categoria, index) => <SelectItem key={index} value={categoria}>{categoria}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {filteredNoticias.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNoticias.map(noticia => <NoticiaCard key={noticia.id} noticia={noticia} />)}
              </div> : <div className="text-center p-8 bg-white rounded-lg border border-chimelo-lightgray/20">
                <p>Nenhuma notícia encontrada com os critérios de pesquisa.</p>
              </div>}
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="flex items-center gap-2">
                Carregar mais notícias
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default NoticiasPage;