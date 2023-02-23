import { headerStyles } from './HeaderStyles';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  
  function handleSignOut(){
    router.push('/')
  }
  return (
    <div style={headerStyles.container}>
        <div style={headerStyles.containerLeft}>Profile Avatar</div>
        <div style={headerStyles.title}>Hunter XO</div>
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

