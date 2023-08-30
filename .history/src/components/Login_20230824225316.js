import React from "react";

const Login = () => {
  return (
    <div className="login">
    <h1>Register</h1>
      <input
        className="loginInputBox"
        type="text"
        // value={email}
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }}
        placeholder="Enter Your Email"
      />

      <input
        className="loginInputBox"
        type="password"
        // value={password}
        // onChange={(e) => {
        //   setPassword(e.target.value);
        // }}
        placeholder="Enter Your password"
      />
    </div>
  );
};

export default Login;
