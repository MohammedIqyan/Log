import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const Navigate=useNavigate();
    const Sub=()=>{
     Navigate('/sign')
    }
    const inpRef=useRef()
    const iconRef=useRef()
    const ShowPassword=()=>{
     iconRef.current.classList.toggle('active')
     if( iconRef.current.classList.contains('active')){
       inpRef.current.type='text'
     }
     else{
        inpRef.current.type='password'
     }
    }
    return(
    <>

    <div className="login">
        <h1>Login Form</h1>
        <div className="m">
        <input type="text" name="" id="" placeholder="Enter User Name" />
        <input ref={inpRef} type="password" placeholder="Enter the Password" />
        <i ref={iconRef} onClick={ShowPassword} class="fa-regular fa-eye" id="icon"></i>
        </div>
        <button onClick={Sub} className="btn">Sign Up</button>

    </div>

    </>

    )
}
export default Login;