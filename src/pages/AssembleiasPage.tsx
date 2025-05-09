import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, Clock, MapPin, Users, Download, Search, Filter, Link as LinkIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Assembleia {
  id: string;
  titulo: string;
  tipo: "Ordinária" | "Extraordinária";
  data: string;
  hora: string;
  local: string;
  modalidade: "Presencial" | "Online" | "Híbrida";
  status: "Agendada" | "Realizada" | "Cancelada";
  pauta: string[];
  link?: string;
  documentos?: {
    nome: string;
    tipo: string;
    tamanho: string;
    link: string;
  }[];
  ata?: {
    disponivel: boolean;
    link?: string;
  };
}

const AssembleiaCard: React.FC<{ assembleia: Assembleia }> = ({ assembleia }) => {
  const [expanded, setExpanded] = useState(false);
  
  const statusColors = {
    Agendada: "bg-blue-100 text-blue-800",
    Realizada: "bg-green-100 text-green-800",
    Cancelada: "bg-red-100 text-red-800",
  };
  
  const modalidadeIconColor = {
    Presencial: "text-orange-500",
    Online: "text-blue-500",
    Híbrida: "text-purple-500",
  };

  return (
    <div className="border border-chimelo-lightgray/20 rounded-lg overflow-hidden bg-white mb-4">
      <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center mb-2">
            <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[assembleia.status]}`}>
              {assembleia.status}
            </span>
            <span className="text-xs text-chimelo-silver ml-2">
              {assembleia.tipo}
            </span>
          </div>
          <h3 className="text-lg font-bold mb-2">{assembleia.titulo}</h3>
          <div className="flex flex-col space-y-1 text-sm text-chimelo-silver">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{assembleia.data}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{assembleia.hora}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{assembleia.local}</span>
            </div>
            {(assembleia.modalidade === "Online" || assembleia.modalidade === "Híbrida") && assembleia.link && (
              <div className="flex items-center">
                <LinkIcon className="h-4 w-4 mr-2 text-blue-500" />
                <a 
                  href={assembleia.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Link para acesso online
                </a>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center">
          <div className={`flex items-center mr-4 ${modalidadeIconColor[assembleia.modalidade]}`}>
            <Users className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">{assembleia.modalidade}</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Ver menos" : "Ver mais"}
          </Button>
        </div>
      </div>
      
      {expanded && (
        <div className="p-4 border-t border-chimelo-lightgray/10 bg-gray-50">
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Pauta da Assembleia</h4>
            <ul className="list-disc list-inside space-y-1">
              {assembleia.pauta.map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
          
          {assembleia.documentos && assembleia.documentos.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Documentos Disponíveis</h4>
              <div className="space-y-2">
                {assembleia.documentos.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-white border border-chimelo-lightgray/20 rounded">
                    <div>
                      <p className="text-sm font-medium">{doc.nome}</p>
                      <p className="text-xs text-chimelo-silver">{doc.tipo} • {doc.tamanho}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(doc.link, '_blank');
                      }}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Baixar
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {assembleia.status === "Realizada" && (
            <div>
              <h4 className="text-sm font-semibold mb-2">Ata da Assembleia</h4>
              {assembleia.ata?.disponivel ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    if (assembleia.ata?.link) {
                      window.open(assembleia.ata.link, '_blank');
                    }
                  }}
                >
                  <Download className="h-4 w-4 mr-1" />
                  Baixar Ata
                </Button>
              ) : (
                <p className="text-sm text-chimelo-silver">Ata em processo de elaboração.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const AssembleiasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("todos");
  const [tipoFilter, setTipoFilter] = useState("");
  const [modalidadeFilter, setModalidadeFilter] = useState("");
  
  const assembleias: Assembleia[] = [
    {
      id: "1",
      titulo: "Assembleia Geral Ordinária - 1º Trimestre 2025",
      tipo: "Ordinária",
      data: "15 de maio de 2025",
      hora: "10:00",
      local: "Sede da Empresa - R. Carlos Huber, 110 - Três Figueiras, Porto Alegre/RS",
      modalidade: "Presencial",
      status: "Agendada",
      pauta: [
        "Apresentação dos resultados financeiros do 1º trimestre de 2025",
        "Discussão do plano estratégico para o 2º trimestre",
        "Apresentação de novos projetos para o ano de 2025",
        "Assuntos gerais de interesse dos acionistas"
      ],
      documentos: [
        {
          nome: "Edital de Convocação",
          tipo: "PDF",
          tamanho: "1.2 MB",
          link: "#"
        },
        {
          nome: "Demonstrativos Financeiros Q1 2025",
          tipo: "PDF",
          tamanho: "3.5 MB",
          link: "#"
        },
        {
          nome: "Procuração para Representação",
          tipo: "DOCX",
          tamanho: "800 KB",
          link: "#"
        }
      ]
    },
    {
      id: "2",
      titulo: "Assembleia Geral Extraordinária - Fusão Corporativa",
      tipo: "Extraordinária",
      data: "28 de abril de 2025",
      hora: "14:00",
      local: "Plataforma Virtual Zoom (Link enviado aos participantes)",
      link: "https://zoom.us/j/123456789",
      modalidade: "Online",
      status: "Realizada",
      pauta: [
        "Deliberação sobre proposta de fusão com a empresa XYZ S/A",
        "Aprovação dos termos do acordo de fusão",
        "Plano de integração operacional",
        "Definição do novo conselho administrativo"
      ],
      documentos: [
        {
          nome: "Proposta de Fusão",
          tipo: "PDF",
          tamanho: "5.7 MB",
          link: "#"
        },
        {
          nome: "Análise de Impacto Financeiro",
          tipo: "PDF",
          tamanho: "2.3 MB",
          link: "#"
        },
        {
          nome: "Parecer Jurídico",
          tipo: "PDF",
          tamanho: "1.8 MB",
          link: "#"
        }
      ],
      ata: {
        disponivel: true,
        link: "#"
      }
    },
    {
      id: "3",
      titulo: "Assembleia Extraordinária - Aprovação de Emissão de Debêntures",
      tipo: "Extraordinária",
      data: "10 de abril de 2025",
      hora: "15:30",
      local: "Hotel Grand Plaza - Av. Brasil, 500, Rio de Janeiro/RJ e Plataforma Virtual",
      modalidade: "Híbrida",
      status: "Realizada",
      pauta: [
        "Aprovação da emissão de debêntures para financiamento de expansão",
        "Definição das condições de emissão",
        "Apresentação de garantias e cronograma",
        "Nomeação de agente fiduciário"
      ],
      documentos: [
        {
          nome: "Escritura de Emissão",
          tipo: "PDF",
          tamanho: "4.2 MB",
          link: "#"
        },
        {
          nome: "Estudo de Viabilidade",
          tipo: "PDF",
          tamanho: "3.1 MB",
          link: "#"
        }
      ],
      ata: {
        disponivel: true,
        link: "#"
      }
    },
    {
      id: "4",
      titulo: "Assembleia Geral Ordinária - 4º Trimestre 2024",
      tipo: "Ordinária",
      data: "15 de março de 2025",
      hora: "09:00",
      local: "Sede da Empresa - Av. Paulista, 1000, São Paulo/SP",
      modalidade: "Presencial",
      status: "Realizada",
      pauta: [
        "Apresentação dos resultados financeiros do 4º trimestre de 2024",
        "Aprovação do balanço anual",
        "Destinação dos resultados do exercício",
        "Eleição do Conselho Fiscal"
      ],
      documentos: [
        {
          nome: "Relatório Anual 2024",
          tipo: "PDF",
          tamanho: "7.8 MB",
          link: "#"
        },
        {
          nome: "Demonstrações Financeiras 2024",
          tipo: "PDF",
          tamanho: "5.2 MB",
          link: "#"
        }
      ],
      ata: {
        disponivel: true,
        link: "#"
      }
    },
    {
      id: "5",
      titulo: "Assembleia Extraordinária - Alteração Estatutária",
      tipo: "Extraordinária",
      data: "05 de março de 2025",
      hora: "14:00",
      local: "Plataforma Virtual Teams (Link enviado aos participantes)",
      modalidade: "Online",
      status: "Cancelada",
      pauta: [
        "Alteração do objeto social",
        "Modificação das regras de governança corporativa",
        "Criação de novas classes de ações",
        "Outros temas de interesse"
      ],
      documentos: [
        {
          nome: "Proposta de Alteração Estatutária",
          tipo: "PDF",
          tamanho: "2.4 MB",
          link: "#"
        },
        {
          nome: "Parecer do Conselho de Administração",
          tipo: "PDF",
          tamanho: "1.1 MB",
          link: "#"
        }
      ]
    },
    {
      id: "6",
      titulo: "Assembleia Geral Extraordinária - Expansão Internacional",
      tipo: "Extraordinária",
      data: "25 de junho de 2025",
      hora: "11:00",
      local: "Sede da Empresa e Plataforma Virtual",
      modalidade: "Híbrida",
      status: "Agendada",
      pauta: [
        "Apresentação do projeto de expansão internacional",
        "Aprovação de investimentos em subsidiárias estrangeiras",
        "Estrutura societária das operações internacionais",
        "Cronograma de implementação"
      ],
      documentos: [
        {
          nome: "Projeto de Expansão Internacional",
          tipo: "PDF",
          tamanho: "6.3 MB",
          link: "#"
        },
        {
          nome: "Análise de Mercado Internacional",
          tipo: "PDF",
          tamanho: "4.7 MB",
          link: "#"
        },
        {
          nome: "Estrutura Societária Proposta",
          tipo: "PDF",
          tamanho: "1.5 MB",
          link: "#"
        }
      ]
    }
  ];

  // Remove the reference to categorias as it doesn't exist in the Assembleia interface
  // and is causing the TypeScript error
  
  // Filtrar notícias com base na pesquisa e categoria
  const filteredAssembleias = assembleias.filter(assembleia => {
    const matchesSearch = 
      assembleia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
      assembleia.local.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      filter === "todos" || 
      (filter === "agendadas" && assembleia.status === "Agendada") ||
      (filter === "realizadas" && assembleia.status === "Realizada") ||
      (filter === "canceladas" && assembleia.status === "Cancelada");
    
    const matchesTipo = 
      tipoFilter === "" || 
      assembleia.tipo === tipoFilter;
    
    const matchesModalidade = 
      modalidadeFilter === "" || 
      assembleia.modalidade === modalidadeFilter;
    
    return matchesSearch && matchesStatus && matchesTipo && matchesModalidade;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="chimelo-section bg-gray-50">
          <div className="chimelo-container">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Assembleias</h1>
              <p className="text-chimelo-silver max-w-2xl mx-auto">
                Consulte informações sobre as assembleias agendadas e realizadas, 
                com acesso a documentos e atas disponíveis.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-chimelo-silver h-4 w-4" />
                  <Input
                    placeholder="Pesquisar assembleias..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Select value={tipoFilter} onValueChange={setTipoFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os tipos</SelectItem>
                    <SelectItem value="Ordinária">Ordinária</SelectItem>
                    <SelectItem value="Extraordinária">Extraordinária</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={modalidadeFilter} onValueChange={setModalidadeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Modalidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas as modalidades</SelectItem>
                    <SelectItem value="Presencial">Presencial</SelectItem>
                    <SelectItem value="Online">Online</SelectItem>
                    <SelectItem value="Híbrida">Híbrida</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Tabs defaultValue="todos" onValueChange={setFilter}>
              <TabsList className="w-full justify-start mb-6 bg-transparent border-b border-chimelo-lightgray/20 p-0 h-auto">
                <TabsTrigger 
                  value="todos" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-chimelo-black data-[state=active]:bg-transparent"
                >
                  Todas
                </TabsTrigger>
                <TabsTrigger 
                  value="agendadas"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-chimelo-black data-[state=active]:bg-transparent"
                >
                  Agendadas
                </TabsTrigger>
                <TabsTrigger 
                  value="realizadas"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-chimelo-black data-[state=active]:bg-transparent"
                >
                  Realizadas
                </TabsTrigger>
                <TabsTrigger 
                  value="canceladas"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-chimelo-black data-[state=active]:bg-transparent"
                >
                  Canceladas
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="todos" className="mt-0">
                {filteredAssembleias.length > 0 ? (
                  <div className="space-y-4">
                    {filteredAssembleias.map((assembleia) => (
                      <AssembleiaCard key={assembleia.id} assembleia={assembleia} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 bg-white rounded-lg border border-chimelo-lightgray/20">
                    <p>Nenhuma assembleia encontrada com os critérios selecionados.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="agendadas" className="mt-0">
                {filteredAssembleias.length > 0 ? (
                  <div className="space-y-4">
                    {filteredAssembleias.map((assembleia) => (
                      <AssembleiaCard key={assembleia.id} assembleia={assembleia} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 bg-white rounded-lg border border-chimelo-lightgray/20">
                    <p>Nenhuma assembleia agendada encontrada com os critérios selecionados.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="realizadas" className="mt-0">
                {filteredAssembleias.length > 0 ? (
                  <div className="space-y-4">
                    {filteredAssembleias.map((assembleia) => (
                      <AssembleiaCard key={assembleia.id} assembleia={assembleia} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 bg-white rounded-lg border border-chimelo-lightgray/20">
                    <p>Nenhuma assembleia realizada encontrada com os critérios selecionados.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="canceladas" className="mt-0">
                {filteredAssembleias.length > 0 ? (
                  <div className="space-y-4">
                    {filteredAssembleias.map((assembleia) => (
                      <AssembleiaCard key={assembleia.id} assembleia={assembleia} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 bg-white rounded-lg border border-chimelo-lightgray/20">
                    <p>Nenhuma assembleia cancelada encontrada com os critérios selecionados.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AssembleiasPage;
