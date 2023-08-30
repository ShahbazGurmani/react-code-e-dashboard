
import { Link, useNavigate, } from "react-router-dom";

const Nav = ()=>{
const auth  = localStorage.getItem('user');
const navigate = useNavigate();  

  const  logout = ()=>{
    localStorage.clear();
    navigate('/signup');
  }
    return(
        <div>
            <ul className="nav-ul">
               <li><Link to="/">Product</Link></li>
               <li><Link to="/add">Add Product</Link></li>
               <li><Link to="/update">Update Product</Link></li>
               <li><Link to="/profile">profile</Link></li>
               {
                auth ? <Link onClick={logout} to="/singup" >Logout</Link>:
                <>
                     <li><Link to="/signup">Signup</Link></li>
                     <li><Link to="/login">login</Link></li>
                </>
               }
            </ul>
        </div>
    )

}

export default Nav;