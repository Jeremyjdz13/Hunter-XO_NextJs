import '@/styles/globals.css'
import { AuthProvider } from './api/AuthContext';
import { initFirebase } from '@/config/firebase';
import type { AppProps } from 'next/app';

//Initialize Firebase
initFirebase();

export default function App({ Component, pageProps }: AppProps ) {

  return (
      
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider> 
  );
}
