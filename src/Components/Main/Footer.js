import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul className='footer_list'>
        <li className='footer_list-item'>FAQ</li>
        <li className='footer_list-item'>Contact Us</li>
        <li className='footer_list-item'>Terms</li>
        <li className='footer_list-item'>Privacy</li>
      </ul>

      <p className='copyright'>&copy; 2020 IvyPark</p>
      <div className='about_locations'>
        <h4 className='about_heading'>Where to find Ivy Park?</h4>

        <ul className='footer_list'>
          <li className='footer_list-item'>Nordtroms</li>
          <li className='footer_list-item'>TopShop</li>
          <li className='footer_list-item'>PacSun</li>
          <li className='footer_list-item'>Beyonce.com</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
