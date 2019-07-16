import React from 'react';
import SocialBar from '../../components/utils/SocialBar'
import './style.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-number">
        631-477-4000
      </div>
      <div className="footer-address">
        437 Main Street - Greenport, NY 11944
      </div>
      <div>
        <SocialBar
          color="white"
          size="2x"
        />
      </div>
    </div>
  );
};

export default Footer;