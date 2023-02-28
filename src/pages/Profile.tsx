import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header'
import { useAuth } from '../pages/api/AuthContext'

export default function Profile() {
  const router = useRouter();
  const { currentUser } = useAuth()

  useEffect(() => {
  
    if (!currentUser) {
      router.push('/');
    }
  }, []);

  return (
    <div>
        <Header></Header>
    </div>
  );
}
