import React from "react";
import NavBar from "../Main/Nav";
import NewLooks from "./NewLooks";
import News from "./News";
import About from "./About";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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

          <div className='hero_text'>
            <h1 className='hero_heading'>IVY PARK</h1>
            <Link to='/looks' className='hero_button'>
              Browse Looks
            </Link>
          </div>
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
