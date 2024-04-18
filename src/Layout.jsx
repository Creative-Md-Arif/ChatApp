/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
