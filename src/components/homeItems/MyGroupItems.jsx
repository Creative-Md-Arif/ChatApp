/* eslint-disable no-unused-vars */
import React from 'react'

const MyGroupItems = () => {
  return (
    <div className="flex  gap-4 my-4">
    <div>
      <img src="/src/assets/Ellipse 1.png" alt="" />
     </div>
     <div className='flex items-center justify-between w-full'>
     <div className="flex flex-col ">
      <h2 className=" text-white font-secondary font-semibold text-[14px]">Savannah Nguyen</h2>
      <p className=" text-white font-secondary font-normal text-[12px]">Hate You.....</p>
     </div>
     <p className="text-white text-xs">10:30 PM</p>
     </div>
    </div>
  )
}

export default MyGroupItems
