
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.14.0";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  empresa?: string;
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
    console.log("Função Edge iniciada: processando solicitação de contato");
    
    // Get request data
    const contactData: ContactFormData = await req.json();
    console.log("Dados recebidos:", JSON.stringify(contactData));
    
    // Inicializar cliente do Supabase
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Salvar dados na tabela de contatos
    console.log("Salvando dados na tabela de contatos...");
    const { error: insertError, data } = await supabaseAdmin
      .from("contatos")
      .insert({
        nome: contactData.nome,
        email: contactData.email,
        telefone: contactData.telefone,
        assunto: contactData.assunto,
        mensagem: contactData.mensagem,
        tipo: contactData.tipo,
        empresa: contactData.empresa
      });

    if (insertError) {
      console.error("Erro ao inserir contato:", insertError);
      throw new Error(insertError.message);
    }
    console.log("Dados salvos com sucesso na tabela contatos");

    // Initialize Resend with API key provided
    const resendApiKey = "re_UwAnVh9p_5UGAD2TrbGupP7Feujf9XYLt"; // API key fornecida
    if (!resendApiKey) {
      console.error("API key do Resend não configurada");
      throw new Error("RESEND_API_KEY is not set");
    }
    
    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Enviar email utilizando Resend
    let emailResult;
    let emailSent = false;
    
    try {
      const tipoTexto = {
        "empresa": "Empresa",
        "pessoa-fisica": "Pessoa Física",
        "outro": "Outro"
      }[contactData.tipo];

      // Criar conteúdo do email
      let emailHtml = `
        <h2>Novo contato recebido pelo site</h2>
        <p><strong>Nome:</strong> ${contactData.nome}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Telefone:</strong> ${contactData.telefone}</p>
      `;
      
      // Adicionar empresa se existir
      if (contactData.empresa) {
        emailHtml += `<p><strong>Empresa:</strong> ${contactData.empresa}</p>`;
      }
      
      emailHtml += `
        <p><strong>Tipo:</strong> ${tipoTexto}</p>
        <p><strong>Assunto:</strong> ${contactData.assunto}</p>
        <h3>Mensagem:</h3>
        <p>${contactData.mensagem.replace(/\n/g, '<br>')}</p>
      `;
      
      console.log("Enviando email via Resend...");
      
      // Usando o domínio verificado chimelo.com.br
      const fromEmail = "contato@chimelo.com.br";
      
      // Email de backup para monitoramento
      const backupEmail = "suporte@chimelo.com.br";
      
      emailResult = await resend.emails.send({
        from: `Formulário Website Chimelo <${fromEmail}>`,
        to: ["contato@chimelo.com.br"], 
        bcc: [backupEmail],
        reply_to: contactData.email,
        subject: `Novo contato do site: ${contactData.assunto}`,
        html: emailHtml,
      });
      
      console.log("Resposta detalhada do envio de email:", JSON.stringify(emailResult));
      
      // Verificar se há erro no resultado do email
      if (emailResult.error) {
        console.error("Erro detalhado no envio de email:", JSON.stringify(emailResult.error));
        throw new Error(`Erro ao enviar email: ${JSON.stringify(emailResult.error)}`);
      } else {
        console.log("Email enviado com sucesso!");
        emailSent = true;
      }
    } catch (emailError: any) {
      console.error("Exceção detalhada ao enviar email:", JSON.stringify(emailError));
      console.error("Stack trace do erro:", emailError.stack);
      // Não interromper o fluxo em caso de erro no envio de email
      // Os dados já foram salvos no banco de dados
      throw new Error(`Falha no envio do email: ${emailError.message}`);
    }

    // Retornar sucesso apenas se o email foi enviado com sucesso
    return new Response(
      JSON.stringify({
        success: true,
        message: "Contato recebido com sucesso",
        contactId: data?.[0]?.id,
        emailStatus: { 
          sent: emailSent, 
          details: emailResult 
        }
      }),
      {
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json" 
        },
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Erro detalhado ao processar solicitação:", error);
    console.error("Stack trace do erro:", error.stack);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Erro desconhecido ao processar a solicitação"
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
