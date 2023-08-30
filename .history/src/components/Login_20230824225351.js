import React from "react";

const Login = () => {
  return (
    <div className="login">
    <h1>Login</h1>
      <input
        className="loginInputbox"
        type="text"
        // value={email}
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }}
        placeholder="Enter Your Email"
      />

      <input
        className="loginInputbox"
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
