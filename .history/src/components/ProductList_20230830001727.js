import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function ProductList()
{
    // const navigate = useNavigate();
    const [products,setProducts] = useState([]);


    useEffect(()=>{      
        console.warn("hi");
        fetchData();
    }, []);

// get data for show list
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
    const searchData = async(e)=>{
        // console.warn(e.target.value);
        let key = e.target.value;
        if(key)
        {
            let result = await fetch(`http://localhost:4500/search/${key}`)
              result = await result.json();
              if(result)
             {
                 setProducts(result);
              }
        }
        else
        {
            getdata();
        }
    }

    return(
        <div className="product-list">
            <h1>Product list</h1>
            <input className="search" onChange={searchData} type="text" placeholder="Search any product here" ></input>
            <ul className="product-list-li">
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
              products.length>0 ? products.map((item,index)=>
                <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>${item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li>
                        <button onClick={()=>{dataDelete(item._id)}}>Delete</button>
                        <Link to={'/update/'+item._id}>Update</Link>
                        </li>
                </ul>
                )
                :<h1>No Result Found</h1>
            }


        </div>
    )
}

export default ProductList;