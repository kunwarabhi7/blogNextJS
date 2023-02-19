import { auth } from "@/utils/firebase";

import {useAuthState } from 'react-firebase-hooks/auth'
import Login from '../components/Login'


export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  if(!user) return <Login />
 
 
  return (
    <>
     
     <div className="dark:bg-gray-900">

     </div>
    </>
  )
}
