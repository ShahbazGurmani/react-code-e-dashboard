import React from "react";
import { Link } from "react-router-dom";

const Nav = ()=>{
    const auth = localStorage.getItem('user');
    return(
        <div>
            <ul className="nav-ul">
               <li><Link to="/">Product</Link></li>
               <li><Link to="/add">Add Product</Link></li>
               <li><Link to="/update">Update Product</Link></li>
               <li><Link to="/profile">profile</Link></li>
               <li>{auth?<Link to="/logout">Logout</Link>:
               <Link to="/signup">Signup</Link>}</li>
            </ul>
        </div>
    )

}

export default Nav;