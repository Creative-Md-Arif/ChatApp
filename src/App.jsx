/* eslint-disable no-unused-vars */
import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from './pages/Registration';
import Login from './pages/Login';
import Layout from './Layout';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route>
       <Route path="/registration" element={<Registration />} ></Route>
       <Route path="/login" element={<Login />} ></Route>
       <Route path="/" element={<Layout />}>
       <Route index element={<Home/>}></Route>
       <Route path='/chat' element={<Chat/>}></Route>
       <Route path='/profile' element={<Profile/>}></Route>
       </Route>
     </Route>
    )
  );
    
 return  <RouterProvider router={router} />

};

export default App

