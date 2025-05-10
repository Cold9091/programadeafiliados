// Vercel serverless handler for API routes
import express from 'express';
import { insertRegistrationSchema } from '../shared/schema';
import { storage } from '../server/storage';
import { ZodError } from 'zod';

// Setup Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware for API requests
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
    if (capturedJsonResponse) {
      logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
    }

    if (logLine.length > 80) {
      logLine = logLine.slice(0, 79) + "…";
    }

    console.log(logLine);
  });

  next();
});

// Handle affiliate registration
app.post("/api/register", async (req, res) => {
  try {
    // Validate request body against schema
    const validatedData = insertRegistrationSchema.parse(req.body);
    
    // Save registration to storage
    const registration = await storage.createRegistration(validatedData);
    
    // Nota: Apenas a notificação para WhatsApp é realizada
    // As notificações são tratadas pelo cliente que redireciona 
    // para o WhatsApp com as informações do cadastro
    
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

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || "Erro interno do servidor"
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// Export the Express app as a serverless function
export default app;