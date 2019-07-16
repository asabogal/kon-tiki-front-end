import React from 'react';
import SocialBar from '../../components/utils/SocialBar'
import './style.css'

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-container">
        <div>
          <a className="footer-number"
          href="tel: +1-631-477-4000"> 631-477-4000 </a>
        </div>
        <div>
          <a className="footer-address" 
          href="https://goo.gl/maps/VvUnSeM1wvvrmTYm7"> 437 Main Street - Greenport, NY 11944 </a>
        </div>
        <div>
          <SocialBar
            color="white"
            size="2x"
          />
        </div>
      </div>

    </div>
    
  );
};

export default Footer;