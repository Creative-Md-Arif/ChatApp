/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


// eslint-disable-next-line react/prop-types
const PeopleItems = ({userData}) => {


  // console.log(userData);
  return (
    <div className="flex  gap-4 my-4">
    <div>
      <img className='w-10 h-8 rounded-full' src={userData.profile_picture} alt="" />
     </div>
     <div className='flex items-center justify-between w-full'>
     <div className="flex flex-col ">
      <h2 className=" text-white font-secondary font-semibold text-[16px]">{userData.username }</h2>
     </div>
      <button className='text-white text-[15px]'>Add</button>
     </div>
    </div>
  )
}

export default PeopleItems
