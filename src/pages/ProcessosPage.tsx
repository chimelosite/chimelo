
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SearchIcon, FileText, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Processo {
  numero: string;
  cliente: string;
  tipo: string;
  status: string;
  comarca: string;
  atualizacao: string;
  descricao: string;
  movimentacoes: {
    data: string;
    descricao: string;
  }[];
}

const ProcessoCard: React.FC<{ processo: Processo }> = ({ processo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-chimelo-lightgray/20 rounded-lg overflow-hidden bg-white mb-4">
      <div 
        className="p-4 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-chimelo-silver mr-2" />
            <h3 className="text-lg font-bold">{processo.numero}</h3>
          </div>
          <p className="text-sm text-chimelo-silver mt-1">Cliente: {processo.cliente} | {processo.tipo}</p>
        </div>
        <div className="flex items-center">
          <span className={`px-2 py-1 rounded text-xs mr-4 ${
            processo.status === "Em andamento" ? "bg-blue-100 text-blue-800" :
            processo.status === "Concluído" ? "bg-green-100 text-green-800" :
            processo.status === "Suspenso" ? "bg-yellow-100 text-yellow-800" :
            "bg-gray-100 text-gray-800"
          }`}>
            {processo.status}
          </span>
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 border-t border-chimelo-lightgray/10 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-xs text-chimelo-silver">Comarca</p>
              <p>{processo.comarca}</p>
            </div>
            <div>
              <p className="text-xs text-chimelo-silver">Última atualização</p>
              <p>{processo.atualizacao}</p>
            </div>
            <div>
              <p className="text-xs text-chimelo-silver">Status</p>
              <p>{processo.status}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-xs text-chimelo-silver mb-1">Descrição</p>
            <p className="text-sm">{processo.descricao}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-2">Últimas movimentações</h4>
            <div className="space-y-2">
              {processo.movimentacoes.map((movimentacao, index) => (
                <div key={index} className="text-sm border-l-2 border-chimelo-black/20 pl-3">
                  <p className="font-medium">{movimentacao.data}</p>
                  <p className="text-chimelo-silver">{movimentacao.descricao}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm" className="flex items-center">
              Consultar no TJ <ExternalLink className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const ProcessosPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTab, setCurrentTab] = useState("todos");

  const processos: Processo[] = [
    {
      numero: "1234567-89.2023.8.26.0100",
      cliente: "Empresa ABC Ltda.",
      tipo: "Ação de Cobrança",
      status: "Em andamento",
      comarca: "São Paulo - SP",
      atualizacao: "02 de maio de 2025",
      descricao: "Ação de cobrança movida contra devedores inadimplentes referente a contrato de prestação de serviços.",
      movimentacoes: [
        {
          data: "02/05/2025",
          descricao: "Despacho: Manifestem-se as partes sobre os documentos juntados no prazo de 15 dias."
        },
        {
          data: "15/04/2025",
          descricao: "Juntada de petição de juntada de documentos pela parte autora."
        },
        {
          data: "02/04/2025",
          descricao: "Audiência de conciliação realizada sem acordo entre as partes."
        }
      ]
    },
    {
      numero: "0987654-32.2023.8.26.0100",
      cliente: "Indústrias XYZ S/A",
      tipo: "Ação Trabalhista",
      status: "Em andamento",
      comarca: "São Paulo - SP",
      atualizacao: "28 de abril de 2025",
      descricao: "Reclamação trabalhista movida por ex-funcionário pleiteando horas extras e verbas rescisórias.",
      movimentacoes: [
        {
          data: "28/04/2025",
          descricao: "Designada audiência de instrução para o dia 15/06/2025."
        },
        {
          data: "10/04/2025",
          descricao: "Apresentada contestação pela empresa reclamada."
        },
        {
          data: "01/03/2025",
          descricao: "Audiência inicial realizada sem acordo. Determinada apresentação de defesa."
        }
      ]
    },
    {
      numero: "5678901-23.2022.8.26.0100",
      cliente: "Incorporadora Alfa Ltda.",
      tipo: "Ação de Execução",
      status: "Concluído",
      comarca: "São Paulo - SP",
      atualizacao: "15 de abril de 2025",
      descricao: "Execução de título extrajudicial referente a contrato de compra e venda de imóvel com parcelas inadimplidas.",
      movimentacoes: [
        {
          data: "15/04/2025",
          descricao: "Sentença de extinção do processo pelo pagamento integral do débito."
        },
        {
          data: "02/04/2025",
          descricao: "Petição do executado informando pagamento do valor integral da execução."
        },
        {
          data: "15/03/2025",
          descricao: "Intimação do executado sobre penhora online realizada com sucesso."
        }
      ]
    },
    {
      numero: "2345678-90.2023.8.26.0100",
      cliente: "Tech Solutions S/A",
      tipo: "Ação Regulatória",
      status: "Suspenso",
      comarca: "Brasília - DF",
      atualizacao: "10 de abril de 2025",
      descricao: "Ação anulatória de decisão administrativa da ANATEL relacionada à operação de serviços de telecomunicações.",
      movimentacoes: [
        {
          data: "10/04/2025",
          descricao: "Decisão de suspensão do processo por 90 dias para tentativa de acordo administrativo."
        },
        {
          data: "28/03/2025",
          descricao: "Petição do autor requerendo suspensão do processo para negociação administrativa."
        },
        {
          data: "15/02/2025",
          descricao: "Contestação apresentada pela ANATEL."
        }
      ]
    },
    {
      numero: "6789012-34.2022.8.26.0100",
      cliente: "Supermercados Beta S/A",
      tipo: "Ação de Indenização",
      status: "Em andamento",
      comarca: "Rio de Janeiro - RJ",
      atualizacao: "05 de abril de 2025",
      descricao: "Ação de indenização por danos morais e materiais movida por consumidor que alega ter sofrido intoxicação alimentar.",
      movimentacoes: [
        {
          data: "05/04/2025",
          descricao: "Despacho determinando perícia técnica no produto. Nomeado perito Dr. João Silva."
        },
        {
          data: "20/03/2025",
          descricao: "Réplica apresentada pelo autor."
        },
        {
          data: "01/03/2025",
          descricao: "Contestação apresentada pelo supermercado réu."
        }
      ]
    },
    {
      numero: "3456789-01.2023.8.26.0100",
      cliente: "Farmacêutica Delta Ltda.",
      tipo: "Ação de Propriedade Intelectual",
      status: "Em andamento",
      comarca: "São Paulo - SP",
      atualizacao: "01 de abril de 2025",
      descricao: "Ação de violação de patente relacionada a medicamento genérico lançado por empresa concorrente.",
      movimentacoes: [
        {
          data: "01/04/2025",
          descricao: "Decisão interlocutória deferindo produção de prova pericial técnica."
        },
        {
          data: "15/03/2025",
          descricao: "Especificação de provas pelas partes."
        },
        {
          data: "28/02/2025",
          descricao: "Réplica apresentada pela parte autora."
        }
      ]
    }
  ];

  // Filtragem de processos com base na pesquisa e na aba selecionada
  const filteredProcessos = processos.filter(processo => {
    // Filtro de pesquisa
    const matchesSearch = 
      processo.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
      processo.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      processo.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      processo.comarca.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtro de abas
    const matchesTab = 
      currentTab === "todos" || 
      (currentTab === "em-andamento" && processo.status === "Em andamento") ||
      (currentTab === "concluidos" && processo.status === "Concluído") ||
      (currentTab === "suspensos" && processo.status === "Suspenso");
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="chimelo-section bg-gray-50">
          <div className="chimelo-container">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Processos</h1>
              <p className="text-chimelo-silver max-w-2xl mx-auto">
                Consulte aqui informações sobre os processos em andamento e concluídos 
                do escritório Chimelo Advogados & Associados.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-chimelo-silver h-4 w-4" />
                <Input
                  placeholder="Pesquisar por número, cliente, tipo ou comarca..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <Tabs defaultValue="todos" onValueChange={setCurrentTab}>
              <TabsList className="w-full justify-start mb-6 bg-transparent border-b border-chimelo-lightgray/20 p-0 h-auto">
                <TabsTrigger 
                  value="todos" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-chimelo-black data-[state=active]:bg-transparent"
                >
                  Todos
                </TabsTrigger>
                <TabsTrigger 
                  value="em-andamento"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-chimelo-black data-[state=active]:bg-transparent"
                >
                  Em andamento
                </TabsTrigger>
                <TabsTrigger 
                  value="concluidos"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-chimelo-black data-[state=active]:bg-transparent"
                >
                  Concluídos
                </TabsTrigger>
                <TabsTrigger 
                  value="suspensos"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-chimelo-black data-[state=active]:bg-transparent"
                >
                  Suspensos
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="todos" className="mt-0">
                {filteredProcessos.length > 0 ? (
                  <div className="space-y-2">
                    {filteredProcessos.map((processo, index) => (
                      <ProcessoCard key={index} processo={processo} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 bg-white rounded-lg border border-chimelo-lightgray/20">
                    <p>Nenhum processo encontrado com os critérios de pesquisa.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="em-andamento" className="mt-0">
                {filteredProcessos.length > 0 ? (
                  <div className="space-y-2">
                    {filteredProcessos.map((processo, index) => (
                      <ProcessoCard key={index} processo={processo} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 bg-white rounded-lg border border-chimelo-lightgray/20">
                    <p>Nenhum processo em andamento encontrado com os critérios de pesquisa.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="concluidos" className="mt-0">
                {filteredProcessos.length > 0 ? (
                  <div className="space-y-2">
                    {filteredProcessos.map((processo, index) => (
                      <ProcessoCard key={index} processo={processo} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 bg-white rounded-lg border border-chimelo-lightgray/20">
                    <p>Nenhum processo concluído encontrado com os critérios de pesquisa.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="suspensos" className="mt-0">
                {filteredProcessos.length > 0 ? (
                  <div className="space-y-2">
                    {filteredProcessos.map((processo, index) => (
                      <ProcessoCard key={index} processo={processo} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 bg-white rounded-lg border border-chimelo-lightgray/20">
                    <p>Nenhum processo suspenso encontrado com os critérios de pesquisa.</p>
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

export default ProcessosPage;
