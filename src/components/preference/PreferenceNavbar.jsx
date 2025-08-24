import React, { useEffect, useState } from "react";

const PreferenceNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className='flex justify-between px-2 border border-[#eeeeee] py-1.5 '>
        <h1 className='text-[#e50913] font-bold sm:text-[40px] text-2xl xs:text-5xl md:text-5xl md:pl-6 md:pt-2'>NETFLIX</h1>
        {/* <p className='sm:pr-4 sm:text-1xl sm:pt-4 sm:font-semibold md:text-[19px] md:pl-6 md:pt-4'>Sign in</p> */}
      </div>
      <div
        className={`top-0 left-0 sticky px-8 w-full text-[#333333] py-2 bg-[#fafafa]  transition-all duration-300 z-50 ${
          isScrolled ? "flex bg-white shadow-md gap-32 px-4 py-4" : "block px-4 py-5"
        }`}
      >
        <i className="ri-arrow-left-line text-2xl font-medium cursor-pointer"></i>
        <p
          className={`font-bold ${
            isScrolled ? "text-[16px]" : "text-[26px] mt-2"
          }`}
        >
          Manage profile and preferences
        </p>
      </div>
    </>
  );
};

export default PreferenceNavbar;
