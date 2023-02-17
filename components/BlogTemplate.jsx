import Image from 'next/image'
import React from 'react'

function BlogTemplate({title, content , imageUrl ,createdAt  }) {
  return (
    <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20" >
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span className="text-primary mb-2 block text-lg font-semibold">
              Our Blogs
            </span>
           
          </div>
        </div>
      </div>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
              <Image
                src={imageUrl}
                alt="image"
                className="w-full" width={40} height={40}
              />
            </div>
            <div>
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
          </div>
        </div>
       
      </div>
    </div>
  </section>
  )
}

export default BlogTemplate