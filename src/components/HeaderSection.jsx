import React from 'react'

const HeaderSection = () => {
  return (
    <>
       <div className='flex justify-between items-center flex-wrap w-full px-2 border border-[#eeeeee] py-4'>
        {/* <img src="netflix-logo.svg" alt="Netflix-Logo" className='h-20 pb-6'/> */}
        <h1 className='text-[#e50913] font-bold sm:text-[40px] text-2xl xs:text-5xl md:text-5xl md:pl-6 md:pt-2'>NETFLIX</h1>
        <p className='sm:pr-4 sm:text-1xl sm:pt-4 sm:font-semibold md:text-[19px] md:pl-6 md:pt-4'>Sign in</p>
    </div>
    </>
  )
}

export default HeaderSection
