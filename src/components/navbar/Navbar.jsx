/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { CiChat2 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";




const Navbar = () => {
  return (
      <nav className='w-[300px]  bg-gray-900 pl-[24px] pt-12 flex flex-col justify-between border-r-2'>
         <div>
          <div className='mainLogo w-12 pb-4'>
             <img src="/public/Chat-logo.jpg" alt="" />
          </div>
          <div>
              <ul className='flex flex-col gap-4 font-secondary font-normal text-xl text-white'>
                  <li className=' bg-[#2d3ba7] w-fit py-3 px-5 rounded-2xl'>
                      <Link to="/" className='flex items-center gap-3'> 
                      <FaHome />
                      <span>Home</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="/chat" className='flex items-center gap-3'>
                       <CiChat2 />
                       <span>Chat</span>
                       </Link>
                  </li>
                  <li>
                      <Link to="#" className='flex items-center gap-3'>
                      <CiUser />
                       <span>User</span>
                      </Link>
                  </li>
              </ul>
          </div>
         </div>
          <Link to="/profile">
          <div className='flex items-center gap-3 user text-start pb-8 font-secondary font-normal  text-primary'>
             <div>
             <img className='w-10 rounded-full' src="/src/assets/Profile-img.png" alt="" />
             </div>
             <div>
             <h1 className='text-[16px]'>Mohammad</h1>
             <p className='text-xs'>Edit Profile</p>
             </div>
          </div>
          </Link>
      </nav>
  );
};

export default Navbar;