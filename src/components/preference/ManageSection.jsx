import React from 'react'
import NetflixAvatar from '../NetflixAvatar'

const ManageSection = () => {
  return (
    <>

<div className="mt-8 grid grid-cols-1 w-[90%] mx-auto border border-gray-300 rounded-lg">
  <div className="flex items-center justify-between py-3 w-[90%] mx-auto hover:cursor-pointer hover:bg-[#f2f2f2]/36">
    <div className="flex items-center gap-2">
      <NetflixAvatar color="#ff3333" size={37} className="cursor-pointer pt-2" />
      <div>
        <p className="text-[16px] font-bold">Owais</p>
        <p>Edit personal and contact info</p>
      </div>
    </div>

    <i className="ri-arrow-right-s-line text-2xl text-gray-500"></i>
  </div>

  <div className="border-t border-gray-300 w-[90%] mx-auto"></div>

     <div className="flex items-center justify-between py-3 w-[90%] mx-auto hover:cursor-pointer hover:bg-[#f2f2f2]/36">
    <div className="flex items-center gap-2">
      <i class="ri-lock-line text-3xl text-gray-500"></i>
      <div>
        <p className="text-[16px] font-bold">Profile Lock</p>
        <p>Requires a PIN to access this profile</p>
      </div>
    </div>

    <i className="ri-arrow-right-s-line text-2xl text-gray-500"></i>
  </div>

</div>
    </>
  )
}

export default ManageSection
