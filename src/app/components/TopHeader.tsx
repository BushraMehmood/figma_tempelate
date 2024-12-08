import React from 'react'
import { TiTick } from "react-icons/ti";

const TopHeader = () => {
  return (
    
    <div className="flex justify-between items-center px-4 md:px-20 lg:px-72 py-3 bg-gray-800 text-white">
    {/*Shipping Section */}
    <div className="flex items-center gap-2 opacity-70">
      <div className="w-4 h-4 border-2 border-white"></div>
      <span className="text-sm capitalize">Free shipping on all orders over $50</span>
    </div>
  
    {/*Links Section*/}
    <div className="flex items-center gap-6 opacity-70">
       {/*Language Dropdown*/}
      <div className="flex items-center gap-1">
        <span className="text-sm">Eng</span>
        <div className="w-2 h-1 border border-white"></div>
      </div>
  
      {/*Currency Dropdown (Hidden on small screens) */}  
      <div className="hidden md:flex items-center gap-1">
        <span className="text-sm">USD</span>
        <div className="w-2 h-1 border border-white"></div>
      </div>
      {/*FAQ */}
      <span className="text-sm">FAQs</span>
  
      {/*Need Help */}
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 border border-white opacity-70"></div>
        <span className="text-sm">Need Help</span>
      </div>
    </div>
  </div>
  
      

      
      

 

    
  )
}

export default TopHeader
