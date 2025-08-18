import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUpPlatformSection = () => {

  const [selectedPlan, setSelectedPlan] =useState('premium');

const planDetails = {
  mobile: {
    card_id: 1,
    card_title: 'Monthly price',
    card_plan: '480p',
    card_price: 'PKR 250',
    card_quality: 'Fair',
    card_quality_title: 'Video and sound quality',
    card_resolution: '480p',
    card_resolution_title: 'Resolution',
    card_supported: 'Mobile phone, tablet',
    card_supported_title: 'Supported devices',
    card_household: 1,
    card_household_title: 'Devices your household can watch at the same time',
    card_download: 1,
    card_download_title: 'Download devices'
  },

  basic: {
    card_id: 2,
    card_title: 'Monthly price',
    card_plan: '720p',
    card_price: 'PKR 450',
    card_quality: 'Good',
    card_quality_title: 'Video and sound quality',
    card_resolution: '720p (HD)',
    card_resolution_title: 'Resolution',
    card_supported: 'TV, computer, mobile phone, tablet',
    card_supported_title: 'Supported devices',
    card_household: 1,
    card_household_title: 'Devices your household can watch at the same time',
    card_download: 1,
    card_download_title: 'Download devices'
  },

  standard: {
    card_id: 3,
        card_title: 'Monthly price',
    card_plan: '1080p',
    card_price: 'PKR 800',
    card_quality: 'Great',
    card_quality_title: 'Video and sound quality',
    card_resolution: '1080p (Full HD)',
    card_resolution_title: 'Resolution',
    card_supported: 'TV, computer, mobile phone, tablet',
    card_supported_title: 'Supported devices',
    card_household: 2,
    card_household_title: 'Devices your household can watch at the same time',
    card_download: 2,
    card_download_title: 'Download devices'
  },

  premium: {
    card_id: 4,
        card_title: 'Monthly price',

    card_plan: '4K + HDR',
    card_price: 'PKR 1,100',
    card_quality: 'Best',
    card_quality_title: 'Video and sound quality',
    card_resolution: '4K (Ultra HD) + HDR\nSpatial audio (immersive sound)\nIncluded',
    card_resolution_title: 'Resolution',
    card_supported: 'TV, computer, mobile phone, tablet',
    card_supported_title: 'Supported devices',
    card_household: 4,
    card_household_title: 'Devices your household can watch at the same time',
    card_download: 6,
    card_download_title: 'Download devices'
  }
}


  return (
    <>
      <div className='main-parent'>
       
  

        <div className='headings sm:px-12 md:px-22 max-w-[1080px]  mx-auto'>
          <p className='text-[13px] '>STEP <span className='font-semibold'>1</span> OF <span className='font-semibold'>3</span></p>
          <p className='text-[32px] font-semibold sm:text-[30px] lg:mr-0'>Choose the plan that’s right for you</p>
        </div>
        <div className="flex justify-between items-center pt-12 px-4 sm:px-10 sm:mx-6 md:px-12 lg:hidden gap-2 overflow-x-auto">

          <div onClick={() => setSelectedPlan('mobile')} className={`relative sub-heading border rounded-2xl h-28 w-28 py-4 px-2 sm:w-40 md:h-30  cursor-pointer ${selectedPlan === 'mobile' ? 'bg-gradient-to-tl from-[#323e98] to-blue-500 text-white' : 'border-gray-400'}`}>
            {selectedPlan === 'mobile' && (<div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41z" /></svg>
            </div>)}
          <p className="text-[12px] font-semibold">Mobile</p>
          <p className="text-[10px]">480p</p>
          </div>

          <div onClick={() => setSelectedPlan('basic')} className={`relative sub-heading border border-gray-400 rounded-2xl h-28 w-28 sm:w-40 md:h-30  py-4 px-4 ${selectedPlan === 'basic' ? 'bg-gradient-to-br from-[#523cc2] to-[#353e9c] text-white' : 'border-gray-400' }`}>
             {selectedPlan === 'basic' && (<div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41z" /></svg>
            </div>)}
            <p className='text-[12px] font-semibold'>Basic</p>
            <p className='text-[10px]'>720p</p>
          </div>
          <div onClick={() => setSelectedPlan('standard')} className={`relative sub-heading border border-gray-400 rounded-2xl h-28 w-28 sm:w-40 md:h-30  py-4 px-2 ${selectedPlan === 'standard' ? 'bg-gradient-to-tl from-[#214f9c] to-[#9339cd] text-white' : 'border-gray-400'}`}>
           {selectedPlan === 'standard' && (<div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41z" /></svg>
            </div>)}
            <p className='text-[12px] font-semibold'>Standard</p>
            <p className='text-[10px]'>1080p</p>
          </div>
          
         <div onClick={() => setSelectedPlan('premium')} className={`sub-heading relative  border border-gray-400 rounded-2xl h-28 w-28 sm:w-40 md:h-30  py-4 px-2  ${selectedPlan === 'premium' ? 'bg-gradient-to-br from-[#cf1024] to-[#204e9c] text-white' : 'border-gray-400'}`}>
          {selectedPlan === 'premium' && (<div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41z" /></svg>
            </div>)}
          <p className='text-[12px] font-semibold'>Premium</p>
          <p className='text-[10px]'>4K+HDR</p>

          
        </div>

        </div>

            {
              selectedPlan === 'basic' && (
              
            
              <div className="content grid grid-cols-2 gap-y-4 sm:px-18 md:px-20 px-4 py-4 lg:hidden text-sm">
              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_price}</div>
              <div className='border-b border-gray-300 col-span-2 '></div>
              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_quality_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_quality}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_resolution_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_resolution}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_supported_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_supported}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_household_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_household}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_download_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_download}</div>
            </div>

          
              )
            }



             {
              selectedPlan === 'mobile' && (
              
            
              <div className="content grid grid-cols-2 gap-y-4 py-4 sm:px-18 md:px-22 px-4 lg:hidden text-sm">
              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_price}</div>
              <div className='border-b border-gray-300 col-span-2 '></div>
              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_quality_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_quality}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_resolution_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_resolution}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_supported_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_supported}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_household_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_household}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_download_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_download}</div>
            </div>

          
              )
            }



            {
              selectedPlan === 'standard' && (
              
            
              <div className="content grid grid-cols-2 gap-y-4 py-4 sm:px-18 md:px-22 px-4 lg:hidden text-sm">
              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_price}</div>
              <div className='border-b border-gray-300 col-span-2 '></div>
              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_quality_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_quality}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_resolution_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_resolution}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_supported_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_supported}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_household_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_household}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_download_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_download}</div>
            </div>

          
              )
            }



           {

              selectedPlan === 'premium' && (
              
                
            
              <div className="content grid grid-cols-2 gap-y-4 sm:px-18 py-4 md:px-22 px-4 lg:hidden text-sm">
              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_price}</div>
              <div className='border-b border-gray-300 col-span-2 '></div>
              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_quality_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_quality}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_resolution_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_resolution}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_supported_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_supported}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_household_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_household}</div>
              <div className='border-b border-gray-300 col-span-2'></div>

              <div className="text-left font-medium text-gray-700">{planDetails[selectedPlan].card_download_title}</div>
              <div className="text-right font-semibold">{planDetails[selectedPlan].card_download}</div>
            </div>

          
              )
            }

              <div className="hidden lg:grid lg:grid-cols-4 gap-0 lg:pt-10 px-6 max-w-[1080px] mx-auto ">



                <div onClick={() => setSelectedPlan('mobile')} className={`relative border border-gray-300 w-[250px] h-[680px] bg-white rounded-2xl ${selectedPlan === 'mobile' ? 'shadow-2xl transform duration-300' : ''}`}>
                <div className='rounded-lg grad bg-gradient-to-tl from-blue-700 to-[#323e98] text-white w-[95%] h-20 mt-2 mx-2 pl-2 pt-2 font-semibold text-[16px]'>
                 {selectedPlan === 'mobile' && (<div className="absolute top-14 right-4 bg-white rounded-full p-1 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#323e98]" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41z" /></svg>
            </div>)}
                  <p>Mobile</p>
                  <p>480p</p>
                </div>
                <div className='grid gap-4 px-6 py-4'>
                  <div>
                  <p className='text-[13px]'>{planDetails['mobile'].card_title}</p>
                  <p className='text-sm'>{planDetails['mobile'].card_price}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['mobile'].card_quality_title}</p>
                  <p className='text-sm'>{planDetails['mobile'].card_quality}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['mobile'].card_resolution_title}</p>
                  <p className='text-sm'>{planDetails['mobile'].card_resolution}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['mobile'].card_supported_title}</p>
                  <p className='text-sm'>{planDetails['mobile'].card_supported}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['mobile'].card_household_title}</p>
                  <p className='text-sm'>{planDetails['mobile'].card_household}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['mobile'].card_download_title}</p>
                  <p className='text-sm'>{planDetails['mobile'].card_download}</p>
                </div>
                </div>
                
              </div>




              <div onClick={() => setSelectedPlan('basic')} className={`relative border border-gray-300 w-[250px] h-[680px] bg-white rounded-2xl ${selectedPlan === 'basic' ? 'shadow-2xl transform duration-300' : ''}`}>
                <div className='rounded-lg grad bg-gradient-to-tl to-[#113779] from-[#573cc7] text-white w-[95%] h-20 mt-2 mx-2 pl-2 pt-2 font-semibold text-[16px]'>
                 {selectedPlan === 'basic' && (<div className="absolute top-14 right-4 bg-white rounded-full p-1 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#573cc7]" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41z" /></svg>
            </div>)}
                  <p>Basic</p>
                  <p>720p</p>
                </div>
                <div className='grid gap-4 px-6 py-4'>
                  <div>
                  <p className='text-[13px]'>{planDetails['basic'].card_title}</p>
                  <p className='text-sm'>{planDetails['basic'].card_price}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['basic'].card_quality_title}</p>
                  <p  className='text-sm'>{planDetails['basic'].card_quality}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['basic'].card_resolution_title}</p>
                  <p className='text-sm'>{planDetails['basic'].card_resolution}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['basic'].card_supported_title}</p>
                  <p className='text-sm'>{planDetails['basic'].card_supported}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['basic'].card_household_title}</p>
                  <p className='text-sm'>{planDetails['basic'].card_household}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['basic'].card_download_title}</p>
                  <p className='text-sm'>{planDetails['basic'].card_download}</p>
                </div>
                </div>
                
              </div>



                   <div onClick={() => setSelectedPlan('standard')} className={`relative border border-gray-300 w-[250px] h-[680px] bg-white rounded-2xl ${selectedPlan === 'standard' ? 'shadow-2xl transform duration-300' : ''}`}>
                <div className='rounded-lg grad bg-gradient-to-tl  to-[#113779] from-[#8a3ac7] text-white w-[95%] h-20 mt-2 mx-2 pl-2 pt-2 font-semibold text-[16px]'>
                 {selectedPlan === 'standard' && (<div className="absolute top-14 right-4 bg-white rounded-full p-1 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#8a3ac7]" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41z" /></svg>
            </div>)}
                  <p>Standard</p>
                  <p>1080p</p>
                </div>
                <div className='grid gap-4 px-6 py-4'>
                  <div>
                  <p className='text-[13px]'>{planDetails['standard'].card_title}</p>
                  <p className='text-sm'>{planDetails['standard'].card_price}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['standard'].card_quality_title}</p>
                  <p  className='text-sm'>{planDetails['standard'].card_quality}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['standard'].card_resolution_title}</p>
                  <p className='text-sm'>{planDetails['standard'].card_resolution}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['standard'].card_supported_title}</p>
                  <p className='text-sm'>{planDetails['standard'].card_supported}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['standard'].card_household_title}</p>
                  <p className='text-sm'>{planDetails['standard'].card_household}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['standard'].card_download_title}</p>
                  <p className='text-sm'>{planDetails['standard'].card_download}</p>
                </div>
                </div>
                
              </div>



               <div onClick={() => setSelectedPlan('premium')} className={`relative border border-gray-300 w-[250px] h-[680px] bg-white rounded-2xl ${selectedPlan === 'premium' ? 'shadow-2xl transform duration-300' : ''}`}>
                <div className='rounded-lg grad bg-gradient-to-tl from-[#9e2148] to-[#021397] text-white w-[95%] h-20 mt-2 mx-2 pl-2 pt-2 font-semibold text-[16px]'>
                 {selectedPlan === 'premium' && (<div className="absolute top-14 right-4 bg-white rounded-full p-1 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41z" /></svg>
            </div>)}
                  
                  <div className={`absolute w-60  h-16 bottom-160 left-1 rounded-t-xl text-sm text-center pt-1 z-[-10] ${selectedPlan === 'premium' ? 'bg-[#e50913]' : 'bg-[#4c4c4c]'}`}>
                  <p>Most popular</p>
                  </div>

                  <p>Premium</p>
                  <p>4k + HDR</p>
                </div>
                <div className='grid gap-4 px-6 py-4'>
                  <div>
                  <p className='text-[13px]'>{planDetails['premium'].card_title}</p>
                  <p className='text-sm'>{planDetails['premium'].card_price}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['premium'].card_quality_title}</p>
                  <p  className='text-sm'>{planDetails['premium'].card_quality}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['premium'].card_resolution_title}</p>
                  <p className='text-sm'>{planDetails['premium'].card_resolution}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['premium'].card_supported_title}</p>
                  <p className='text-sm'>{planDetails['premium'].card_supported}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['premium'].card_household_title}</p>
                  <p className='text-sm'>{planDetails['premium'].card_household}</p>
                  <div className='border-b border-gray-300 col-span-2 pt-5'></div>
                </div>
                  <div>
                  <p className='text-[13px]'>{planDetails['premium'].card_download_title}</p>
                  <p className='text-sm'>{planDetails['premium'].card_download}</p>
                </div>
                </div>
                
              </div>


              </div>
              


          

            <div className='sm:px-2   max-w-[1080px] mx-auto '>

                <div className=' pt-8 pl-4 text-[13px] sm:pl-15 md:pl-18  text-[#737373]'>
              <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service <br className=' lg:hidden'/> and device capabilities. Not all content is available in all <br className=' lg:hidden'/>  resolutions. See our <span className='text-blue-600'>Terms of Use </span> for more details.</p>
              <p>Only people who live with you may use your account. Watch on 4 different devices <br className=' lg:hidden'/>  at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
              <p className='sm:mt-2'>Live events are included with any Netflix plan and contain ads.</p>

              
            </div>
                  <Link
  to="/registration"
  className="bg-[#e50913] border-none lg:ml-60  active:border-none hover:bg-red-700 transform duration-200 text-white py-4 text-3xl  font-semibold rounded block text-center sm:w-96 sm:mx-auto sm:mt-4 max-w-md mx-auto lg:w-9/12"
>
  Nex
</Link>
            </div>






        </div>
      
    </>
  )
}

export default SignUpPlatformSection
