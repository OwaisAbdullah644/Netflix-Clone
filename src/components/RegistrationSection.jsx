import React from 'react'
import RegisterIcons from './RegisterIcons'
import { Link } from 'react-router-dom'



const RegistrationSection = ({step, setting, personalized}) => {
  return (
    <>
<div className="flex flex-col text-center justify-center min-h-screen">
  <div className='icons flex justify-center text-red-600 pb-3'>
    <RegisterIcons stroke={false}/>
  </div>

  <div className='main-headings text-center'>
    <p className='text-sm font-light'>{step}</p>
    <p className='text-[32px] font-semibold'>{setting}</p>
    <p className='text-[18px]'>{personalized}</p>
  </div>

  <Link to="/regForm">
    <button className="bg-[#e50913] border-none active:border-none hover:bg-red-700 hover:cursor-pointer transform duration-200 text-white py-4 text-3xl font-semibold rounded mt-6 w-[300px] sm:w-[300px]">
      Next
    </button>
  </Link>
</div>


    </>
  )
}

export default RegistrationSection
