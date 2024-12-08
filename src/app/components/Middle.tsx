
import React from 'react'
import { RiSofaFill } from "react-icons/ri";

const Middle = () => {
  return (
    
    <div className='flex justify-between items-center px-8 md:px-[300px] py-5 bg-[#F0F2F3] w-full max-w-screen-xl h-[84px]'>
        {/*Logo */}
        <div className="flex items-center gap-2 w-[166px] h-[40px]">
    <div className="w-[40px] h-[40px] bg-[#029FAE]"></div><RiSofaFill />
    <div className="relative flex items-center justify-center text-[#272343] font-inter font-medium text-[26px] leading-[120%]">Comforty</div>
  </div>

   {/*UserLinks*/}
  <div className="flex gap-3 items-start w-[120px] h-[44px]">
    <button className="text-white hover:underline text-[13px] leading-[16.9px] sm:w-[30px] sm:h-[20px] sm:text-[14px] sm:leading-[18px]">Eng</button>
    <button className="text-white hover:underline text-[13px] leading-[16.9px] sm:w-[30px] sm:h-[20px] sm:text-[14px] sm:leading-[18px]">FAQs</button>
    <button className="text-white hover:underline text-[13px] leading-[16.9px] sm:w-[30px] sm:h-[20px] sm:text-[14px] sm:leading-[18px]">NeedHelp</button>
  </div>

   {/* Cart */}
  <div className="flex items-center justify-center gap-3 w-[120px] h-[44px] bg-white rounded-[8px]">
    <div className="w-[26px] h-[13px] text-[#272343] font-inter font-medium text-[12px] leading-[110%] text-center capitalize">Cart</div>
    <div className="w-[20px] h-[20px] bg-[#007580] absolute top-[12px] left-[84px] rounded-full"></div>
    <div className="w-[6px] h-[10px] absolute top-[17px] left-[91px] text-[10px] font-medium text-white text-center capitalize">2</div>
  </div>
      
    </div>

   
  )
}

export default Middle
