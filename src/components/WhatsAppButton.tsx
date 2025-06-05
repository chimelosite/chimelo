
import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
      style={{ backgroundColor: '#25D366' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#1da851';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#25D366';
      }}
      aria-label="Entrar em contato via WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </button>
  );
};

export default WhatsAppButton;
