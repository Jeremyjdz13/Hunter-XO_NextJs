import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // your logic to check if the user is signed in
    // if not, redirect them to the sign-in page
    // example:
    const signedIn = true; // replace this with your actual logic
    if (!signedIn) {
      router.push('/');
    }
  }, []);

  return (
    <div>
        <Header></Header>
    </div>
  );
}
