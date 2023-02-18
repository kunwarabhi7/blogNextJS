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
    <div className=' md:mt-20 mt-28'>
      
    <section className="text-gray-600 body-font">
<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
  <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={cards.imageUrl} />
  <div className="flex justify-center">
      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
    </div>
  <div className="text-center lg:w-2/3 w-full">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{cards.title}</h1>
    <p className="mb-8 leading-relaxed text-white shadow-2xl w-full">{cards.content}</p>
   
  </div>
</div>
</section>
  </div>
  )
}

export default blogId
