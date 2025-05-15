
import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.6";

interface EmailRequest {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  tipo: string;
}

// Define Supabase URL and key
const supabaseUrl = "https://ofickeaxqyfvcpcughrx.supabase.co";
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

serve(async (req) => {
  // Configurar CORS para permitir apenas o domínio específico
  const allowedOrigin = req.headers.get("origin") || "*";
  
  // Headers para todas as respostas
  const headers = new Headers({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });
  
  // Tratar requisição preflight OPTIONS
  if (req.method === "OPTIONS") {
    return new Response(null, { headers, status: 200 });
  }
  
  // Verificar se o método é POST
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ success: false, error: "Método não permitido" }),
      { headers, status: 405 }
    );
  }

  try {
    // Parse JSON body com tratamento de erro
    let requestData;
    try {
      requestData = await req.json() as EmailRequest;
    } catch (e) {
      console.error("Erro ao parsear JSON do corpo da requisição:", e);
      return new Response(
        JSON.stringify({ success: false, error: "Formato de requisição inválido" }),
        { headers, status: 400 }
      );
    }

    const { nome, email, telefone, assunto, mensagem, tipo } = requestData;
    
    // Validar campos obrigatórios
    if (!nome || !email || !telefone || !assunto || !mensagem || !tipo) {
      return new Response(
        JSON.stringify({ success: false, error: "Todos os campos obrigatórios devem ser preenchidos" }),
        { headers, status: 400 }
      );
    }
    
    // Inicializar cliente Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Salvar dados na tabela de contatos
    const { error: dbError } = await supabase
      .from("contatos")
      .insert({
        nome,
        email,
        telefone,
        assunto,
        mensagem,
        tipo
      });
    
    if (dbError) {
      console.error("Erro ao salvar contato no banco de dados:", dbError);
      return new Response(
        JSON.stringify({ success: false, error: "Erro ao salvar contato", details: dbError.message }),
        { headers, status: 500 }
      );
    }
    
    // Configurar SMTP client
    const client = new SmtpClient();
    
    try {
      await client.connectTLS({
        hostname: Deno.env.get("SMTP_HOSTNAME") || "smtp.example.com",
        port: Number(Deno.env.get("SMTP_PORT")) || 465,
        username: Deno.env.get("SMTP_USERNAME") || "your-username",
        password: Deno.env.get("SMTP_PASSWORD") || "your-password",
      });
      
      // Criar conteúdo do email
      const emailContent = `
        <h2>Novo contato via site Chimelo Advogados</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Tipo de Cliente:</strong> ${tipo}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `;
      
      // Enviar email
      await client.send({
        from: Deno.env.get("SMTP_FROM") || "contato@chimelo.com.br",
        to: "contato@chimelo.com.br",
        subject: `Novo contato via site: ${assunto}`,
        content: "text/html",
        html: emailContent,
      });
      
      await client.close();
      
      console.log("Email enviado com sucesso");
      
      return new Response(
        JSON.stringify({ success: true, message: "Email enviado com sucesso" }),
        { headers, status: 200 }
      );
    } catch (smtpError) {
      // Tratar erros do SMTP especificamente
      console.error("Erro SMTP:", smtpError);
      
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Erro ao enviar email",
          details: smtpError.message || "Falha na configuração SMTP" 
        }),
        { headers, status: 500 }
      );
    }
  } catch (error) {
    // Tratar qualquer outro erro não capturado
    console.error("Erro não tratado:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Erro interno do servidor",
        details: error.message || "Erro desconhecido" 
      }),
      { headers, status: 500 }
    );
  }
});
