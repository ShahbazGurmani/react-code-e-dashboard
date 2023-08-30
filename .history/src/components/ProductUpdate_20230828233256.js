import React from "react";
const ProductUpdate =()=>{

    
    //states for collection data and store value;
    const [pname,setPname] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [pcompany,setPcomapany] = useState('');
    const [error,setError] = useState(false);
    //user navigate
    const navigate = useNavigate();

    //collecting data;
    const productData = async ()=>{
        if(!pname || !price || !category || !pcompany)
        {
            setError(true);
            return false;
        }
       
        // console.warn(pname,price,category,pcompany);
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
        { error && !pname && <span className="error">Enter Valid Name</span>}
  
        <input
          className="inputBox"
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Enter Price"
        />
       {error && !price && <span className="error">Enter Valid Price</span>}
  
        <input
          className="inputBox"
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          placeholder="Enter Category"
        />
         { error && !category && <span className="error">Enter Valid Category</span>}
  
        <input
          className="inputBox"
          type="text"
          value={pcompany}
          onChange={(e) => {
            setPcomapany(e.target.value);
          }}
          placeholder="Enter Company Name"
        />
        {error && !pcompany && <span className="error">Enter Valid Company Name</span>}
  
        <button onClick={productData} className="button" type="submit">
          Add Producct
        </button>
      </div>

    )
}

export default ProductUpdate;