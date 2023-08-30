import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductUpdate =()=>{

    const param = useParams();
    //states for collection data and store value;
    const [pname,setPname] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [pcompany,setPcomapany] = useState('');
    const [error,setError] = useState(false);

    //collecting data;
    const updateData = ()=>{
        console.log(pname,price,category,pcompany);
    }
       
    useEffect(()=>{
            console.warn(param)
            getProductDetail();
    },[]);

    const getProductDetail =async()=>
    {
        let result = await fetch(`http://localhost:4500/product/${param.id}`);
        result = await result.json();
   
        setPname(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setPcomapany(result.company);
    }

    return(
        <div className="register">
        <h1>Update Product</h1>
        <input
          className="inputBox"
          type="text"
          value={pname}
          onChange={(e) => {
            setPname(e.target.value);
          }}
          placeholder="Enter Your Product Name"
        />
        {/* { error && !pname && <span className="error">Enter Valid Name</span>} */}
  
        <input
          className="inputBox"
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Enter Price"
        />
       {/* {error && !price && <span className="error">Enter Valid Price</span>} */}
  
        <input
          className="inputBox"
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          placeholder="Enter Category"
        />
         {/* { error && !category && <span className="error">Enter Valid Category</span>} */}
  
        <input
          className="inputBox"
          type="text"
          value={pcompany}
          onChange={(e) => {
            setPcomapany(e.target.value);
          }}
          placeholder="Enter Company Name"
        />
        {/* {error && !pcompany && <span className="error">Enter Valid Company Name</span>} */}
  
        <button onClick={updateData} className="button" type="submit">
          update
        </button>
      </div>

    )
}

export default ProductUpdate;