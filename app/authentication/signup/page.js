'use client'
import Link from "next/link";
import { FaFacebookF, FaLock } from 'react-icons/fa'; 
import {AiOutlineUserAdd} from 'react-icons/ai'// Import the desired icons from react-icons library
import {BiArrowBack} from 'react-icons/bi'
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default function Page() {

const [name, setname] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handelRegister = (e) =>{
     event.preventDefault()
     console.log(name, email, password);

     const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}


  return (
    <>
      <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css" />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
            <Link href={'/'} className="flex mb-5"> <BiArrowBack className="me-2 mt-1"/> Back</Link>
          <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Register  Account</div>
       
          <div className="mt-10">
            <form onSubmit={handelRegister}>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Full Name:</label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <AiOutlineUserAdd />
                  </div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="full name"
                    onChange={(e)=>setname(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <FaLock />
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="E-Mail Address"
                    onChange={(e)=>setEmail(e.target.value)}

                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <FaLock /> 
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}

                  />
                </div>
              </div>

           

              <div className="flex w-full">
                <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                  <span className="mr-2 uppercase">Register</span>
                  <span>
                    <FaLock /> 
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link href="/authentication/signin"> 
              <div className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center ml-2">
                Already  have an account?
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

