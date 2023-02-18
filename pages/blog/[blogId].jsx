import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/utils/firebase';

const blogId = () => {
  
    const router = useRouter()
    const {blogId} = (router.query)
const [cards, setCards] = useState({})
    
    const getDocData = async () => {
      const docRef = doc(db, "blog", `${blogId}`);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        setCards(docSnap.data())
      }else{
        console.log("No Such Document")
      }
    }

useEffect(()=>{
getDocData()
},[])

  return (
    <div className=' mt-20 '>
      
    <section class="text-gray-600 body-font">
<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
  <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={cards.imageUrl} />
  <div class="flex justify-center">
      <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
    </div>
  <div class="text-center lg:w-2/3 w-full">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{cards.title}</h1>
    <p class="mb-8 leading-relaxed text-white">{cards.content}</p>
   
  </div>
</div>
</section>
  </div>
  )
}

export default blogId
