import React, { useEffect, useState } from "react";
function ProductList()
{

    const [products,setProducts] = useState('');
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
        <div>
            <h1>Product list</h1>
        </div>
    )
}

export default ProductList;