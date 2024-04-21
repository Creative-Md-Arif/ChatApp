/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link , useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification , updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [showpassword , setShowPassword] = useState ("");
  let [name , setName] = useState("");
  let [email , setEmail] = useState("");
  let [password , setPassword] = useState("");

  const [userError , setUserError] = useState({
    nameError : "" ,
    emailError : "" ,
    passwordError : "",
  });

  const handleSubmit = () => {
    if ( name == "" ) {
      setUserError({ nameError: "Name is Required!"});
    } else if ( email == "" ) {
      setUserError({emailError : "Email is Required! "})
    } else if ( password == ""){ 
       setUserError({ passwordError : "Password is Required"})

    } else {
      createUserWithEmailAndPassword(auth, email , password )
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        }).then((res)=>{

          toast.success('Registration Successful. Please verify your email', {
          position: "top-center",
          autoClose: 3000,
          closeOnClick: true,
          theme: "light",
          });
  
         
          setName("");
          setEmail("");
          setPassword("");
          setUserError("")
  
          setTimeout(()=>{
            navigate("/login");
        }, 3000);

        });
        
      })
      .catch((error) => {
        console.log(error.code);
        if ( error.code.includes("auth/invalid-email")) {
          setUserError({ emailError : "invalid Email !"});
        }
        if ( error.code.includes("auth/email-already-in-use")){
          setUserError({ emailError: "Email already in used, Please try another email !"})
        }
        if (error.code.includes("auth/weak-password")) {
          setUserError({ passwordError: "Password should be at least 6 characters",});
        }

      });

    }
  };


  return (
    <section className="bg-gray-800 h-[100vh]">  
     <ToastContainer/>          
     <div className="container flex flex-col justify-center items-center h-[100%]">
       <div className="registration border border-white rounded-xl bg-white pt-4 pb-6 px-7 ">
       <div className="text-center pb-8">
         <h3 className=" text-blue-500 font-primary font-bold text-[24px]">Get started with easily register</h3>
         <p className=" font-primary font-normal text-black text-[16px]">Free register and you can enjoy it</p>
        </div>
        <div className="flex flex-col w-[400px] gap-5">
            <input 
             value={name}
             onChange={(e)=> {setName (e.target.value), setUserError('')}} 
             type="text"
             placeholder="Full Name"
             className="py-3 pl-2 border border-[#DDDFE2] rounded-md" />
             {userError.nameError &&  (<p>{userError.nameError}</p> )}
            
            <input 
             value={email}
             onChange={(e)=>{ setEmail (e.target.value), setUserError("")}} 
             type="email"
             placeholder="E-mail" 
             className="py-3 pl-2 border border-[#DDDFE2] rounded-md" />
            {userError.emailError &&  (<p>{userError.emailError}</p> )}


            <div className='flex items-center relative'>
            <input 
             value={password}
             onChange={(e)=> {setPassword (e.target.value), setUserError("")}} 
             type={ showpassword ? "text" : "password"}
             placeholder="Password"
             className="py-3 pl-2  w-full border border-[#DDDFE2] rounded-md"/>
             {userError.passwordError &&  (<p>{userError.passwordError}</p>)}
             <div onClick={() => setShowPassword(showpassword == "")}
              className=' absolute right-2'>
              {
              showpassword ?
              <FaEye
              className='pr-2 text-xl '/>
              :
              <FaEyeSlash
              className='pr-2 text-xl' />

              }

             </div>
            </div>

            <button 
             onClick={handleSubmit} 
             className="text-center font-primary text-primary font-bold py-3 bg-[blue] rounded-md ">
             Sign Up</button>
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
