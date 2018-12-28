import React from 'react';
import{ Link} from 'react-router-dom';

const NavBar = () => {
   return (
    <div className="nav">
    <h3 className="nav-heading">IVY PARK</h3>
    <ul className="nav_list">
    <Link to="/shop">
        <li className="nav_list-item"><span className="nav_list-link">Shop</span></li>
        </Link>
        <li className="nav_list-item"><span className="nav_list-link"href="#">Lookbook</span></li>
        <li className="nav_list-item"><span className="nav_list-link"href="#">About</span></li>
        <Link to ="/wish">
        <li className="nav_list-item"><span className="nav_list-link"href="#">WishList</span></li>
        </Link>
    </ul>
    </div>
   )
}
export default NavBar