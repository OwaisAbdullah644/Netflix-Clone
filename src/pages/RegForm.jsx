import React from 'react'
import RegFormSection from '../components/RegFormSection'
import HeaderSection from '../components/HeaderSection'
import SignUpFooterSection from '../components/SignUpFooterSection'

const RegForm = ({step, member, paperwork}) => {
  return (
    <>
      <HeaderSection/>
      <RegFormSection step={step} member={member} paperwork={paperwork}/>
      <SignUpFooterSection/>
    </>
  )
}

export default RegForm
