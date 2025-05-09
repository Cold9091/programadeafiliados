import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table for authentication if needed later
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Affiliate registration table
export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  nome: text("nome").notNull(),
  whatsapp: text("whatsapp").notNull(),
  email: text("email").notNull(),
  provincia: text("provincia").notNull(),
  atuacao: text("atuacao").notNull(),
  createdAt: text("created_at").notNull()
});

export const insertRegistrationSchema = createInsertSchema(registrations)
  .pick({
    nome: true,
    whatsapp: true,
    email: true,
    provincia: true,
    atuacao: true,
  })
  .extend({
    email: z.string().email({ message: "Email inválido" }),
    whatsapp: z.string().min(9, { message: "Número de WhatsApp inválido" }),
  });

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;
