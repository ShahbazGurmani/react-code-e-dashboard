import React, { useState } from "react";
function AddProduct() {


    //states for collection data and store value;
    const [pname,setPname] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [pcompany,setPcomapany] = useState('');


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
        placeholder="Enter Price"
      />

      <input
        className="inputBox"
        type="text"
        // value={email}
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }}
        placeholder="Enter Category"
      />

      <input
        className="inputBox"
        type="text"
        // value={password}
        // onChange={(e) => {
        //   setPassword(e.target.value);
        // }}
        placeholder="Enter Comapny Name"
      />

      <button className="button" type="submit">
        Add Producct
      </button>
    </div>
  );
}
export default AddProduct;
