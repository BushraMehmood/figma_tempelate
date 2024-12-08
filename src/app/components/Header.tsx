import Image from 'next/image'
import React from 'react'
import Chair from './../../../public/chair.png'




const Header = () => {
  return (
   <div>

{/*Header Section */}
<div className="relative bg-gray-100 rounded-b-3xl h-[850px] flex flex-col justify-between">
 {/*} Hero Section*/}
 <div className="absolute inset-0 bg-gray-100 rounded-b-3xl"></div>

  {/*Product Image */}
  <div
  className="absolute top-28 left-1/2 transform -translate-x-1/2 
             lg:top-[15p0x] lg:left-[900px] w-[434px] h-[584px]">
  <Image 
    src={Chair} 
    alt="chair" 
    layout="responsive" 
    width={434} 
    height={584} 
  />
</div>



  {/* Discount Badge */}
 <div className="absolute top-20 right-5 lg:right-10 bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center">
   <p className="text-red-500 text-4xl font-bold">54%</p>
   <p className="text-gray-800 text-sm font-medium uppercase tracking-wide">Discount</p>
 </div>

  {/* Hero Info*/}
  <div className="absolute top-[229px] left-5 lg:left-[70px] w-full lg:w-[557px] text-gray-800">
  {/* Welcome Text */}
  <p className="uppercase text-xs sm:text-sm font-light tracking-wider">
    Welcome to Chairy
  </p>
  
  {/* Heading */}
  <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug lg:leading-tight mt-4">
    Best Furniture Collection for Your Interior
  </h1>
  
  {/* Button */}
  <button className="mt-6 flex items-center bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-700">
    Shop Now
    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>

</div>



</div>


  )
}

export default Header
