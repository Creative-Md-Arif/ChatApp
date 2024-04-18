/* eslint-disable no-unused-vars */
import React from 'react'
import { FaSearch } from "react-icons/fa";
import ChatList from '../components/ChatItems/ChatList';
import Chatbox from '../components/ChatItems/Chatbox';

const Chat = () => {
  return (
    <div className="w-full flex ">
    <div className=" mygroupitems w-1/3 h-screen  bg-gray-800 border-r-2">
      <div className=" sticky top-0">
        <div className="flex justify-between items-center bg-gray-800 py-5 pl-4">
          <h2 className="title text-white font-secondary font-semibold text-2xl">
            Chat
          </h2>
          <button
            className="border border-gray-300 rounded-md text-white font-primary font-semibold 
           text-xl py-3 px-6 mr-4 hover:text-gray-300 duration-300"
          >
          Create Group
          </button>
        </div>
        <div className="bg-gray-800 py-2 pl-4  flex items-center border-b-[1px]">
          <FaSearch className='text-white' />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-transparent placeholder:text-white pl-4"
          />
        </div>
      </div>
      <div className="px-4">
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
      </div>
    </div>
    <div className="w-2/3 bg-slate-100">
      <Chatbox />
    </div>
  </div>
  )
}

export default Chat
