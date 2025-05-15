
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Linkedin, Instagram, MessageSquare, Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  tipo: "empresa" | "pessoa-fisica" | "outro";
}

const ContatoPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, setValue, watch } = useForm<FormData>({
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
      tipo: "empresa"
    }
  });
  
  const selectedTipo = watch("tipo");
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      console.log("Enviando formulário:", data);
      
      // Corrigindo a URL para usar a função Supabase diretamente
      // URL incorreta: ${window.location.origin}/api/send-contact-email
      // URL correta: Usando endpoint da função Supabase
      const functionUrl = "https://fejjviqdioglbvdrwmop.functions.supabase.co/send-contact-email";
      
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'contato@chimelo.com.br',
          subject: `Novo contato via site: ${data.assunto}`,
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          mensagem: data.mensagem,
          tipo: data.tipo
        })
      });
      
      // Verificar se a resposta é bem-sucedida
      if (!response.ok) {
        // Se não for bem-sucedido, obter texto do erro ao invés de JSON
        const errorText = await response.text();
        console.error("Erro na resposta HTTP:", response.status, errorText);
        throw new Error(`Erro ${response.status}: O servidor não pôde processar a solicitação`);
      }

      // Verificar se o Content-Type é de fato JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Resposta não é JSON:", contentType, "Conteúdo:", text);
        throw new Error("Formato de resposta inválido do servidor");
      }
      
      const result = await response.json();
      
      console.log("Resposta do servidor:", result);
      toast({
        title: "Mensagem enviada",
        description: "Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.",
      });
      reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao enviar mensagem. Por favor, tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleTipoChange = (value: string) => {
    setValue("tipo", value as "empresa" | "pessoa-fisica" | "outro");
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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="tipo">Você é:</Label>
                    <RadioGroup 
                      value={selectedTipo} 
                      onValueChange={handleTipoChange}
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
                        {...register("nome", { required: true })}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email", { required: true })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefone">Telefone *</Label>
                        <Input
                          id="telefone"
                          {...register("telefone", { required: true })}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="assunto">Assunto *</Label>
                      <Input
                        id="assunto"
                        {...register("assunto", { required: true })}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        rows={5}
                        {...register("mensagem", { required: true })}
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
                          contato@chimelo.com.br
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
