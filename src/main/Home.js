import React from "react";
import NavBar from "../Nav";
import NewLooks from "./NewLooks";
import News from "./News";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className='home'>
        <NavBar />
        <div className='hero'>
          <a href='#nav' className='mobile_nav'>
            <div className='mobile_nav-bars' />
            <div className='mobile_nav-bars' />
            <div className='mobile_nav-bars' />
          </a>
          <h1 className='hero_heading'>IVY PARK</h1>
        </div>
      </div>
      <About />
      <NewLooks />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
