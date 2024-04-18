/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const Registration = () => {
  const auth = getAuth();

  let [name , setName] = useState("User Name");
  let [email , setEmail] = useState("User@gmail.com");
  let [password , setPassword] = useState("123456");

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email , password )
    .then((userCredential) => {
      name,
      email,
      password
      
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });

  }















  return (
    <section className="bg-gray-800 h-[100vh]">            
    <div className="container flex flex-col justify-center items-center h-[100%]">
       <div className="registration border border-white rounded-xl bg-white pt-4 pb-6 px-7 ">
       <div className="text-center pb-8">
         <h3 className=" text-blue-500 font-primary font-bold text-[24px]">Get started with easily register</h3>
         <p className=" font-primary font-normal text-black text-[16px]">Free register and you can enjoy it</p>
        </div>
        <div className="flex flex-col w-[400px] gap-5">
            <input
             type="text"
             placeholder="Full Name"
             className="py-3 pl-2 border border-[#DDDFE2] rounded-md" />

            <input 
             type="email"
             placeholder="E-mail" 
             className="py-3 pl-2 border border-[#DDDFE2] rounded-md" />


            <input 
             type="password"
             placeholder="Password"
             className="py-3 pl-2 border border-[#DDDFE2] rounded-md"/>

            <button onClick={handleSubmit} className="text-center font-primary text-primary font-bold py-3 bg-[blue] rounded-md ">Sign Up</button>
            <p className="text-center text-[#1C8AC6]">
             Already Have an account ? {""}
            <Link className="text-black" to="/login">Sign In</Link>
            </p>
        </div>
        <div>
       </div>
     </div>
    </div> 
</section>
  )
}

export default Registration
