
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Schema de validação
const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  empresa: z.string().optional(),
  assunto: z.string().min(1, "Assunto é obrigatório"),
  mensagem: z.string().min(1, "Mensagem é obrigatória"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    emailSent: boolean;
    message?: string;
  } | null>(null);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      assunto: "",
      mensagem: "",
    }
  });
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmissionResult(null);
    
    try {
      console.log("Enviando formulário:", data);
      
      // Método para chamar a função Edge
      const { data: responseData, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          empresa: data.empresa || "",
          assunto: data.assunto,
          mensagem: data.mensagem,
          tipo: data.empresa ? "empresa" : "pessoa-fisica"
        }
      });
      
      // Verificar erros na chamada da função
      if (error) {
        console.error("Erro na chamada da função Edge do Supabase:", error);
        throw new Error(error.message || "Erro ao enviar mensagem. Por favor, tente novamente.");
      }

      console.log("Resposta detalhada da função Edge:", responseData);
      
      // Analisar a resposta para confirmar o envio de email
      if (responseData?.success) {
        const emailEnviado = responseData.emailStatus?.sent === true;
        
        if (emailEnviado) {
          // Email enviado com sucesso
          setSubmissionResult({
            success: true,
            emailSent: true,
            message: "Sua mensagem foi enviada com sucesso! Em breve entraremos em contato."
          });
          
          toast({
            title: "Mensagem enviada",
            description: "Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.",
          });
          
          form.reset();
        } else {
          // Dados salvos, mas email falhou
          setSubmissionResult({
            success: true,
            emailSent: false,
            message: "Sua mensagem foi registrada, mas houve um problema no envio do email de notificação. Nossa equipe entrará em contato em breve."
          });
          
          toast({
            title: "Mensagem recebida",
            description: "Sua mensagem foi registrada, mas houve um problema no envio do email de notificação. Nossa equipe entrará em contato em breve.",
            variant: "default",
          });
        }
      } else {
        throw new Error(responseData?.error || "Falha ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro detalhado ao enviar mensagem:", error);
      
      setSubmissionResult({
        success: false,
        emailSent: false,
        message: error.message || "Erro ao enviar mensagem. Por favor, tente novamente."
      });
      
      toast({
        variant: "destructive",
        title: "Erro",
        description: error.message || "Erro ao enviar mensagem. Por favor, tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Se o formulário foi enviado com sucesso e o usuário deseja enviar uma nova mensagem
  const resetForm = () => {
    setSubmissionResult(null);
    form.reset();
  };

  return (
    <Form {...form}>
      {submissionResult?.success ? (
        <div className={`p-4 rounded text-center ${
          submissionResult.emailSent 
            ? "bg-green-100 text-green-800 border border-green-200" 
            : "bg-yellow-100 text-yellow-800 border border-yellow-200"
        }`}>
          <p className="text-lg mb-4">{submissionResult.message}</p>
          <Button 
            type="button" 
            onClick={resetForm}
            className="bg-chimelo-black text-white hover:bg-gray-800"
          >
            Enviar nova mensagem
          </Button>
        </div>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nome completo *</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white bg-opacity-90" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">E-mail *</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} className="bg-white bg-opacity-90" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Telefone *</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white bg-opacity-90" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="empresa"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Empresa</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white bg-opacity-90" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="assunto"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Assunto *</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white bg-opacity-90" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="mensagem"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Mensagem *</FormLabel>
                <FormControl>
                  <Textarea rows={5} {...field} className="bg-white bg-opacity-90" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-chimelo-black text-white hover:bg-gray-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
            <Send className="ml-2 h-4 w-4" />
          </Button>
          
          {submissionResult && !submissionResult.success && (
            <div className="p-4 rounded text-center bg-red-100 text-red-800 border border-red-200">
              {submissionResult.message}
            </div>
          )}
          
          <p className="text-xs text-chimelo-silver text-center">
            Ao enviar este formulário, você concorda com nossa política de privacidade.
          </p>
        </form>
      )}
    </Form>
  );
};

export default ContactForm;
