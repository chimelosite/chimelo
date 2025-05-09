import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { 
  Menu, X, Home, FileText, Calendar, 
  Newspaper, Settings, LogOut, Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdmin } from "@/hooks/useAdmin";
import { toast } from "sonner";

const Sidebar: React.FC<{ isOpen: boolean; setIsOpen: (open: boolean) => void }> = ({ 
  isOpen, 
  setIsOpen 
}) => {
  const location = useLocation();
  const { logout, adminUser } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Sessão encerrada com sucesso");
    navigate("/admin-login");
  };

  const menuItems = [
    { icon: <Home className="h-5 w-5" />, name: "Dashboard", path: "/admin" },
    { icon: <FileText className="h-5 w-5" />, name: "Processos", path: "/admin/processos" },
    { icon: <Calendar className="h-5 w-5" />, name: "Assembleias", path: "/admin/assembleias" },
    { icon: <Newspaper className="h-5 w-5" />, name: "Notícias", path: "/admin/noticias" },
    { icon: <Users className="h-5 w-5" />, name: "Usuários", path: "/admin/usuarios" },
    { icon: <Settings className="h-5 w-5" />, name: "Configurações", path: "/admin/configuracoes" },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-20 lg:hidden transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <aside className={`fixed top-0 left-0 h-full w-64 bg-chimelo-black text-white shadow-lg z-30 transition-transform lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } flex flex-col`}>
        <div className="p-4 border-b border-white/10">
          <div className="flex justify-between items-center">
            <Link to="/admin" className="flex items-center">
              <img 
                src="/public/lovable-uploads/e96dac0d-17ec-4820-b30d-1cca6c017987.png" 
                alt="Chimelo Admin" 
                className="h-8 brightness-0 invert" 
              />
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-white hover:bg-white/10" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-3 py-2">
            <div className="mb-2 px-4 py-2">
              <p className="text-xs text-chimelo-silver">Logado como</p>
              <p className="font-medium truncate">{adminUser?.name || 'Administrador'}</p>
              <p className="text-xs text-chimelo-silver truncate">{adminUser?.email}</p>
            </div>
          </div>
          
          <nav className="space-y-1 px-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-2 text-sm rounded-md ${
                  location.pathname === item.path
                    ? 'bg-white/10 text-white'
                    : 'text-chimelo-silver hover:bg-white/5 hover:text-white'
                } transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-white/10">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-chimelo-silver hover:text-white hover:bg-white/5"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sair
          </Button>
        </div>
      </aside>
    </>
  );
};

const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="lg:pl-64">
        <div className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="flex h-16 items-center px-4 lg:px-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden" 
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="ml-4 lg:ml-0 text-lg font-medium">Painel Administrativo</h1>
          </div>
        </div>
        
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
