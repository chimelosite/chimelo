
import React from "react";
import AdminTabs from "./admin/AdminTabs";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <AdminTabs onClose={onClose} />
      </div>
    </div>
  );
};

export default AdminModal;
