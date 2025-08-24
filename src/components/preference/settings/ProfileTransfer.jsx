import React from 'react'

const ProfileTransfer = () => {


      const settingsSections = [
     { icon: "ri-user-shared-line", title: "Profile transfer", description: "Copy this to another account" },
  ];


  return (
    <>
    <div className="mt-8">
  
      <div className="grid grid-cols-1 w-[90%] mx-auto border border-gray-300 rounded-lg">
        {settingsSections.map((section, index) => (
          <div key={index}>
            <div className="flex items-center justify-between py-5 w-[90%] mx-auto">
              <div className="flex items-center gap-2">
                <i className={`${section.icon} text-3xl text-gray-500`}></i>
                <div>
                  <p className="text-[16px] font-bold">{section.title}</p>
                  <p>{section.description}</p>
                </div>
              </div>
              <i className="ri-arrow-right-s-line text-2xl text-gray-500"></i>
            </div>

            {index !== settingsSections.length - 1 && (
              <div className="border-t border-gray-300 w-[90%] mx-auto"></div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ProfileTransfer
