/* eslint-disable no-unused-vars */
import React from 'react'

const ChatList = () => {
  return (
    <div>
    <div className="flex gap-4 my-4">
     <div>
     <img src="/src/assets/Ellipse 1.png" alt="" />
     </div>
     <div className="flex flex-col ">
      <h2 className=" text-white font-secondary font-semibold text-[16px]">Savannah Nguyen</h2>
      <p className=" text-white font-secondary font-normal text-[14px]">Hate You.....</p>
     </div>
     <p className="ml-auto text-white">10:30 PM</p>
    </div>
{/* Line 2 start */}
    <div className="flex gap-4 my-4">
     <div>
     <img src="/src/assets/Ellipse 1.png" alt="" />
     </div>
     <div className="flex flex-col ">
      <h2 className=" text-white font-secondary font-semibold text-[16px]">Eleanor Pena</h2>
      <p className=" text-white font-secondary font-normal text-[14px]">Need Money.....</p>
     </div>
     <p className="ml-auto text-white">10:30 PM</p>
    </div>
  </div>
  )
}

export default ChatList