import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProductList()
{
    // const navigate = useNavigate();
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        getdata();
    },[]);

 //get data for show list
   const getdata = async()=>{
        let result = await fetch("http://localhost:4500/product-data");
        result = await result.json();
        setProducts(result);
   }

   //dataDelete
    const dataDelete =async(id)=>{
        let result = await fetch(`http://localhost:4500/delete-product/${id}`,{
            method:'Delete'
        })
        result = result.json();
        if(result)
        {
            alert("data delete Successfully")
             getdata();
        }

    }


    return(
        <div className="product-list">
            <h1>Product list</h1>
            <ul className="product-list-li">
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.map((item,index)=>
                <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>${item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li>
                        <button onClick={()=>{dataDelete(item._id)}}>Delete</button>
                        <Link to={'/update/'}>Update</Link>
                        </li>
                </ul>
                )
            }


        </div>
    )
}

export default ProductList;