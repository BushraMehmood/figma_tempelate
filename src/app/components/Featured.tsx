import React from 'react'
import Image from 'next/image'
import { FaCartShopping } from "react-icons/fa6";
import image1 from './../../../public/image1.jpeg'
import image2 from './../../../public/image2.jpeg'
import image3 from './../../../public/image3.jpeg'
import image4 from './../../../public/image4.jpeg'

const Featured = () => {
  return (
     
   <div className="flex justify-between items-center px-72">
   <h2 className="text-[#272343] text-4xl capitalize">Featured Products</h2>

   
<div className="absolute w-[1920px] h-[461px] top-[1270px]">

<div className="absolute w-[312px] h-[377px] left-[300px] top-[84px]">

 
 <div className="absolute left-0 right-0 top-0  rounded-md"><Image src={image1} layout='responsive' alt='img4'></Image></div>

   Info
  <div className="absolute left-0 right-[17.95%] top-[86.47%] bottom-0 flex flex-col items-start gap-[10px]">
   
    <div className="w-[256px] h-[21px] text-[#007580] text-[16px] leading-[130%] capitalize font-inter">
      Library Stool Chair
    </div>

    
    <div className="flex items-center gap-[4px] w-[35px] h-[20px]">
      
      <div className="text-[#272343] text-[18px] leading-[110%] capitalize font-inter">
        $20
      </div>
       
      <div className="hidden text-[#9A9CAA] text-[14px] leading-[110%] line-through capitalize font-inter">
        $39
      </div>
    </div>
  </div>

  
  <div className="absolute left-[85.9%] right-4 top-[87.4%] bottom-[0.93%]">
    <div className="absolute left-[85.9%] right-0 top-[87.4%] bottom-[0.93%] bg-[#029FAE] rounded-[8px]"><FaCartShopping /></div>
  </div>

   Buy 3 
  <div className="absolute left-[89.1%] right-[3.21%] top-[90.05%] bottom-[3.58%]"></div>

    <div className="absolute flex items-start gap-[10px] p-[6px_10px] w-[49px] h-[26px] left-[20px] top-[20px] bg-[#01AD5A] rounded-[4px]">
    New 
    <p className="w-[29px] h-[14px] text-white text-[13px] leading-[110%] capitalize font-inter"></p>
  </div>
</div>


    </div>

    </div> 
    
      
   
  )
}

export default Featured
