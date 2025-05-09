
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash, UserCheck, UserX } from "lucide-react";

const UsuariosPage: React.FC = () => {
  // Dados de exemplo
  const usuarios = [
    {
      id: 1,
      nome: "Administrador Principal",
      email: "admin@chimelo.com.br",
      cargo: "Administrador",
      status: "Ativo",
      ultimoLogin: "09/05/2025, 10:25"
    },
    {
      id: 2,
      nome: "João Silva",
      email: "joao.silva@chimelo.com.br",
      cargo: "Editor",
      status: "Ativo",
      ultimoLogin: "08/05/2025, 14:37"
    },
    {
      id: 3,
      nome: "Maria Oliveira",
      email: "maria.oliveira@chimelo.com.br",
      cargo: "Editor",
      status: "Pendente",
      ultimoLogin: "Nunca"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Usuários</h2>
          <p className="text-chimelo-silver">Gerencie os usuários do painel administrativo.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Usuário
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-chimelo-silver" />
          <Input
            type="search"
            placeholder="Buscar usuários..."
            className="pl-9"
          />
        </div>
        <select className="h-10 w-full sm:w-[180px] rounded-md border border-input px-3 py-2 text-sm">
          <option value="">Todos os status</option>
          <option value="ativo">Ativo</option>
          <option value="pendente">Pendente</option>
          <option value="inativo">Inativo</option>
        </select>
      </div>
      
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 bg-chimelo-black/5">
                <th className="h-12 px-4 text-left align-middle font-medium">Nome</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Cargo</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Último Login</th>
                <th className="h-12 px-4 text-right align-middle font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {usuarios.map((usuario) => (
                <tr 
                  key={usuario.id} 
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-4 align-middle font-medium">{usuario.nome}</td>
                  <td className="p-4 align-middle">{usuario.email}</td>
                  <td className="p-4 align-middle">{usuario.cargo}</td>
                  <td className="p-4 align-middle">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      usuario.status === "Ativo" 
                        ? "bg-green-100 text-green-800" 
                        : usuario.status === "Pendente"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}>
                      {usuario.status}
                    </span>
                  </td>
                  <td className="p-4 align-middle">{usuario.ultimoLogin}</td>
                  <td className="p-4 align-middle text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      {usuario.status === "Pendente" ? (
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-green-500 hover:text-green-700 hover:bg-green-50">
                          <UserCheck className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50">
                          <UserX className="h-4 w-4" />
                        </Button>
                      )}
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
          Mostrando <span className="font-medium">3</span> de <span className="font-medium">3</span> usuários
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

export default UsuariosPage;
