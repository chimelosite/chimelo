
import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

interface EmailRequest {
  to: string;
  subject: string;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  tipo: string;
}

serve(async (req) => {
  try {
    const { to, subject, nome, email, telefone, mensagem, tipo } = await req.json() as EmailRequest;
    
    // Configure SMTP client - replace with your actual SMTP settings
    const client = new SmtpClient();
    
    await client.connectTLS({
      hostname: Deno.env.get("SMTP_HOSTNAME") || "smtp.example.com",
      port: Number(Deno.env.get("SMTP_PORT")) || 465,
      username: Deno.env.get("SMTP_USERNAME") || "your-username",
      password: Deno.env.get("SMTP_PASSWORD") || "your-password",
    });
    
    // Create email content
    const emailContent = `
      <h2>Novo contato via site Chimelo Advogados</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Tipo de Cliente:</strong> ${tipo}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${mensagem}</p>
    `;
    
    // Send email
    await client.send({
      from: Deno.env.get("SMTP_FROM") || "contato@chimelo.com.br",
      to: to,
      subject: subject,
      content: "text/html",
      html: emailContent,
    });
    
    await client.close();
    
    return new Response(
      JSON.stringify({ success: true, message: "Email enviado com sucesso" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
