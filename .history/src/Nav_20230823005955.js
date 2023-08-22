import React from "react";
import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <div>
            <ul className="nav-ul">
               <li><Link to="/">Product</Link></li>
               <li><Link to="/add">Add Product</Link></li>
               <li><Link to="/updatte">Update Product</Link></li>
               <li><Link to="/logout">Logout</Link></li>
               <li><Link to="/profile">profile</Link></li>
            </ul>
        </div>
    )

}

export default Nav;