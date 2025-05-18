
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.14.0";

// Fix: Update Resend import to a version compatible with Deno runtime
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

    // Initialize Resend with proper version
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY não configurada");
      throw new Error("RESEND_API_KEY is not set");
    }
    
    // Initialize Resend with correct implementation for Deno
    const resend = new Resend(resendApiKey);

    // Enviar email utilizando Resend
    let emailResult;
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
      
      // Usar um domínio verificado no Resend para o endereço de envio
      // IMPORTANTE: Este domínio deve ser verificado no painel do Resend
      const fromEmail = "site@chimelo.com.br"; // Deve ser um domínio verificado
      
      emailResult = await resend.emails.send({
        from: `Formulário Website <${fromEmail}>`,
        to: ["contato@chimelo.com.br"],
        subject: `Novo contato do site: ${contactData.assunto}`,
        html: emailHtml,
        reply_to: contactData.email,
      });
      
      console.log("Resultado do envio de email:", JSON.stringify(emailResult));
      
      // Verificar se há erro no resultado do email
      if (emailResult.error) {
        console.error("Erro no envio de email:", emailResult.error);
        
        // Verificar se é erro de restrição de domínio
        if (emailResult.error.statusCode === 403 && emailResult.error.message?.includes("verify a domain")) {
          console.warn("AVISO: Domínio não verificado no Resend. É necessário verificar o domínio em resend.com/domains");
          
          // Não interromper o fluxo, apenas registrar o erro
          // Os dados já foram salvos no banco de dados
        } else {
          // Outros erros de email, registrar mas não interromper o fluxo
          console.error("Erro ao enviar email:", emailResult.error);
        }
      } else {
        console.log("Email enviado com sucesso!");
      }
    } catch (emailError: any) {
      console.error("Exceção ao enviar email:", emailError);
      // Não interromper o fluxo em caso de erro no envio de email
      // Os dados já foram salvos no banco de dados
    }

    // Retornar sucesso mesmo se o email falhou, já que os dados foram salvos
    // Incluir detalhes do resultado do email para depuração
    return new Response(
      JSON.stringify({
        success: true,
        message: "Contato recebido com sucesso",
        contactId: data?.[0]?.id,
        emailStatus: emailResult ? 
          (emailResult.error ? 
            { 
              sent: false, 
              error: "Erro ao enviar email, mas dados foram salvos. Por favor, verifique a configuração do Resend."
            } : 
            { sent: true }
          ) : 
          { sent: false, error: "Não foi possível enviar o email, mas os dados foram salvos." }
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
    console.error("Erro ao processar solicitação:", error);
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
