import {FcGoogle} from 'react-icons/fc'
import {auth,provider} from '../utils/firebase'
import {signInWithPopup} from 'firebase/auth'

const login = () => {

 const signInWithGoogle =async () => {
try{

    await signInWithPopup(auth,provider).then((res)=>{
        console.log(res);
    })
}catch(err){
    console.log(err)
}
 }

  return (
    <div className='flex h-screen justify-center bg-black items-center'>
        <button onClick={signInWithGoogle} className='bg-cyan-800 flex p-8 rounded-3xl  text-white font-bold text-7xl'>Login With  <FcGoogle size={100}/>
         </button>
      
    </div>
  )
}

export default login
