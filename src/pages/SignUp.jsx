import React from 'react'
import SignUpForm from '../components/SignUpForm'
import SignUpFooterSection from '../components/SignUpFooterSection'
import HeaderSection from '../components/HeaderSection'

const SignUp = () => {
  return (
    <>
    <div className=" w-full max-w-[100%]">

      <HeaderSection/>
      <SignUpForm/>
      <SignUpFooterSection/>
</div>
    </>
  )
}

export default SignUp
