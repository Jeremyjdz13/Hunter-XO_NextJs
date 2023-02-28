import { useState, useEffect } from 'react';
import { headerStyles } from './HeaderStyles';
import { useRouter } from 'next/router';
import { useAuth } from '../../pages/api/AuthContext'


export default function Header() {
  const { signOut, currentUser } = useAuth()
  const [ error, setError ] = useState('')
  const router = useRouter();
  
  function handleSignOut(){
    setError('')

    if(currentUser){
      try{
        signOut()
        router.push('/')
      } catch {
        setError('Failed to log out')
      }
    }
  }

  return (
    <div style={headerStyles.container}>
        <div style={headerStyles.containerLeft}>{currentUser?.displayName}</div>
        <div className='anotherDangerSlanted' style={headerStyles.title}>Hunter XO</div>
        <div style={headerStyles.containerRight}>
            <div>
                Profile Settings
            </div>
            <button onClick={handleSignOut}>
                Sign Out
            </button>
        </div>
    </div>
  );
}

