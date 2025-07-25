
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminLoginPage from "./pages/AdminLoginPage";
import { AdminProvider } from "./hooks/useAdmin";
import AdminRoute from "./components/auth/AdminRoute";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import ProcessosPage from "./pages/admin/ProcessosPage";
import AssembleiasPage from "./pages/admin/AssembleiasPage";
import NoticiasPage from "./pages/admin/NoticiasPage";
import UsuariosPage from "./pages/admin/UsuariosPage";
import ConfiguracoesPage from "./pages/admin/ConfiguracoesPage";

// Import das páginas
import QuemSomosPage from "./pages/QuemSomosPage";
import SociosPage from "./pages/SociosPage";
import AreasAtuacaoPage from "./pages/AreasAtuacaoPage";
import NoticiaDetalhe from "./pages/NoticiaDetalhe";
import ContatoPage from "./pages/ContatoPage";
// Renaming the import to avoid conflict with admin NoticiasPage
import DestaquesPage from "./pages/NoticiasPage";

const App = () => {
  // Create QueryClient inside the component to ensure proper hook context
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Rotas públicas */}
            <Route path="/" element={<Index />} />
            <Route path="/quem-somos" element={<QuemSomosPage />} />
            <Route path="/time" element={<SociosPage />} />
            <Route path="/areas-de-atuacao" element={<AreasAtuacaoPage />} />
            <Route path="/destaques" element={<DestaquesPage />} />
            <Route path="/destaques/:slug" element={<NoticiaDetalhe />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />

            {/* Rotas administrativas protegidas */}
            <Route element={
              <AdminProvider>
                <AdminRoute />
              </AdminProvider>
            }>
              <Route element={<AdminLayout />}>
                <Route path="/admin" element={<AdminDashboardPage />} />
                <Route path="/admin/processos" element={<ProcessosPage />} />
                <Route path="/admin/assembleias" element={<AssembleiasPage />} />
                <Route path="/admin/noticias" element={<NoticiasPage />} />
                <Route path="/admin/usuarios" element={<UsuariosPage />} />
                <Route path="/admin/configuracoes" element={<ConfiguracoesPage />} />
              </Route>
            </Route>

            {/* Página não encontrada */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
