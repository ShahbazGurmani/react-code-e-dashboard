import React, { useEffect, useState } from "react";
function ProductList()
{

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
   console.log(products);
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
                <ul>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>${item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li><button onClick={()=>{dataDelete}}>Delete</button></li>
                </ul>
                )
            }


        </div>
    )
}

export default ProductList;