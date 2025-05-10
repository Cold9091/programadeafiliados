// Vercel serverless handler for API routes
import express from 'express';
import { insertRegistrationSchema } from '../shared/schema';
import { storage } from '../server/storage';
import nodemailer from 'nodemailer';
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

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER || "circulusafiliados@gmail.com",
    pass: process.env.EMAIL_PASSWORD // Use app password for Gmail
  }
});

// Handle affiliate registration
app.post("/api/register", async (req, res) => {
  try {
    // Validate request body against schema
    const validatedData = insertRegistrationSchema.parse(req.body);
    
    // Save registration to storage
    const registration = await storage.createRegistration(validatedData);
    
    // Send email notification if credentials are available
    if (process.env.EMAIL_PASSWORD) {
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