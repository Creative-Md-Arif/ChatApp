/* eslint-disable no-unused-vars */
import React from 'react'
import { MdMoreVert } from "react-icons/md";

const FriendsItems = () => {
  return (
    <div className="flex  gap-4 my-4">
    <div>
      <img src="/src/assets/Ellipse 1.png" alt="" />
     </div>
     <div className='flex items-center justify-between w-full'>
     <div className="flex flex-col ">
      <h2 className=" text-white font-secondary font-semibold text-[16px]">Savannah Nguyen</h2>
     </div>
     <MdMoreVert className='text-white text-[15px] text-center'/>
     </div>
    </div>
  )
}

export default FriendsItems
