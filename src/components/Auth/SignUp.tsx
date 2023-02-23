import Head from 'next/head'
import { initFirebase } from '../../config/firebase'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Home() {
  const app = initFirebase();
  const router = useRouter();

  function handleSignUp(){
    router.push('/Home')
  }

  return (
    <>
      <Head>
        <title>Hunter XO</title>
      </Head>
      <div>
        <h1>Sign Up</h1>
        <button onClick={handleSignUp}>Sign Up</button>
        <p>
          Already have an account?{' '}
          <Link href="/">
            Sign in
          </Link>
        </p>
      </div>
    </>
  )
}