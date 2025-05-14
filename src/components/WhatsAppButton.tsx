
import React from "react";
import { WhatsApp } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phoneNumber: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  className,
}) => {
  const formattedNumber = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${formattedNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110",
        className
      )}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsApp size={28} />
    </a>
  );
};

export default WhatsAppButton;
