import React from 'react';
import SignUpPlatform from '../pages/SignUpPlatform';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <>
      <div className='main-section grid py-22 sm:grid sm:justify-center items-center'>
        <div className='icon py-1 px-6 sm:flex sm:flex-col justify-between items-center'>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-11 sm:h-13 text-[#ce454a]' fill="currentColor"><path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z"></path></svg>
          <div className='py-6 '>
          <p className='text-[13px] text-[#333333] sm:pl-28'>STEP 1 OF 3</p>
          <p className='heading text-[#333333] text-[32px] font-semibold'>Choose your <br className='hidden sm:visible'/> plan.</p>
        </div>
        </div>
        <div className='grid grid-cols-1 gap-4 px-6 max-w-[350px] sm:max-w-[80%] sm:px-2'>
  <p className='text-[18px] flex items-start'>
    <i className="ri-check-fill text-[#ce454a] pr-3 text-[24px] mt-1"></i>
    No commitments, cancel anytime.
  </p>

  <p className='text-[18px] flex items-start'>
    <i className="ri-check-fill text-[#ce454a] pr-3 text-[24px] mt-1"></i>
    Everything on Netflix for one low price.
  </p>

  <p className='text-[18px] flex items-start'>
    <i className="ri-check-fill text-[#ce454a] pr-3 text-[24px] mt-1"></i>
    No ads and no extra fees. Ever.
  </p>
</div>

        <Link to="/platform" >
  <button className="bg-[#e50913] border-none active:border-none hover:bg-red-700 transform duration-200 text-white py-4 text-3xl font-semibold rounded ml-6 mt-6 mr-4 w-[300px] sm:w-[300px]">
    Next
  </button>
</Link>

      </div>
    </>
  );
};

export default SignUpForm;