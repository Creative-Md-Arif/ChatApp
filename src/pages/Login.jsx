/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loggeduser } from '../slice/userSlice';






const Login = () => {
    const dispatch = useDispatch("");
    const auth = getAuth();
    const db = getDatabase();
    let navigate = useNavigate();
    const [emailError , setEmailError] = useState ("");
    const [showpassword , setShowPassword] = useState ("");
    const [passwordError , setPasswordError] = useState ("");
    const [loginData , setLoginData] = useState({
        email : "",
        password: "",
    });

    const handleSubmit = () =>{
        if( loginData.email == "") {
            setEmailError("Email is Required")
        }
        else if( loginData.password == "") {
            setPasswordError("Password is Required")
        } else {
            signInWithEmailAndPassword(auth, loginData.email, loginData.password)
        .then((res) =>{
            if( res.user.emailVerified == false) {
                toast.success('Email is not verified !', {
                    position: "top-center",
                    autoClose: 3000,
                    closeOnClick: true,
                theme: "light",
                });
            } else {         
                 set(ref(db, 'user/' + res.user.uid), {
                    username: res.user.displayName,
                    email: res.user.email,
                    profile_picture : res.user?.photoURL,
                 }).then(()=>{
                     toast.success('Login successful', {
                         position: "top-center",
                         autoClose: 3000,
                         closeOnClick: true,
                         theme: "light",
                     });
                     localStorage.setItem("user", JSON.stringify(res.user));
                        dispatch(loggeduser(res.user));
                        setTimeout(() => {
                        navigate("/")
                     }, 1500);

                 }).catch((err)=>{
                    
                 })
       
            }
        })
        .catch((err) => {
            console.log(err.code);
            if ( err.code == "auth/invalid-email") {
             setEmailError("Invalid Email! Please input a valid email.")
            }
            if ( err.code == "auth/invalid-credential") {
            toast.error('Authorization felid', {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                theme: "light",
                });   
            }
        })

        }    
    }
    

    


    return (
        <section className="bg-gray-800 h-[100vh]">
            <ToastContainer/>
        <div className="container flex flex-col justify-center items-center h-[100%]">
           <div className="registration border border-white rounded-xl bg-white pt-4 pb-6 px-7 ">
           <div className="text-center pb-8">
             <h3 className=" text-blue-500 font-primary font-bold text-[24px] pb-4">Login</h3>
             <p className=" font-primary font-normal text-black text-[16px]">Free register and you can enjoy it</p>
            </div>
            <div className="flex flex-col w-[400px] gap-5">

                <input
                 value={loginData.email}
                 onChange={(e)=> {setLoginData({...loginData, email: e.target.value}), setEmailError("")}}
                 type="email"
                 placeholder="E-mail"
                 className="py-3 pl-2   border border-[#DDDFE2] rounded-md" />
                {emailError &&  (<p>{emailError}</p> )}

                <div className='flex items-center justify-between relative'>
                <input 
                 value={loginData.password}
                 onChange={(e)=> {setLoginData({...loginData, password: e.target.value}),setPasswordError("")}}
                 type={showpassword ?" text" : "password"}
                 placeholder="password" 
                 className="py-3 pl-2 w-full border border-[#DDDFE2] rounded-md"/>
                 <div onClick={() => setShowPassword(showpassword == "")}
                 className=' absolute right-2'>
                  {
                  showpassword
                  ?
                  <FaEye
                  className='pr-2 text-xl '/>
                  :
                  <FaEyeSlash
                  className='pr-2 text-xl' />
                  }
                 </div>
                </div>
                {passwordError &&  (<p>{passwordError}</p> )}
               
                <button 
                onClick={handleSubmit}
                className="text-center font-primary text-primary font-bold py-3 bg-[blue] rounded-md text-[] ">Sign In</button>
                <span className="text-center border-b-2 pb-4"><Link to="/">Forgotten password</Link></span>
                <p className="text-center font-primary font-normal text-[#1C8AC6]">
                 Already Have an account ? {""}
                <Link className=" font-primary font-normal text-black" to="/registration">Create new account</Link>
                </p>
            </div>
            <div>
            </div>
           </div>
        </div>
    </section>
    );
};

export default Login
