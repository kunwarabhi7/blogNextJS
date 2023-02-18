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
    
<nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link href="https://twitter.com/kunwarabhi7" className="flex items-center">
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Abhishek's Blog</span>
  </Link>
  <div className="flex md:order-2">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={logout}>Log Out</button>
      
  </div>
  <div className="items-center justify-between  w-full md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-row p-4 mt-3 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li className=' flex py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white"'>
        <h1 className='mt-2' >Welcome {user.displayName} </h1>
      <img src={user.photoURL} className=" w-9  mx-4 mr-3 sm:h-9 rounded-full" alt="Flowbite Logo" />

      </li>
      <li>
        <Link href="/blog" className="block py-2 pl-3 mt-2 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Blogs</Link>
      </li>
      <li>
        <Link href="/createablog" className="block py-2 pl-3 mt-2 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page">Create a Blog</Link>
      </li>
      
      
    </ul>
  </div>
  </div>
</nav>

  )
}

export default NavBar
