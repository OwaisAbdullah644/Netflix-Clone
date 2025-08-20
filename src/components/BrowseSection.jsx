import React from 'react'
import NetflixAvatar from './NetflixAvatar'
import { title } from 'framer-motion/client'
import { Link } from 'react-router-dom'

const BrowseSection = ({title, profileButton, addButton}) => {
  return (
    <>
      <div className='bg-[#141414] w-full h-full grid justify-center place-content-center gap-4'>
            <div className='heading flex justify-center text-center'>
                <p className='text-white text-3xl lg:text-[50px] lg:pb-8 lg:pl-15'>{title}</p>
            </div>
            <div className='profile-list flex flex-wrap justify-center gap-3 lg:gap-0 md:gap-1'>
                <NetflixAvatar color="#0066ff" size={80} title='MUHAMMAD' textColor='#808080'  className="md:size-[120px] lg:size-[190px] cursor-pointer"/> 
                <NetflixAvatar color="#ffcc00" size={80} title='Tayyab' textColor='#808080' className="md:size-[120px] lg:size-[190px] cursor-pointer"/> 
                <NetflixAvatar color="#ff3333" size={80} title='Owais' textColor='#808080' className="md:size-[120px] lg:size-[190px] cursor-pointer"/> 
                <i class="ri-add-circle-fill hover:text-white text-[50px] lg:text-[9rem] md:text-8xl text-[#808080] flex flex-col items-center cursor-pointer">
                    <span className='mt-2 text-[12px] text-[#808080] lg:text-[18px] md:text-[13px]'>{addButton}</span>
                </i>
            </div>
            <div className='flex items-center justify-center mt-5 '>
              <Link to="/manageProfiles" className='border border-[#808080] hover:border-white hover:text-white text-[#808080] px-8 py-1  lg:mt-8 lg:ml-8 lg:px-10 md:px-9 md:ml-6 cursor-pointer'>
              {profileButton}
              </Link>
            </div>
      </div>
    </>
  )
}

export default BrowseSection
