
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Processo {
  id: string;
  numero: string;
  cliente: string;
  status: string;
}

const ProcessosPanel: React.FC = () => {
  const [processos, setProcessos] = useState<Processo[]>([
    { id: "1", numero: "0001234-56.2023.8.26.0100", cliente: "Empresa ABC Ltda.", status: "Em andamento" },
    { id: "2", numero: "0002345-67.2023.8.26.0100", cliente: "Empresa XYZ S.A.", status: "Concluído" },
  ]);

  const [novoProcesso, setNovoProcesso] = useState({
    numero: "",
    cliente: "",
    vara: "",
    status: "Em andamento",
    descricao: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNovoProcesso({ ...novoProcesso, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProcess: Processo = {
      id: Date.now().toString(),
      numero: novoProcesso.numero,
      cliente: novoProcesso.cliente,
      status: novoProcesso.status,
    };
    
    setProcessos([...processos, newProcess]);
    setNovoProcesso({
      numero: "",
      cliente: "",
      vara: "",
      status: "Em andamento",
      descricao: "",
    });
  };

  const handleDelete = (id: string) => {
    setProcessos(processos.filter(processo => processo.id !== id));
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Gerenciar Processos</h3>
        
        <div className="bg-gray-50 p-6 rounded-md">
          <h4 className="font-medium mb-4">Adicionar Novo Processo</h4>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Número do Processo</label>
                <Input 
                  name="numero" 
                  placeholder="0000000-00.0000.0.00.0000" 
                  value={novoProcesso.numero}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Cliente</label>
                <Input 
                  name="cliente" 
                  placeholder="Nome do Cliente" 
                  value={novoProcesso.cliente}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Vara</label>
                <Input 
                  name="vara" 
                  placeholder="Vara Judicial" 
                  value={novoProcesso.vara}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select 
                  name="status"
                  value={novoProcesso.status}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input px-3 py-2 h-10"
                >
                  <option value="Em andamento">Em andamento</option>
                  <option value="Concluído">Concluído</option>
                  <option value="Aguardando documentação">Aguardando documentação</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Descrição</label>
              <Textarea 
                name="descricao" 
                placeholder="Descrição do processo"
                value={novoProcesso.descricao}
                onChange={handleChange}
                rows={5}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Anexos</label>
              <Input type="file" multiple className="cursor-pointer" />
              <p className="text-xs text-gray-500 mt-1">Você pode adicionar múltiplos arquivos</p>
            </div>
            
            <div className="flex justify-end">
              <Button type="submit" className="bg-black hover:bg-gray-800">
                Adicionar Processo
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-4">Processos Existentes</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left font-medium">PROCESSO</th>
                <th className="py-2 px-4 text-left font-medium">CLIENTE</th>
                <th className="py-2 px-4 text-left font-medium">STATUS</th>
                <th className="py-2 px-4 text-right font-medium">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {processos.map((processo) => (
                <tr key={processo.id} className="border-b">
                  <td className="py-3 px-4">{processo.numero}</td>
                  <td className="py-3 px-4">{processo.cliente}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      processo.status === "Concluído" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {processo.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-blue-600 hover:underline mr-3">Editar</button>
                    <button 
                      className="text-red-600 hover:underline"
                      onClick={() => handleDelete(processo.id)}
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

export default ProcessosPanel;
