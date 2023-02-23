import Head from 'next/head'
import SignIn from '../components/Auth/SignIn'

export default function Home() {

  return (
    <>
      <Head>
        <title>Hunter XO</title>
      </Head>
      <SignIn></SignIn>
    </>
  )
}