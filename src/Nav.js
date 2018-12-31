import React from 'react';
import{ Link} from 'react-router-dom';

const NavBar = () => {

   

   return (
    

    <div className="nav">
    
    <Link to ="/">
    <h3 className="nav-heading">IVY PARK</h3>
    </Link>
    
    <ul className="nav_list">
    <Link to="/shop">
        <li className="nav_list-item"><span className="nav_list-link">LookBook</span></li>
        </Link>
        
        <Link to ="/wish">
        <li className="nav_list-item"><span className="nav_list-link">WishList</span></li>
        </Link>
    </ul>
    </div>
   
   )
}
export default NavBar;