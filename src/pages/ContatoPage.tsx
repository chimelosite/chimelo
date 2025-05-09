import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Linkedin, Instagram, MessageSquare, Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  tipo: "empresa" | "pessoa-fisica" | "outro";
}

const ContatoPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    tipo: "empresa"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleTipoChange = (value: "empresa" | "pessoa-fisica" | "outro") => {
    setFormData(prev => ({ ...prev, tipo: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.");
      
      // Reset form
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
        tipo: "empresa"
      });
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="chimelo-section">
          <div className="chimelo-container">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h1>
              <p className="text-chimelo-silver max-w-2xl mx-auto">
                Estamos à disposição para atender às suas necessidades jurídicas. 
                Entre em contato conosco através do formulário abaixo ou por nossos canais diretos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="tipo">Você é:</Label>
                    <RadioGroup 
                      id="tipo" 
                      value={formData.tipo} 
                      onValueChange={handleTipoChange as (value: string) => void}
                      className="flex space-x-4 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="empresa" id="empresa" />
                        <Label htmlFor="empresa" className="cursor-pointer">Empresa</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pessoa-fisica" id="pessoa-fisica" />
                        <Label htmlFor="pessoa-fisica" className="cursor-pointer">Pessoa Física</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="outro" id="outro" />
                        <Label htmlFor="outro" className="cursor-pointer">Outro</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="nome">Nome completo *</Label>
                      <Input
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefone">Telefone *</Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="assunto">Assunto *</Label>
                      <Input
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        rows={5}
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-xs text-chimelo-silver text-center">
                    Ao enviar este formulário, você concorda com nossa política de privacidade.
                  </p>
                </form>
              </div>
              
              <div>
                <div className="bg-chimelo-black text-white p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-4 mt-1 text-chimelo-silver" />
                      <div>
                        <h3 className="font-medium">Endereço</h3>
                        <p className="text-chimelo-silver mt-1">
                          R. Carlos Huber, 110<br />
                          Três Figueiras<br />
                          Porto Alegre - RS, 91330-150
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-4 mt-1 text-chimelo-silver" />
                      <div>
                        <h3 className="font-medium">Telefones</h3>
                        <p className="text-chimelo-silver mt-1">
                          +55 (51) 99178-6703
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-4 mt-1 text-chimelo-silver" />
                      <div>
                        <h3 className="font-medium">E-mail</h3>
                        <p className="text-chimelo-silver mt-1">
                          contato@chimelo.com.br<br />
                          atendimento@chimelo.com.br
                        </p>
                      </div>
                    </div>
                    
                    <div className="border-t border-white/10 pt-6">
                      <h3 className="font-medium mb-4">Redes Sociais</h3>
                      <div className="flex space-x-4">
                        <a 
                          href="https://linkedin.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a 
                          href="https://instagram.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                        <a 
                          href="https://wa.me/5551991786703" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <MessageSquare className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="border-t border-white/10 pt-6">
                      <h3 className="font-medium mb-4">Horário de Atendimento</h3>
                      <p className="text-chimelo-silver">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábados e Domingos: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.602995631473!2d-51.18809742334801!3d-30.048866274986928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979853d3ef3dd%3A0xc4c780b5a49c9209!2sR.%20Carlos%20Huber%2C%20110%20-%20Tr%C3%AAs%20Figueiras%2C%20Porto%20Alegre%20-%20RS%2C%2091330-150!5e0!3m2!1spt-BR!2sbr!4v1683141395388!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                title="Localização do escritório"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContatoPage;
