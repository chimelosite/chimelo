
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

const ProcessosPage: React.FC = () => {
  // Dados de exemplo
  const processos = [
    {
      id: 1,
      numero: "12345-67.2023.8.26.0100",
      titulo: "Ação Trabalhista - Empresa ABC",
      data: "07/05/2025",
      status: "Em andamento",
      documentos: 5
    },
    {
      id: 2,
      numero: "54321-67.2023.8.26.0100",
      titulo: "Processo Tributário - Empresa XYZ",
      data: "01/05/2025",
      status: "Concluído",
      documentos: 3
    },
    {
      id: 3,
      numero: "98765-43.2024.8.26.0100",
      titulo: "Ação Cível - Cliente João Silva",
      data: "15/04/2025",
      status: "Em andamento",
      documentos: 7
    },
    {
      id: 4,
      numero: "45678-90.2024.8.26.0100",
      titulo: "Processo Administrativo - Órgão Público",
      data: "02/04/2025",
      status: "Aguardando documentação",
      documentos: 2
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Processos</h2>
          <p className="text-chimelo-silver">Gerencie os processos do escritório.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Processo
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-chimelo-silver" />
          <Input
            type="search"
            placeholder="Buscar processos..."
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <select className="h-10 w-full md:w-[180px] rounded-md border border-input px-3 py-2 text-sm">
            <option value="">Todos os status</option>
            <option value="em-andamento">Em andamento</option>
            <option value="concluido">Concluído</option>
            <option value="aguardando">Aguardando documentação</option>
          </select>
          <select className="h-10 w-full md:w-[180px] rounded-md border border-input px-3 py-2 text-sm">
            <option value="">Ordenar por</option>
            <option value="data-desc">Data (mais recente)</option>
            <option value="data-asc">Data (mais antiga)</option>
            <option value="titulo">Título (A-Z)</option>
          </select>
        </div>
      </div>
      
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 bg-chimelo-black/5">
                <th className="h-12 px-4 text-left align-middle font-medium">Número</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Título</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Data</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Documentos</th>
                <th className="h-12 px-4 text-right align-middle font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {processos.map((processo) => (
                <tr 
                  key={processo.id} 
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-4 align-middle font-medium">{processo.numero}</td>
                  <td className="p-4 align-middle">{processo.titulo}</td>
                  <td className="p-4 align-middle">{processo.data}</td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center rounded-full px-2 py-1 text-xs bg-chimelo-black/10">
                      {processo.status}
                    </span>
                  </td>
                  <td className="p-4 align-middle">{processo.documentos}</td>
                  <td className="p-4 align-middle text-right">
                    <Button variant="outline" size="sm">
                      Gerenciar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-chimelo-silver">
          Mostrando <span className="font-medium">4</span> de <span className="font-medium">4</span> processos
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Anterior
          </Button>
          <Button variant="outline" size="sm" disabled>
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProcessosPage;
