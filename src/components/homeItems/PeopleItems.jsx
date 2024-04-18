/* eslint-disable no-unused-vars */
import React from 'react'

const PeopleItems = () => {
  return (
    <div className="flex  gap-4 my-4">
    <div>
      <img src="/src/assets/Ellipse 1.png" alt="" />
     </div>
     <div className='flex items-center justify-between w-full'>
     <div className="flex flex-col ">
      <h2 className=" text-white font-secondary font-semibold text-[16px]">Savannah Nguyen</h2>
     </div>
      <button className='text-white text-[15px]'>Add</button>
     </div>
    </div>
  )
}

export default PeopleItems
