import Head from 'next/head'
import { FirebaseApp, initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
import { FirebaseConfig } from '@/types/types';

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app: FirebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(app)

const auth = getAuth(app)

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunter XO</title>
      </Head>
      <main>
        Hunter XO
      </main>
    </>
  )
}