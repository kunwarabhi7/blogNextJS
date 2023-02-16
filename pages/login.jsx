import React from 'react'
import {FcGoogle} from 'react-icons/fc'
const login = () => {
  return (
    <div className='flex h-screen justify-center bg-black items-center'>
        <button className='bg-cyan-800 flex   text-white font-bold text-7xl'>Login With  <FcGoogle size={100}/>
         </button>
      
    </div>
  )
}

export default login
