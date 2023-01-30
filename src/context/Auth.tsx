/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../services/firebase/firebaseConfig';

type contextType = {
  login: (email: string, password: string) => Promise<UserCredential | void>;
  register: (
    email: string,
    password: string,
    type: 'student' | 'instructor' | 'admin'
  ) => Promise<void>;
  addToFireStore: (user: User, type: string) => Promise<void>;
  user: User | null;
};

const initialContext = {
  login: (email: string, password: string) => Promise.resolve(),
  register: (
    email: string,
    password: string,
    type: 'student' | 'instructor' | 'admin'
  ) => Promise.resolve(),
  addToFireStore: (user: User, type: string) => Promise.resolve(),
  user: null,
};

export const AuthContext = createContext<contextType>(initialContext);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  async function login(email: string, password: string) {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  }

  async function register(
    email: string,
    password: string,
    type: 'student' | 'instructor' | 'admin'
  ) {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await addToFireStore(user.user, type);
  }

  async function addToFireStore(user: User, type: string) {
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      type: type,
    });
  }

  const [user, setUser] = useState<null | User>(null);
  useEffect(() => {
    const watchUser = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return watchUser;
  }, []);
  return (
    <AuthContext.Provider value={{ login, register, addToFireStore, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
