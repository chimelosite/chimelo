
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.14.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  tipo: "empresa" | "pessoa-fisica" | "outro";
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Verificar se as variáveis de ambiente estão definidas
    // Get request data
    const contactData: ContactFormData = await req.json();
    
    // Inicializar cliente do Supabase
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Salvar dados na tabela de contatos
    const { error: insertError, data } = await supabaseAdmin
      .from("contatos")
      .insert({
        nome: contactData.nome,
        email: contactData.email,
        telefone: contactData.telefone,
        assunto: contactData.assunto,
        mensagem: contactData.mensagem,
        tipo: contactData.tipo
      });

    if (insertError) {
      console.error("Erro ao inserir contato:", insertError);
      throw new Error(insertError.message);
    }

    // Aqui poderia ser implementado o envio de email com Resend.com ou outro serviço
    // Exigindo a configuração de chaves API adicionais

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contato recebido com sucesso",
        contactId: data?.[0]?.id
      }),
      {
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json" 
        },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Erro ao processar solicitação:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json" 
        },
        status: 400,
      }
    );
  }
});
