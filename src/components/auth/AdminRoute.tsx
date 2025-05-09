
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAdmin } from "@/hooks/useAdmin";
import { Loader2 } from "lucide-react";

const AdminRoute: React.FC = () => {
  const { isAuthenticated, loading } = useAdmin();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-chimelo-black" />
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin-login" replace />;
};

export default AdminRoute;
