import BlogTemplate from '@/components/BlogTemplate'
import { db } from '@/utils/firebase'
import { collection,  onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useState ,useEffect} from 'react'



const Blogs = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
  
const blogRef = collection(db,'blog');
const q = query(blogRef, orderBy('createdAt','desc'))
onSnapshot(q,(snapshot)=>{
  const articles = snapshot.docs.map((doc)=>({
    id: doc.id,
    ...doc.data()
  }));
  setPosts(articles);
})
  
  }
    
  ,[])

  return (
   <div className='grid grid-cols-1 md:grid-cols-2 gap-6 dark:bg-gray-900 h-full w-full mt-44  justify-between'>
    {
      posts.map((post)=>(
        <div className='w-full my-4 mx-4' key={post.id}>
          <BlogTemplate key={post.id} createdBy={post.createdBy} id={post.id} title={post.title} imageUrl={post.imageUrl} createdAt={post.createdAt.toDate().toDateString()} content={post.content}  />
       
        </div>
        )
        
        )
      }

      </div>
  )
  
}

export default Blogs
