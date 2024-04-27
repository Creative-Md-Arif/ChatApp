/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import userSlice from './slice/userSlice'

const Layout = () => {
const navigate = useNavigate();

let user = useSelector((state) => state.userSlice.user);

console.log(user);

useEffect(()=>{
  if( !user){
    return navigate("/login");
  }
},[]);



  return (
    <div className='flex'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
