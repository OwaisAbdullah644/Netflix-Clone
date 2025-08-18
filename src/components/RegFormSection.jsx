import React from 'react'
import { Link } from 'react-router-dom'

const RegFormSection = ({step, member, paperwork}) => {
  return (
    <>
<div className='flex flex-col gap-4 items-start sm:items-center justify-center m-10'>
  <div className='headings grid gap-1 sm:m-auto'>
    <p className='font-normal text-[14px]'>{step}</p>
    <p className='text-[32px] font-medium'>{member}</p>
    <p className='text-[18px] font-normal'>{paperwork}</p>
  </div>
  <div className='form-section pl-0.5 w-full sm:w-auto'>
    <form className='grid gap-6 w-full sm:w-md'>
      <input type="text" placeholder='Email' className='border border-red-600 py-3 rounded-sm pl-2 w-full'/>
      <input type="password" placeholder='Add a password' className='border border-red-600 rounded-sm py-3 pl-2 w-full'/>
      <p className='text-sm'>
        <input type="checkbox" className='mr-2'/> please do not email me Netflix special offers.
      </p>
    </form>
  </div>
  <div className='button w-full sm:w-auto'>
    <Link to="/regForm">
      <button className="bg-[#e50913] border-none hover:bg-red-700 hover:cursor-pointer transform duration-200 w-full sm:w-auto px-6 sm:px-48 text-white py-4 text-xl sm:text-3xl font-semibold rounded mt-6">
        Next
      </button>
    </Link>
  </div>
</div>

    </>
  )
}

export default RegFormSection
