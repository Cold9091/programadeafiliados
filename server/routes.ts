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
      
      // Nota: Notificações são feitas diretamente via WhatsApp pelo cliente
      // Sem necessidade de envio de email pelo servidor
      
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
