
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash, FileText } from "lucide-react";

const AssembleiasPage: React.FC = () => {
  // Dados de exemplo
  const assembleias = [
    {
      id: 1,
      titulo: "Assembleia Ordinária - 2° Trimestre/2025",
      tipo: "Ordinária",
      data: "15/06/2025",
      documentos: 3,
      status: "Agendada"
    },
    {
      id: 2,
      titulo: "Assembleia Extraordinária - Aumento de Capital",
      tipo: "Extraordinária",
      data: "05/05/2025",
      documentos: 5,
      status: "Realizada"
    },
    {
      id: 3,
      titulo: "Assembleia Ordinária - 1° Trimestre/2025",
      tipo: "Ordinária",
      data: "20/03/2025",
      documentos: 4,
      status: "Realizada"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Assembleias</h2>
          <p className="text-chimelo-silver">Gerencie as assembleias e documentos associados.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nova Assembleia
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-chimelo-silver" />
          <Input
            type="search"
            placeholder="Buscar assembleias..."
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <select className="h-10 w-full md:w-[180px] rounded-md border border-input px-3 py-2 text-sm">
            <option value="">Todos os tipos</option>
            <option value="ordinaria">Ordinária</option>
            <option value="extraordinaria">Extraordinária</option>
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
                <th className="h-12 px-4 text-left align-middle font-medium">Título</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Tipo</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Data</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                <th className="h-12 px-4 text-center align-middle font-medium">Documentos</th>
                <th className="h-12 px-4 text-right align-middle font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {assembleias.map((assembleia) => (
                <tr 
                  key={assembleia.id} 
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-4 align-middle font-medium">{assembleia.titulo}</td>
                  <td className="p-4 align-middle">{assembleia.tipo}</td>
                  <td className="p-4 align-middle">{assembleia.data}</td>
                  <td className="p-4 align-middle">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      assembleia.status === "Realizada" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {assembleia.status}
                    </span>
                  </td>
                  <td className="p-4 align-middle text-center">
                    <div className="flex items-center justify-center">
                      <FileText className="h-4 w-4 mr-1 text-chimelo-silver" />
                      <span>{assembleia.documentos}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-chimelo-silver">
          Mostrando <span className="font-medium">3</span> de <span className="font-medium">3</span> assembleias
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

export default AssembleiasPage;
