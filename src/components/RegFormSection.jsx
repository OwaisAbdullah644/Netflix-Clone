import React from 'react'
import { Link } from 'react-router-dom'

const RegFormSection = ({step, member, paperwork}) => {
  return (
    <>
      <div className='flex flex-col gap-4 items-center justify-center m-10'>
        <div className='headings grid gap-1'>
          <p className='font-normal text-[14px]'>{step}</p>
          <p className='text-[32px] font-medium'>{member}</p>
          <p className='text-[18px] font-normal'>{paperwork}</p>
        </div>
        <div className='form-section w-md pl-0.5'>
          <form className='grid gap-6'>
              <input type="text" name=""  placeholder='Email' className='border border-red-600 py-3 rounded-sm pl-2 w-[100%]'/>

              <input type="password" name="" id="" placeholder='Add a password' className='border border-red-600 rounded-sm py-3 pl-2 w-[100%]'/>

              <p><input type="checkbox" name="" id="" /> please do not email me Netflix special offers.</p>
          </form>
        </div>
        <div className='button'>
             <Link to="/regForm">
    <button className="bg-[#e50913] border-none active:border-none hover:bg-red-700 hover:cursor-pointer transform duration-200 px-48 text-white py-4 text-3xl font-semibold rounded mt-6">
      Next
    </button>
  </Link>
        </div>
      </div>
    </>
  )
}

export default RegFormSection
