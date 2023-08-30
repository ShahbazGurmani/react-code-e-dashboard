import React from "react";

const Signup = ()=>{
    return (
        <div>
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Your Name"/>
            <input className="inputBox"  type="text" placeholder="Enter Your Email"/>
            <input className="inputBox" type="password" placeholder="Enter Your password"/>
        </div>
    )
}

export default Signup;