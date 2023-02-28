import Head from 'next/head'
import SignIn from './SignIn'

export default function Home() {

  return (
    <>
      <Head>
        <title>Hunter XO</title>
      </Head>
      <SignIn />
    </>
  )
}