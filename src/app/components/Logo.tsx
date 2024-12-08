import React from 'react'
import Image from 'next/image'
import logo1 from './../../../public/logo1.png'
import logo2 from './../../../public/2.png'
import logo3 from './../../../public/3.png'
import logo4 from './../../../public/4.png'
import logo5 from './../../../public/5.png'
import logo6 from './../../../public/logo6.png'

const Logo = () => {
  return (
    <div>
      <div className="relative flex justify-center   items-center gap-[50px]">
  {/* First div */}
  <div className="flex justify-center items-center w-[75px] h-[85px]">
    <Image src={logo1} alt="logo1" layout="responsive" />
  </div>
  {/* Second div */}
  <div className="flex justify-center items-center w-[75px] h-[85px]">
    <Image src={logo2} alt="logo2" layout="responsive" />
  </div>
  {/* Third div */}
  <div className="flex justify-center items-center w-[75px] h-[85px]">
    <Image src={logo3} alt="logo3" layout="responsive" />
  </div>
  {/* Fourth div */}
  <div className="flex justify-center items-center w-[75px] h-[85px]">
    <Image src={logo4} alt="logo4" layout="responsive" />
  </div>
  {/* Fifth div */}
  <div className="flex justify-center items-center w-[75px] h-[85px]">
    <Image src={logo5} alt="logo5" layout="responsive" />
  </div>
   {/* Sixt div */}
   <div className="flex justify-center items-center w-[75px] h-[85px]">
    <Image src={logo6} alt="logo5" layout="responsive" />
  </div>
</div>
    </div>
  )
}

export default Logo
