
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Noticia {
  id: string;
  titulo: string;
  data: string;
  autor: string;
  status: string;
}

const NoticiasPanel: React.FC = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([
    { id: "1", titulo: "Novidades na legislação trabalhista em 2025", data: "05/05/2025", autor: "Maria Silva", status: "Publicado" },
    { id: "2", titulo: "Implicações jurídicas da inteligência artificial nos negócios", data: "28/04/2025", autor: "João Pereira", status: "Publicado" },
  ]);

  const [novaNoticia, setNovaNoticia] = useState({
    titulo: "",
    autor: "",
    conteudo: "",
    resumo: "",
    status: "Publicado",
    data: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNovaNoticia({ ...novaNoticia, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedDate = new Date(novaNoticia.data).toLocaleDateString('pt-BR');
    
    const newNoticia: Noticia = {
      id: Date.now().toString(),
      titulo: novaNoticia.titulo,
      data: formattedDate,
      autor: novaNoticia.autor,
      status: novaNoticia.status,
    };
    
    setNoticias([...noticias, newNoticia]);
    setNovaNoticia({
      titulo: "",
      autor: "",
      conteudo: "",
      resumo: "",
      status: "Publicado",
      data: new Date().toISOString().split('T')[0]
    });
  };

  const handleDelete = (id: string) => {
    setNoticias(noticias.filter(noticia => noticia.id !== id));
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Gerenciar Notícias</h3>
        
        <div className="bg-gray-50 p-6 rounded-md">
          <h4 className="font-medium mb-4">Adicionar Nova Notícia</h4>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Título</label>
              <Input 
                name="titulo" 
                placeholder="Título da notícia"
                value={novaNoticia.titulo}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Autor</label>
                <Input 
                  name="autor" 
                  placeholder="Nome do autor"
                  value={novaNoticia.autor}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Data</label>
                <Input 
                  type="date" 
                  name="data"
                  value={novaNoticia.data}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select 
                  name="status"
                  value={novaNoticia.status}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input px-3 py-2 h-10"
                >
                  <option value="Publicado">Publicado</option>
                  <option value="Rascunho">Rascunho</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Resumo</label>
              <Textarea 
                name="resumo" 
                placeholder="Breve resumo da notícia"
                value={novaNoticia.resumo}
                onChange={handleChange}
                rows={2}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Conteúdo</label>
              <Textarea 
                name="conteudo" 
                placeholder="Conteúdo completo da notícia"
                value={novaNoticia.conteudo}
                onChange={handleChange}
                rows={5}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Imagens</label>
              <Input type="file" accept="image/*" multiple className="cursor-pointer" />
              <p className="text-xs text-gray-500 mt-1">Você pode adicionar múltiplas imagens</p>
            </div>
            
            <div className="flex justify-end">
              <Button type="submit" className="bg-black hover:bg-gray-800">
                Adicionar Notícia
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-4">Notícias Existentes</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left font-medium">TÍTULO</th>
                <th className="py-2 px-4 text-left font-medium">DATA</th>
                <th className="py-2 px-4 text-left font-medium">AUTOR</th>
                <th className="py-2 px-4 text-left font-medium">STATUS</th>
                <th className="py-2 px-4 text-right font-medium">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {noticias.map((noticia) => (
                <tr key={noticia.id} className="border-b">
                  <td className="py-3 px-4">{noticia.titulo}</td>
                  <td className="py-3 px-4">{noticia.data}</td>
                  <td className="py-3 px-4">{noticia.autor}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      noticia.status === "Publicado" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {noticia.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="text-blue-600 hover:underline mr-3">Editar</button>
                    <button 
                      className="text-red-600 hover:underline"
                      onClick={() => handleDelete(noticia.id)}
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

export default NoticiasPanel;
