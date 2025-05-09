
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import ProcessosPanel from "./ProcessosPanel";
import NoticiasPanel from "./NoticiasPanel";
import AssembleiasPanel from "./AssembleiasPanel";

interface AdminTabsProps {
  onClose: () => void;
}

const AdminTabs: React.FC<AdminTabsProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("processos");

  return (
    <div className="bg-white rounded-md shadow-lg max-w-6xl mx-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-2xl font-bold">Painel Administrativo</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b">
          <TabsList className="bg-transparent h-auto p-0">
            <TabsTrigger 
              value="processos" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-6 py-3"
            >
              Processos
            </TabsTrigger>
            <TabsTrigger 
              value="assembleias" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-6 py-3"
            >
              Assembleias
            </TabsTrigger>
            <TabsTrigger 
              value="noticias" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-6 py-3"
            >
              Notícias
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="processos" className="mt-0 p-0">
          <ProcessosPanel />
        </TabsContent>
        
        <TabsContent value="assembleias" className="mt-0 p-0">
          <AssembleiasPanel />
        </TabsContent>
        
        <TabsContent value="noticias" className="mt-0 p-0">
          <NoticiasPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminTabs;
