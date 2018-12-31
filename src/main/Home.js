 import React from 'react';
 import NavBar from '../Nav';
 import Looks from './Grid';
 import About from './About';
 

 const Home = () => {
    
      return (
        <div>
        <div className="home">
        <NavBar />
         <div className="hero">
         
         <div className="hero_container">
         <div className="hero_text">
         <h1>IVY PARK </h1>
        
         </div>
         </div>
         </div>
        </div>
        <Looks />
        <About />
        <footer>
    <ul className="footer_list">
        <li className="footer_list-item">FAQ</li>
        <li className="footer_list-item">Contact Us</li>
        <li className="footer_list-item">Terms</li>
        <li className="footer_list-item">Privacy</li>
    </ul>
    
    <p className="copyright">&copy; 2018 IvyPark</p>

</footer>
        </div>
      );
    }
  
  
  export default Home;