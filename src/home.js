 import React from 'react';
 import{ Link} from 'react-router-dom';

 const Home = () => {
    
      return (
        <div className="home">
         <div className="nav">
         <h3>IVY PARK</h3>
         <ul className="nav_list">
         <Link to="/shop">
             <li className="nav_list-item"><a className="nav_list-link"href="#">Shop</a></li>
             </Link>
             <li className="nav_list-item"><a className="nav_list-link"href="#">Lookbook</a></li>
             <li className="nav_list-item"><a className="nav_list-link"href="#">About</a></li>
             <li className="nav_list-item"><a className="nav_list-link"href="#">Contact</a></li>
         </ul>
         </div>
         <div className="hero">
         
         <div className="hero_container">
         <div className="hero_text">
         <h1>IVY PARK </h1>
        
         </div>
         </div>
         </div>
        </div>
      );
    }
  
  
  export default Home;