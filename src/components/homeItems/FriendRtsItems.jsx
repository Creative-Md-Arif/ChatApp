/* eslint-disable no-unused-vars */
import React from 'react'

const FriendRtsItems = () => {
  return (
    <div className="flex items-center gap-4 my-4">
    <div>
      <img src="/src/assets/Ellipse 1.png" alt="" />
     </div>
     <div className='flex items-center justify-between w-full'>
     <div className="flex flex-col ">
      <h2 className="text-white font-secondary font-semibold text-[16px]">Savannah Nguyen</h2>
     </div>
      <div className=' flex flex-col gap-1 '>
      <button className=' text-[15px] py-1 px-3 rounded-md text-white bg-blue-500'>Confirm</button>
      <button className=' text-[15px] py-1 px-3 rounded-md text-white'>Cancel</button>
     </div>
     </div>
    </div>
  )
}

export default FriendRtsItems