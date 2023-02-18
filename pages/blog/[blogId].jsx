import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/utils/firebase';

const blogId = () => {
    const router = useRouter()
    const {blogId} = (router.query)

   console.log(blogId)
    
    const getDocData = async () => {
      const docRef = doc(db, "blog", `${blogId}`);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        console.log(docSnap.data())
      }else{
        console.log("No Such Document")
      }
    }

useEffect(()=>{
getDocData()
},[])

  return (
    <div className='text-7xl mt-20 text-white'>
      This is blog id page
    </div>
  )
}

export default blogId
