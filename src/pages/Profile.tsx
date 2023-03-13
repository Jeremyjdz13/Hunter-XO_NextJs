import { useRouter } from 'next/router';
import { useAuth } from './api/AuthContext';
import Header from '../components/Header/Header';
import ProfileNav from '@/components/ProfileNav/ProfileNav';
import { Children, useState } from 'react';
import dynamic from 'next/dynamic';
import Characters from './player/Characters';
import Journal from './player/Journal';
import SiteLayout from '@/components/SiteLayout/SiteLayout';
import SiteNav from '@/components/SiteLayout/SiteNav';

// const Characters = dynamic(() => import('./profile/Characters'),{
//   ssr: false
// })
// const Journal = dynamic(() => import('./profile/Journal'),{
//   ssr: false
// })

export default function Profile() {
  const router = useRouter();
  const { currentUser } = useAuth()
  const { pathName } = router.query;


  if (!currentUser) {
    router.push('/');
    return null;
  }

  function handleProfileRoutes() {
    try{
      switch (pathName) {
        case 'Characters':
          return <Characters />
        case 'Journal':
          return <Journal />
          default:
            return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return (
    <SiteNav>
      {/* <Header />
      <ProfileNav /> */}
      {/* {handleProfileRoutes()} */}
    </SiteNav>
  );
}
