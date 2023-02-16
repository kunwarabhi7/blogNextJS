import '@/styles/globals.css'
import NavBar from '@/components/NavBar'
import { auth } from '@/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from '../components/Login'

export default function App({ Component, pageProps }) {
  const [user] = useAuthState(auth);
  if(!user) return <Login />
  return (
    <>
<NavBar />
    <Component {...pageProps} />
    </>
    )
}
