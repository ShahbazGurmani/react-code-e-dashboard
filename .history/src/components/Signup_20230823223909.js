import React, { useState } from "react";

const Signup = ()=>{
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    function collectData()
    {
        console.warn(name,email,password)
    }

    return (
        <div className="register">
            <h1 >Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Your Name"/>

            <input className="inputBox"  type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Your Email"/>

            <input className="inputBox" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Your password"/>

            <button  onClick={collectData} className="button" type="submit">Submit</button>
        </div>
    )
}

export default Signup;