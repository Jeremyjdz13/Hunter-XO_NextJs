import { useState } from 'react';
import { headerStyles } from './HeaderStyles';
import { useRouter } from 'next/router';
import { useAuth } from '../../pages/api/AuthContext'
import DropdownMenu from '../DropdownMenu/DropdownMenu';


export default function Header() {
  const { signOut, currentUser } = useAuth()
  const [ error, setError ] = useState('')
  const router = useRouter();
  const menuItems = [
    {text: 'Settings', onClick: handleSettings },
    {text: 'Sign Out', onClick: handleSignOut}
  ]
  
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

  function handleSettings(){
    setError('')
    if(currentUser){
      router.push('/UpdateProfile')
    }
  }
  return (
    <div style={headerStyles.container}>
      <div className='anotherDangerSlanted' style={headerStyles.title}>Hunter XO</div>
      <div style={headerStyles.containerLeft}>
        Search Field
      </div>
      <div style={headerStyles.containerCenter}>
        Chats
      </div>
      <div style={headerStyles.containerRight}>
            { currentUser && <DropdownMenu menuItems={menuItems} playerName={currentUser.displayName}/>}       
        </div>
    </div>
  );
}

