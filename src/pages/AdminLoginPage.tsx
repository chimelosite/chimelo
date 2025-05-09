
import React from "react";
import AdminLogin from "@/components/auth/AdminLogin";
import { Link } from "react-router-dom";

const AdminLoginPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 px-6 bg-white border-b border-chimelo-lightgray/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/public/lovable-uploads/e96dac0d-17ec-4820-b30d-1cca6c017987.png" 
              alt="Chimelo Advogados e Associados" 
              className="h-8" 
            />
          </Link>
        </div>
      </header>
      
      <main className="flex-grow bg-gray-50">
        <AdminLogin />
      </main>
      
      <footer className="py-4 px-6 bg-white border-t border-chimelo-lightgray/20">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-chimelo-silver text-center">
            &copy; {new Date().getFullYear()} Chimelo Advogados e Associados. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AdminLoginPage;
