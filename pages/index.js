import BlogTemplate from "@/components/BlogTemplate";
import { auth } from "@/utils/firebase";

import Head from "next/head"
import {useAuthState } from 'react-firebase-hooks/auth'
import Login from '../components/Login'


export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  if(!user) return <Login />
 
 
  return (
    <>
      <Head>
        <title>BLOG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div className="dark:bg-gray-900">

     </div>
    </>
  )
}
