import React from 'react'

const SignUpFooterSection = () => {
  return (
    <>
                  <div className="bg-[#f3f3f3] text-[#999a9b] max-w-full text-[13px] flex justify-between mt-16 py-14 pl-8 text-sm sm:text-base sm:hidden">
  <div className="grid grid-cols-1 gap-2 w-full">
    <p className='text-[13px]'>Questions? Contact us.</p>
    <p>FAQ</p>
    <p>Privacy</p>
    
    </div>
    <div className='grid grid-cols-1 pt-6 gap-2 w-full leading-6'>
    <p>Help Center</p>
    <p>Cookie Preferences</p>
    </div>
    <div className="grid grid-cols-1 pt-6 gap-2 w-full leading-6">
    <p>Terms of Use</p>
    <p>Corporate Information</p>
    </div>
</div>

<div className="bg-[#f3f3f3] text-[#999a9b] w-[100%] hidden sm:flex md:hidden sm:text-[13px] mt-16 py-12 px-0 text-[10px] sm:text-base">
  <div className="flex flex-col gap-2 pl-8 whitespace-nowrap">
    <p>Questions? Contact us.</p>
    <p>FAQ</p>
    <p>Privacy</p>
  </div>

  <div className="flex flex-col gap-2 pl-8 pt-8  whitespace-nowrap">
    <p>Help Center</p>
    <p>Cookie Preferences</p>
  </div>

  <div className="flex flex-col gap-2 pl-10 pt-8 whitespace-nowrap">
    <p>Terms of Use</p>
    <p>Corporate Information</p>
  </div>
</div>


<div className="bg-[#f3f3f3] text-[#999a9b]  hidden md:flex md:text-[13px] lg:text-[13px] lg:px-8  mt-16 py-16 pl-2 text-sm md:text-base">
  <div className='flex flex-col gap-4 pt-2 pl-8'>
    <p>Questions? Contact us.</p>
    <p className="">FAQ</p>
    <p className="">Cookie Preferences</p>
  </div>        
  <div className='flex flex-col gap-4 pt-12 md:pl-16 lg:pl-30'>
    <p className="">Help Center</p>
    <p className="">Corporate Information</p>
  </div>
  <div className='flex flex-col gap-4 pt-12 pl-5 lg:pl-25'>
    <p className="">Terms of Use</p>
  </div>
  <div className='flex flex-col gap-4 pt-12 pl-20 lg:pl-35'>
    <p className="">Privacy</p>
  </div>
</div>
    </>
  )
}

export default SignUpFooterSection
