import React from 'react'
import SignUpFooterSection from '../components/SignUpFooterSection'
import SignUpPlatformSection from '../components/SignUpPlatformSection'
import HeaderSection from '../components/HeaderSection'

const SignUpPlatform = () => {
  return (
    <>
       <div className=" flex flex-col  w-full min-h-screen">

      <HeaderSection/>
      <div className='flex-grow'>
        <SignUpPlatformSection/>
      </div>
      <SignUpFooterSection/>
</div>
    </>
  )
}

export default SignUpPlatform
