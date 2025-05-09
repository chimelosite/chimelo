
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Assembleia {
  id: string;
  titulo: string;
  tipo: string;
  data: string;
  status: string;
}

const AssembleiasPanel: React.FC = () => {
  const [assembleias, setAssembleias] = useState<Assembleia[]>([
    { id: "1", titulo: "Assembleia Ordinária - 2° Trimestre/2025", tipo: "Ordinária", data: "15/06/2025", status: "Agendada" },
    { id: "2", titulo: "Assembleia Extraordinária - Aumento de Capital", tipo: "Extraordinária", data: "05/05/2025", status: "Realizada" },
  ]);

  const [novaAssembleia, setNovaAssembleia] = useState({
    titulo: "",
    tipo: "Ordinária",
    data: "",
    local: "",
    descricao: "",
    status: "Agendada"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNovaAssembleia({ ...novaAssembleia, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newAssembleia: Assembleia = {
      id: Date.now().toString(),
      titulo: novaAssembleia.titulo,
      tipo: novaAssembleia.tipo,
      data: novaAssembleia.data,
      status: novaAssembleia.status,
    };
    
    setAssembleias([...assembleias, newAssembleia]);
    setNovaAssembleia({
      titulo: "",
      tipo: "Ordinária",
      data: "",
      local: "",
      descricao: "",
      status: "Agendada"
    });
  };

  const handleDelete = (id: string) => {
    setAssembleias(assembleias.filter(assembleia => assembleia.id !== id));
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Gerenciar Assembleias</h3>
        
        <div className="bg-gray-50 p-6 rounded-md">
          <h4 className="font-medium mb-4">Adicionar Nova Assembleia</h4>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Título da Assembleia</label>
              <Input 
                name="titulo" 
                placeholder="Título da Assembleia"
                value={novaAssembleia.titulo}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Tipo</label>
                <Select 
                  name="tipo" 
                  value={novaAssembleia.tipo} 
                  onValueChange={(value) => setNovaAssembleia({...novaAssembleia, tipo: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ordinária">Ordinária</SelectItem>
                    <SelectItem value="Extraordinária">Extraordinária</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Data</label>
                <Input 
                  type="date" 
                  name="data"
                  value={novaAssembleia.data}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <Select 
                  name="status" 
                  value={novaAssembleia.status} 
                  onValueChange={(value) => setNovaAssembleia({...novaAssembleia, status: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Agendada">Agendada</SelectItem>
                    <SelectItem value="Realizada">Realizada</SelectItem>
                    <SelectItem value="Cancelada">Cancelada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Local</label>
              <Input 
                name="local" 
                placeholder="Local da assembleia"
                value={novaAssembleia.local}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Descrição</label>
              <Textarea 
                name="descricao" 
                placeholder="Descrição da assembleia"
                value={novaAssembleia.descricao}
                onChange={handleChange}
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Documentos</label>
              <Input type="file" multiple className="cursor-pointer" />
              <p className="text-xs text-gray-500 mt-1">Você pode adicionar múltiplos documentos</p>
            </div>
            
            <div className="flex justify-end">
              <Button type="submit" className="bg-black hover:bg-gray-800">
                Adicionar Assembleia
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-4">Assembleias Existentes</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left font-medium">TÍTULO</th>
                <th className="py-2 px-4 text-left font-medium">TIPO</th>
                <th className="py-2 px-4 text-left font-medium">DATA</th>
                <th className="py-2 px-4 text-left font-medium">STATUS</th>
                <th className="py-2 px-4 text-right font-medium">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {assembleias.map((assembleia) => (
                <tr key={assembleia.id} className="border-b">
                  <td className="py-3 px-4">{assembleia.titulo}</td>
                  <td className="py-3 px-4">{assembleia.tipo}</td>
                  <td className="py-3 px-4">{assembleia.data}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      assembleia.status === "Realizada" 
                        ? "bg-green-100 text-green-800" 
                        : assembleia.status === "Cancelada"
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                    }`}>
                      {assembleia.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-blue-600 hover:underline mr-3">Editar</button>
                    <button 
                      className="text-red-600 hover:underline"
                      onClick={() => handleDelete(assembleia.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssembleiasPanel;
