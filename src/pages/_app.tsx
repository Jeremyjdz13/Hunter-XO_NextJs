import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from './api/AuthContext';
import { initFirebase } from '@/config/firebase';

//Initialize Firebase
initFirebase();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
