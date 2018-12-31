 import React from 'react';
 import NavBar from '../Nav';
 import Looks from './Grid';
 import About from './About';
 import Footer from '../Footer';
 

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
        <Footer/>
        </div>
      );
    }
  
  
  export default Home;