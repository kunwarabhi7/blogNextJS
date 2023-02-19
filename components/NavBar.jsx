import { auth } from '@/utils/firebase';
import { signOut } from 'firebase/auth';
import React from 'react'
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';

const NavBar = () => {
  const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

  return (
    
<nav className=" px-2 sm:px-4 py-2.5 bg-gray-900  text-white fixed w-full z-20 top-0 left-0 border-b  border-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link href="https://twitter.com/kunwarabhi7" className="flex items-center">
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Abhishek's Blog</span>
  </Link>
  <div className="flex md:order-2">
      <button type="button" className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" onClick={logout}>Log Out</button>
      
  </div>
  <div className="items-center justify-between bg-gray-900 text-white  w-full md:w-auto md:order-1 " id="navbar-sticky">
    <ul className="flex flex-row  mt-3 border  rounded-lg  text-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-900  border-gray-700">
      <li className=' flex py-2 pl-3 pr-4 text-white bg-gray-900  rounded   md:p-0  '>
        <h1 className='mt-2 text-sm bg-gray-900 text-white  md:text-base' >Welcome, {user.displayName} </h1>
      <img src={user?.photoURL} className=" w-9 sm:w-9  mx-4 mr-3 h-9 mt-4 sm:h-9 md:mt-2 rounded-full" alt="Image" />

      </li>/
      <li>
        <Link href="/blog" className="block py-2 pl-3 mt-2 pr-4 bg-gray-900  rounded   md:p-0 text-white" aria-current="page">Blogs</Link>
      </li>
      <li>
        <Link href="/createablog" className="block py-2 pl-3 mt-2 pr-4 bg-gray-900 text-white  rounded  md:p-0 " aria-current="page">Create a Blog</Link>
      </li>
      
      
    </ul>
  </div>
  </div>
</nav>

  )
}

export default NavBar
