import React from 'react'
import SignUpForm from '../components/SignUpForm'
import SignUpFooterSection from '../components/SignUpFooterSection'
import HeaderSection from '../components/HeaderSection'

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />

      <div className="flex-grow">
        <SignUpForm />
      </div>

      <SignUpFooterSection />
    </div>
  )
}

export default SignUp
