
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
            { auth  ?
              <ul className="nav-ul">
                 <li><Link to="/">Product</Link></li>
                 <li><Link to="/add">Add Product</Link></li>
                 <li><Link to="/update">Update Product</Link></li>
                 <li><Link to="/profile">profile</Link></li>
                 <li><Link onClick={logout} to="/singup" >Logout</Link></li>
               </ul> :
                <ul className="nav-ul  nav-right">
                  <li><Link to="/signup">Signup</Link></li>
                  <li><Link to="/login">login</Link></li>
                </ul>          
            
          }
        </div>
    ) 

}

export default Nav;