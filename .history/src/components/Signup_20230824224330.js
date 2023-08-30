import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth)
    {
        navigate("/")
    }
  })


  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:4500/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Your Name"
      />

      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter Your Email"
      />

      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter Your password"
      />

      <button onClick={collectData} className="button" type="submit">
        Submit
      </button>
      {/* <button  className="button" type="submit">
        login
      </button> */}
    </div>
  );
};

export default Signup;
