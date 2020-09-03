import React from "react";
import { Link } from "react-router-dom";

const NewLooks = () => {
  return (
    <div className='container'>
      <h3 className='main__heading'>Coming Soon</h3>
      <p className='main__paragraph'>Browse some of the latest styles</p>
      <div className='brand-new__list'>
        <div className='brand-new__list--item'>
          <Link to='/looks'>
            {" "}
            <img src='images/beyonce1.jpg' alt='jumpsuit' />
          </Link>
          <p className='brand-new__paragraph grey'> Fashion</p>
          <h4 className='brand-new__paragraph'>JumpSuit</h4>
          <p className='brand-new__paragraph cost'>$130.00</p>
        </div>

        <div className='brand-new__list--item'>
          <Link to='/looks'>
            <img src='images/beyonce3.jpg' alt='sweatsuit' />
          </Link>
          <p className='brand-new__paragraph grey'>Trending</p>
          <h4 className='brand-new__paragraph'>Hoodie</h4>
          <p className='brand-new__paragraph cost'>$120.00</p>
        </div>
        <div className='brand-new__list--item'>
          <Link to='/looks'>
            <img src='images/beyonce4.jpg' alt='athletic wear' />
          </Link>
          <p className='brand-new__paragraph grey'>Creative</p>
          <h4 className='brand-new__paragraph'>Shorts</h4>
          <p className='brand-new__paragraph cost'>$55.00</p>
        </div>
      </div>
    </div>
  );
};

export default NewLooks;
