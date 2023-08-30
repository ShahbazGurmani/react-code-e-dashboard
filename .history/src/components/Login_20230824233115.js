import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async()=>{
        console.warn(email,password);
        let result = await fetch("http://localhost:4500/login",{
            method:'Post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if(result.name)
        {
            localStorage.setItem('user',JSON.stringify(result))
            navigate('/')
        }else
        {
            alert("Please Enter your Correct Detail")
        }
    }

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate("/")
        }
      },[])

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        className="loginInputbox"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter Your Email"
      />

      <input
        className="loginInputbox"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter Your password"
      />

      <button className="button" onClick={handleLogin} type="submit">
        login
      </button>
    </div>
  );
};

export default Login;
