
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  tipo: "empresa" | "pessoa-fisica" | "outro";
}

const ContactForm: React.FC = () => {
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
      
      // URL da função edge do Supabase
      const functionUrl = "https://ofickeaxqyfvcpcughrx.functions.supabase.co/send-contact-email";
      
      // Enviar dados para a função edge
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || ""}`,
        },
        body: JSON.stringify({
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          assunto: data.assunto,
          mensagem: data.mensagem,
          tipo: data.tipo
        })
      });
      
      // Verificar se a resposta é bem-sucedida
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("Erro na resposta HTTP:", response.status, errorData);
        throw new Error(errorData?.error || `Erro ${response.status}: O servidor não pôde processar a solicitação`);
      }

      const result = await response.json();
      
      console.log("Resposta do servidor:", result);
      
      if (result.success) {
        // Também salvar diretamente na tabela (redundância para caso a função falhe)
        const { error: dbError } = await supabase
          .from('contatos')
          .insert({
            nome: data.nome,
            email: data.email,
            telefone: data.telefone,
            assunto: data.assunto,
            mensagem: data.mensagem,
            tipo: data.tipo
          });
          
        if (dbError) {
          console.warn("Aviso: Dados salvos via função edge, mas falha ao salvar diretamente:", dbError);
        }
        
        toast({
          title: "Mensagem enviada",
          description: "Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.",
        });
        reset();
      } else {
        throw new Error(result.error || "Falha ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: error.message || "Erro ao enviar mensagem. Por favor, tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleTipoChange = (value: string) => {
    setValue("tipo", value as "empresa" | "pessoa-fisica" | "outro");
  };

  return (
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
  );
};

export default ContactForm;
