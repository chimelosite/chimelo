
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AdminUser {
  isAdmin: boolean;
  email: string;
  name: string;
}

interface AdminContextType {
  adminUser: AdminUser | null;
  isAuthenticated: boolean;
  login: (user: AdminUser) => void;
  logout: () => void;
  loading: boolean;
}

const defaultAdminContext: AdminContextType = {
  adminUser: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  loading: true,
};

const AdminContext = createContext<AdminContextType>(defaultAdminContext);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const storedAuth = localStorage.getItem('chimeloAdminAuth');
    if (storedAuth) {
      try {
        const parsedAuth = JSON.parse(storedAuth);
        if (parsedAuth && parsedAuth.isAdmin) {
          setAdminUser(parsedAuth);
        }
      } catch (error) {
        console.error('Error parsing admin auth data', error);
        localStorage.removeItem('chimeloAdminAuth');
      }
    }
    setLoading(false);
  }, []);

  const login = (user: AdminUser) => {
    setAdminUser(user);
    localStorage.setItem('chimeloAdminAuth', JSON.stringify(user));
  };

  const logout = () => {
    setAdminUser(null);
    localStorage.removeItem('chimeloAdminAuth');
    navigate('/admin-login');
  };

  return (
    <AdminContext.Provider
      value={{
        adminUser,
        isAuthenticated: !!adminUser,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);

export default useAdmin;
