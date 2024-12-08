import React from 'react'

const Navigation = () => {
  return (
    <div>
      {/*Navigation Links Section*/}
<div className="flex justify-between items-center px-4 md:px-20 lg:px-72 py-4 bg-white shadow-sm">
  {/*Links Section */}
  <nav className="flex items-center gap-8">
    {/*Individual Links Links  */}
    <a href="#" className="text-sm font-medium capitalize text-teal-600 hover:text-teal-800">Home</a>
    <a href="#" className="text-sm font-medium capitalize text-gray-600 hover:text-gray-800">Shop</a>
    <a href="#" className="text-sm font-medium capitalize text-gray-600 hover:text-gray-800">Product</a>
    <a href="#" className="text-sm font-medium capitalize text-gray-600 hover:text-gray-800">Pages</a>
    <a href="#" className="text-sm font-medium capitalize text-gray-600 hover:text-gray-800">About</a>
  </nav>

    {/*Contact Section  */}
  <div className="flex items-center gap-2">
    <span className="text-sm font-normal capitalize text-gray-600">Contact:</span>
    <span className="text-sm font-medium capitalize text-gray-800">(808) 555-0111</span>
  </div>


</div>
</div>

   
    
  )
}

export default Navigation
