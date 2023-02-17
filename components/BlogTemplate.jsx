import Image from 'next/image'
import React from 'react'

function BlogTemplate({title, content , imageUrl ,createdAt  }) {
  return (
          <div className=" mt-48 md:mt-40 lg:mt-24       px-4 md:w-1/2 lg:w-1/3  ">
            <div className="mb-8 rounded">
              <Image
                src={imageUrl}
                alt="image"
                className="" width={400} height={400}
              />
            </div>
            
            <div
                  className="text-white rounded-full bg-cyan-600 p-2  hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-xl"
                >
                  {createdAt}
                </div>
              <h3>
                <div
                  className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  {title}
                </div>
              </h3>
              <p className="text-body-color text-base">
                {content}
              </p>
            </div>
         
      
       
    
  )
}

export default BlogTemplate