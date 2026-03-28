"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { auth } from "../firebase/init";

// Define the shape of the auth context value
interface AuthInfo {
  user: User | null;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  sinInUser: (email: string, password: string) => Promise<UserCredential>;
  singOut: () => Promise<void>;
  loding: boolean;        // Note: Typo kept as "loding" to match your original code
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loding, setLoding] = useState<boolean>(true);

  const createUser = (email: string, password: string): Promise<UserCredential> =>
    createUserWithEmailAndPassword(auth, email, password);

  const sinInUser = (email: string, password: string): Promise<UserCredential> =>
    signInWithEmailAndPassword(auth, email, password);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
    });

    return () => unsubscribe();
  }, []);

  const singOut = (): Promise<void> =>
    signOut(auth)
      .then(() => setUser(null))
      .catch(console.error);

  const authInfo: AuthInfo = {
    user,
    createUser,
    sinInUser,
    singOut,
    loding,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;