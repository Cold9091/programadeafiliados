import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle affiliate registration
  app.post("/api/register", async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = insertRegistrationSchema.parse(req.body);
      
      // Save registration to storage
      const registration = await storage.createRegistration(validatedData);
      
      // Send email notification
      const mailOptions = {
        from: process.env.EMAIL_USER || "circulusafiliados@gmail.com",
        to: process.env.EMAIL_RECIPIENT || "circulusafiliados@gmail.com",
        subject: "Novo Cadastro de Afiliado CIRCULUS",
        html: `
          <h2>Novo cadastro no Programa de Afiliados</h2>
          <p><strong>Nome:</strong> ${registration.nome}</p>
          <p><strong>WhatsApp:</strong> ${registration.whatsapp}</p>
          <p><strong>Email:</strong> ${registration.email}</p>
          <p><strong>Província:</strong> ${registration.provincia}</p>
          <p><strong>Tipo de Atuação:</strong> ${registration.atuacao}</p>
          <p><strong>Data:</strong> ${new Date().toLocaleString()}</p>
        `
      };
      
      try {
        // Attempt to send email
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error("Error sending email: ", emailError);
        // Continue with the request even if email fails
      }
      
      // Return success response
      res.status(201).json({ 
        message: "Cadastro realizado com sucesso", 
        id: registration.id 
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Erro de validação", 
          errors: error.errors 
        });
      }
      
      // Handle other errors
      console.error("Error during registration: ", error);
      res.status(500).json({ message: "Erro ao processar o cadastro" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
