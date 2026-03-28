"use client";

import { createContext, ReactNode } from "react";
import { User, UserCredential } from "firebase/auth";

// Define the Auth Context Type
export interface AuthInfo {
  user: User | null;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  sinInUser: (email: string, password: string) => Promise<UserCredential>;
  singOut: () => Promise<void>;
  loding: boolean;
}

// Create Context with proper typing
export const AuthContext = createContext<AuthInfo | null>(null);