import BlogTemplate from '@/components/BlogTemplate'
import { db } from '@/utils/firebase'
import { collection,  onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useState ,useEffect} from 'react'



const Blogs = () => {
  const [posts, setPosts] = useState([])
  console.log(posts)


  useEffect(()=>{
  
const blogRef = collection(db,'blog');
const q = query(blogRef, orderBy('createdAt','desc'))
onSnapshot(q,(snapshot)=>{
  const articles = snapshot.docs.map((doc)=>({
    id: doc.id,
    ...doc.data()
  }));
  setPosts(articles);
  console.log(articles);
})
  
  }
    
  ,[])

  return (
   <>
    {
      posts.map((post)=>(
        <div key={post.id}>
          <BlogTemplate key={post.id} title={post.title} imageUrl={post.imageUrl}  content={post.content}  />
       

        </div>
        )
        
        )
      }

      </>
  )
  
}

export default Blogs
