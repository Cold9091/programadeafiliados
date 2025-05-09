import { users, type User, type InsertUser, type Registration, type InsertRegistration } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private registrations: Map<number, Registration>;
  currentId: number;
  registrationId: number;

  constructor() {
    this.users = new Map();
    this.registrations = new Map();
    this.currentId = 1;
    this.registrationId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = this.registrationId++;
    const createdAt = new Date().toISOString();
    const registration: Registration = { 
      ...insertRegistration, 
      id, 
      createdAt 
    };
    this.registrations.set(id, registration);
    return registration;
  }
}

export const storage = new MemStorage();
