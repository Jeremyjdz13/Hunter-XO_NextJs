import React, { useContext, useState, useEffect } from 'react';
import * as Auth from 'firebase/auth'
import { auth } from '../../config/firebase';

interface AuthContextValue {
  currentUser: Auth.User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<Auth.UserCredential>;
  signup: (email: string, password: string, displayName: string) => Promise<Auth.UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateEmail: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
  updateDisplayName: (newDisplayName: string) => Promise<void>;
}

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined);

export default AuthContext;

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<Auth.User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signup(email: string, password: string, displayName: string) {
    const userCredential = await Auth.createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user
    
    if(user) {
      await Auth.updateProfile(user, {
        displayName,
      });
    }

    return userCredential;
  }

  function login(email: string, password: string) {
    return Auth.signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email: string) {
    return Auth.sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email: string) {
    if(currentUser){
       return Auth.updateEmail(currentUser, email);
    }
   throw new Error('user is not authenticated')
  }

  function updatePassword(password: string) {
    if(currentUser){
     return Auth.updatePassword(currentUser, password); 
    }
    throw new Error('user is not authenticated')
  }

  async function updateDisplayName(newDisplayName: string) {
    if(currentUser){
      await Auth.updateProfile(currentUser, {
        displayName: newDisplayName,
      });
    }
   
    await auth.currentUser?.reload();
  }

  useEffect(() => auth.onAuthStateChanged((user) => {
    if (!user) {
      setLoading(false);
      return;
    }
    setCurrentUser(user);
    setLoading(false);
  }), []);

  const value: AuthContextValue = {
    currentUser,
    loading,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateDisplayName,
  };

  return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
  );
}