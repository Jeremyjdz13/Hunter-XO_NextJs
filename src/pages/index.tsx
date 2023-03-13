import Head from 'next/head'
import SignIn from './auth/SignIn'

export default function Index() {

  return (
    <>
      <Head>
        <title>Hunter XO</title>
      </Head>
      <SignIn />
    </>
  )
}
