import React from 'react'
import LoginForm from '../components/LoginForm'
import "../styles/styles.css";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black sm:bg-[url('/netflix-bg.jpg')] overflow-x-hidden bg-cover bg-center bg-no-repeat">
      <div className="bg-black/60 w-full ">
        <div className="px-6 pt-6 sm:pl-12 sm:pt-0">
          <img src="netflix-logo.svg" alt="Netflix Logo" className="h-26 sm:h-50 sm:pb-16 md:h-40 lg:h-60 lg:-pl-16 lg:-mt-10" />
        </div>

     <div className="flex justify-center w-full px-4 mt-6 sm:mt-0">
      <div className="w-full  sm:-translate-y-21 sm:translate-x-1 md:-translate-y-15 md:translate-x-8 flex justify-center">
        <LoginForm />
      </div>
    </div>



<div className="bg-[rgb(22,22,22)] text-gray-300 mt-70  py-20 px-6 text-sm sm:text-base sm:hidden">
  <div className="grid grid-cols-2 gap-4">
    <p className="underline">FAQ</p>
    <p className="underline">Help Center</p>
    <p className="underline">Terms of Use</p>
    <p className="underline">Privacy</p>
    <p className="underline">Cookie Preferences</p>
    <p className="underline">Corporate Information</p>
  </div>
</div>

<div className="bg-[rgb(22,22,22)] text-gray-300 hidden sm:flex lg:hidden mt-70 py-12 px-16 text-sm sm:text-base">
  <div className='flex flex-col gap-6 py-12'>
    <p>Questions? Contact us.</p>
    <p className="underline">FAQ</p>
    <p className="underline">Terms of Use</p>
    <p className="underline">Cookie Preferences</p>
  </div>        
  <div className='flex flex-col gap-4 py-24 px-33'>
    <p className="underline">Help Center</p>
    <p className="underline">Privacy</p>
    <p className="underline">Corporate Information</p>
  </div>
</div>

<div className="bg-[rgb(22,22,22)] text-gray-300 hidden lg:flex  mt-70 py-16 px-16 text-sm md:text-base">
  <div className='flex flex-col gap-4 pt-2'>
    <p>Questions? Contact us.</p>
    <p className="underline">FAQ</p>
    <p className="underline">Cookie Preferences</p>
  </div>        
  <div className='flex flex-col gap-4 pt-12 md:pl-16'>
    <p className="underline">Help Center</p>
    <p className="underline">Corporate Information</p>
  </div>
  <div className='flex flex-col gap-4 pt-12 pl-20'>
    <p className="underline">Terms of Use</p>
  </div>
  <div className='flex flex-col gap-4 pt-12 pl-20'>
    <p className="underline">Privacy</p>
  </div>
</div>

      </div>
    </div>
  )
}

export default Login
