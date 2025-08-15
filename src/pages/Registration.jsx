import React from 'react'
import RegistrationSection from '../components/RegistrationSection'
import HeaderSection from '../components/HeaderSection'
import SignUpFooterSection from '../components/SignUpFooterSection'

const Registration = ({step, setting, personalized}) => {
  return (
    <>
          <HeaderSection/>
      <RegistrationSection step={step} setting={setting} personalized={personalized}/>
      <SignUpFooterSection/>
    </>
  )
}

export default Registration
