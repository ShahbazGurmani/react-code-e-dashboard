import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddProduct() {


    //states for collection data and store value;
    const [pname,setPname] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [pcompany,setPcomapany] = useState('');
    //user navigate
    const navigate = useNavigate();

    //collecting data;
    const productData = async ()=>{
        console.warn(pname);
        return false;
        console.warn(pname,price,category,pcompany);
        const userId =JSON.parse(localStorage.getItem('user'));
        let data = await fetch('http://localhost:4500/add-product',{
                method:'Post',
                body:JSON.stringify({name:pname,price,category,userId,company:pcompany}),
                headers:{
                    'Content-Type':'application/json'
                }

        });
        data = await data.json();
        if(data.name)
        {
            alert("Data Inserted SuccessFully")
            navigate('/')

        }else
        {
            alert("Enter Correct Detail")
        }

    }

  return (
    <div className="register">
      <h1>Add Your Product</h1>
      <input
        className="inputBox"
        type="text"
        value={pname}
        onChange={(e) => {
          setPname(e.target.value);
        }}
        placeholder="Enter Your Product Name"
      />

      <input
        className="inputBox"
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        placeholder="Enter Price"
      />

      <input
        className="inputBox"
        type="text"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        placeholder="Enter Category"
      />

      <input
        className="inputBox"
        type="text"
        value={pcompany}
        onChange={(e) => {
          setPcomapany(e.target.value);
        }}
        placeholder="Enter Company Name"
      />

      <button onClick={productData} className="button" type="submit">
        Add Producct
      </button>
    </div>
  );
}
export default AddProduct;
