import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className='container'>
      <h3 className='main__heading'>News Feeds</h3>
      <p className='main__paragraph'>Browse some of the latest styles</p>
      <div className='news__list'>
        <div className='news__list--item'>
          <a href='https://www.adidas.com/us/ivypark' target='_blank'>
            <img src='images/grid1.jpg' alt='ivy park collection' />
          </a>
          <p className='news__paragraph grey'>December '20</p>
          <h4 className='news__paragraph'>
            Heavy anticipation for Adidas X Ivy Park
          </h4>
          <p className='news__paragraph'>
            Adidas X Ivy Park has given us a glimpse of the upcoming FALL
            collaboration...
          </p>
        </div>

        <div className='news__list--item'>
          <a href='#https://www.adidas.com/us/ivypark' target='_blank'>
            <img src='images/grid3.jpg' alt='ivy park collection' />
          </a>
          <p className='news__paragraph grey'>December '20</p>
          <h4 className='news__paragraph'>
            Long lines to get a piece of Ivy Park
          </h4>
          <p className='news__paragraph'>
            Thousands standing in line in order to snag something from Beyonce's
            athletic clothing line...
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
