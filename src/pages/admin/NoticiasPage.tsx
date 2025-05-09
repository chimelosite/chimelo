
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash } from "lucide-react";

const NoticiasPage: React.FC = () => {
  // Dados de exemplo
  const noticias = [
    {
      id: 1,
      titulo: "Novidades na legislação trabalhista em 2025",
      resumo: "Conheça as principais mudanças na legislação trabalhista que entrarão em vigor em 2025 e como elas afetam sua empresa.",
      data: "05/05/2025",
      autor: "Maria Silva",
      status: "Publicado"
    },
    {
      id: 2,
      titulo: "Implicações jurídicas da inteligência artificial nos negócios",
      resumo: "A inteligência artificial está transformando o ambiente de negócios. Entenda as implicações jurídicas dessa revolução.",
      data: "28/04/2025",
      autor: "João Pereira",
      status: "Publicado"
    },
    {
      id: 3,
      titulo: "Chimelo Advogados participa de congresso internacional de direito empresarial",
      resumo: "Nosso escritório marcou presença no maior congresso internacional de direito empresarial, trazendo insights valiosos para nossos clientes.",
      data: "15/04/2025",
      autor: "Carlos Mendes",
      status: "Publicado"
    },
    {
      id: 4,
      titulo: "Novas tendências em contratos empresariais para 2025",
      resumo: "Descubra as novas tendências em contratos empresariais para 2025 e como elas podem impactar seu negócio.",
      data: "10/04/2025",
      autor: "Ana Ferreira",
      status: "Rascunho"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Notícias</h2>
          <p className="text-chimelo-silver">Gerencie as notícias e artigos do site.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nova Notícia
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-chimelo-silver" />
          <Input
            type="search"
            placeholder="Buscar notícias..."
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <select className="h-10 w-full md:w-[180px] rounded-md border border-input px-3 py-2 text-sm">
            <option value="">Todos os status</option>
            <option value="publicado">Publicado</option>
            <option value="rascunho">Rascunho</option>
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
                <th className="h-12 px-4 text-left align-middle font-medium">Data</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Autor</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                <th className="h-12 px-4 text-right align-middle font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {noticias.map((noticia) => (
                <tr 
                  key={noticia.id} 
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-4 align-middle font-medium">{noticia.titulo}</td>
                  <td className="p-4 align-middle">{noticia.data}</td>
                  <td className="p-4 align-middle">{noticia.autor}</td>
                  <td className="p-4 align-middle">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      noticia.status === "Publicado" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {noticia.status}
                    </span>
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
          Mostrando <span className="font-medium">4</span> de <span className="font-medium">4</span> notícias
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

export default NoticiasPage;
