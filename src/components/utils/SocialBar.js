import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const SocialBar = (props) => {

  return (
    <div className="social-bar">
      <a href="https://www.instagram.com/kontiki.gp/">
      <FontAwesomeIcon 
        icon={faInstagram} 
        size={props.size}
        color={props.color} 
       />
      </a>

      <a href="mailto:kontiki@galleryhotelny.com">
      <FontAwesomeIcon 
        icon={faEnvelopeSquare} 
        size={props.size}
        color={props.color} 
       />
      </a>
      
    </div>
  );
};

export default SocialBar;