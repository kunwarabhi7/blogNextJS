import Link from 'next/link'
import React from 'react'


const NavBar = () => {
  return (
    <div className='text-white bg-blue-500 p-4'>
      <Link className='bg-white text-blue-500 p-2 rounded-lg font-bold' href={'/'}>Home</Link>
    </div>
  )
}

export default NavBar
