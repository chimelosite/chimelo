
import React, { useState } from "react";
import { Calendar, ArrowRight, FileText, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PublicacaoProps {
  id: number;
  titulo: string;
  autor: string;
  data: string;
  resumo: string;
  imagem: string;
  link: string;
  tags: string[];
}

interface AssociacaoProps {
  id: number;
  nome: string;
  tipo: string;
  descricao: string;
  imagem: string;
  link: string;
  status: string;
}

interface CaseProps {
  id: number;
  titulo: string;
  setor: string;
  resumo: string;
  resultado: string;
  imagem: string;
}

const PublicacaoCard: React.FC<PublicacaoProps> = ({
  titulo,
  autor,
  data,
  resumo,
  imagem,
  link,
  tags
}) => {
  return (
    <div className="group bg-white rounded-lg border border-chimelo-lightgray/20 hover:shadow-md transition-all h-full flex flex-col">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img 
          src={imagem} 
          alt={titulo} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-chimelo-silver mb-2">
          <FileText className="h-4 w-4 mr-2 text-blue-500" />
          <Calendar className="h-3 w-3 mr-1" />
          <span>{data}</span>
          {autor && <span className="ml-2">• {autor}</span>}
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-chimelo-silver transition-colors line-clamp-2">
          {titulo}
        </h3>
        <p className="text-chimelo-silver text-sm line-clamp-3 mb-3 flex-grow">
          {resumo}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 flex items-center hover:text-blue-800 transition-colors mt-auto"
        >
          Leia mais <ArrowRight className="h-3 w-3 ml-1" />
        </a>
      </div>
    </div>
  );
};

const AssociacaoCard: React.FC<AssociacaoProps> = ({
  nome,
  tipo,
  descricao,
  imagem,
  link,
  status
}) => {
  return (
    <div className="group bg-white rounded-lg border border-chimelo-lightgray/20 hover:shadow-md transition-all h-full flex flex-col">
      <div className="p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <Users className="h-4 w-4 mr-2 text-green-500" />
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
            {status}
          </span>
        </div>
        <div className="h-16 flex items-center justify-center mb-3">
          <img 
            src={imagem} 
            alt={nome} 
            className="max-w-full max-h-full object-contain transition-transform group-hover:scale-105" 
          />
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-chimelo-silver transition-colors line-clamp-2">
          {nome}
        </h3>
        <p className="text-sm text-chimelo-silver mb-2 font-medium">{tipo}</p>
        <p className="text-chimelo-silver text-sm line-clamp-3 mb-3 flex-grow">
          {descricao}
        </p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium text-green-600 flex items-center justify-center hover:text-green-800 transition-colors mt-auto"
        >
          Saiba mais <ArrowRight className="h-3 w-3 ml-1" />
        </a>
      </div>
    </div>
  );
};

const CaseCard: React.FC<CaseProps> = ({
  titulo,
  setor,
  resumo,
  resultado,
  imagem
}) => {
  return (
    <div className="group bg-white rounded-lg border border-chimelo-lightgray/20 hover:shadow-md transition-all h-full flex flex-col">
      <div className="aspect-video overflow-hidden rounded-t-lg bg-chimelo-lightgray/20 flex items-center justify-center">
        <Briefcase className="h-12 w-12 text-chimelo-silver" />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-chimelo-silver mb-2">
          <Briefcase className="h-4 w-4 mr-2 text-orange-500" />
          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
            {setor}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-chimelo-silver transition-colors line-clamp-2">
          {titulo}
        </h3>
        <p className="text-chimelo-silver text-sm line-clamp-3 mb-3">
          {resumo}
        </p>
        <p className="text-sm font-medium text-chimelo-black mb-3 flex-grow">
          <strong>Resultado:</strong> {resultado}
        </p>
        <Link 
          to="/destaques#cases"
          className="text-sm font-medium text-orange-600 flex items-center hover:text-orange-800 transition-colors mt-auto"
        >
          Ver case completo <ArrowRight className="h-3 w-3 ml-1" />
        </Link>
      </div>
    </div>
  );
};

const NoticiasSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("publicacoes");

  // Sample data for publications
  const publicacoes: PublicacaoProps[] = [
    {
      id: 1,
      titulo: "Comentários À Lei De Recuperação De Empresas E Falência",
      autor: "Gabriele Chimelo",
      data: "2025",
      resumo: "Análise completa dos aspectos jurídicos e práticos da legislação de recuperação judicial e falência no Brasil.",
      imagem: "https://www.editorafoco.com.br/fotos/comentarios-recuperacao-falencia-1-ed-2022-media_mini.webp",
      link: "https://www.editorafoco.com.br/produto/comentarios-lei-recuperacao-empresas-falencia-2022",
      tags: ["Recuperação Judicial", "Falência", "Direito Empresarial"]
    },
    {
      id: 2,
      titulo: "STF confirma suspensão de leis que proíbem linguagem neutra",
      autor: "",
      data: "11 de maio de 2025",
      resumo: "O Plenário do STF referendou liminares que suspenderam leis municipais proibindo linguagem neutra em documentos oficiais.",
      imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      link: "/destaques/stf-confirma-suspensao-leis-linguagem-neutra",
      tags: ["STF", "Legislação", "Direitos"]
    }
  ];

  // Sample data for associations
  const associacoes: AssociacaoProps[] = [
    {
      id: 1,
      nome: "CMR - Centro de Mulheres na Reestruturação Empresarial",
      tipo: "Diretora Fundadora",
      descricao: "Organização dedicada ao fortalecimento da participação feminina na área de reestruturação empresarial.",
      imagem: "https://www.estevez.adv.br/admin/files/apoio/apoio13220121062024_1_.png",
      link: "https://www.cmrempresarial.com/",
      status: "Fundadora"
    },
    {
      id: 2,
      nome: "IBAJUD - Instituto Brasileiro de Insolvência",
      tipo: "Diretora",
      descricao: "Instituto dedicado ao estudo e desenvolvimento do direito da insolvência no Brasil.",
      imagem: "https://www.estevez.adv.br/admin/files/apoio/apoio13201821062024_1_.png",
      link: "https://ibajud.org/",
      status: "Diretora"
    }
  ];

  // Sample data for cases
  const cases: CaseProps[] = [
    {
      id: 1,
      titulo: "Precedente STJ - Emofesa",
      setor: "Recuperação Judicial",
      resumo: "Primeiro caso no Brasil de empresa em recuperação judicial autorizada a licitar com o poder público.",
      resultado: "Precedente que beneficiou centenas de empresas na mesma situação",
      imagem: ""
    },
    {
      id: 2,
      titulo: "Reestruturação DHB Componentes Automotivos",
      setor: "Automotivo",
      resumo: "Complexo processo de reestruturação empresarial no setor automotivo com múltiplos credores.",
      resultado: "Recuperação exitosa com preservação de empregos e continuidade operacional",
      imagem: ""
    }
  ];

  return (
    <section className="chimelo-section bg-chimelo-lightgray">
      <div className="chimelo-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Destaques</h2>
          <p className="text-chimelo-silver">
            Conheça nossas publicações, associações e cases de sucesso
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="publicacoes" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Publicações</span>
              <span className="sm:hidden">Pub</span>
            </TabsTrigger>
            <TabsTrigger value="associacoes" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Associações</span>
              <span className="sm:hidden">Assoc</span>
            </TabsTrigger>
            <TabsTrigger value="cases" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Cases</span>
              <span className="sm:hidden">Cases</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="publicacoes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publicacoes.map((publicacao) => (
                <PublicacaoCard key={publicacao.id} {...publicacao} />
              ))}
            </div>
            <div className="text-center">
              <Button asChild className="chimelo-btn chimelo-btn-outline">
                <Link to="/destaques#publicacoes">
                  Ver Todas as Publicações <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="associacoes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {associacoes.map((associacao) => (
                <AssociacaoCard key={associacao.id} {...associacao} />
              ))}
            </div>
            <div className="text-center">
              <Button asChild className="chimelo-btn chimelo-btn-outline">
                <Link to="/destaques#associacoes">
                  Ver Todas as Associações <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="cases" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cases.map((case_item) => (
                <CaseCard key={case_item.id} {...case_item} />
              ))}
            </div>
            <div className="text-center">
              <Button asChild className="chimelo-btn chimelo-btn-outline">
                <Link to="/destaques#cases">
                  Ver Todos os Cases <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Button asChild className="chimelo-btn">
            <Link to="/destaques">
              Ver Todos os Destaques <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NoticiasSection;
