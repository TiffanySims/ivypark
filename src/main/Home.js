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
        
        </div>
      );
    }
  
  
  export default Home;