import React from "react";
function AddProduct() {



    
  return (
    <div className="register">
      <h1>Add Your Product</h1>
      <input
        className="inputBox"
        type="text"
        // value={name}
        // onChange={(e) => {
        //   setName(e.target.value);
        // }}
        placeholder="Enter Your Product Name"
      />

      <input
        className="inputBox"
        type="text"
        // value={email}
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }}
        placeholder="Enter Your Email"
      />

      <input
        className="inputBox"
        type="password"
        // value={password}
        // onChange={(e) => {
        //   setPassword(e.target.value);
        // }}
        placeholder="Enter Your password"
      />

      <button  className="button" type="submit">
        Add Producct
      </button>
    </div>
  );
}
export default AddProduct;
