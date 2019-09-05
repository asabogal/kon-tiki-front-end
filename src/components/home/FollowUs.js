import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './style.css'


const FollowUs = () => {
  return (
    <div className="followus-container"> 
      <div>
        {/* <h1>
          FOLLOW US ON INSTAGRAM
        </h1> */}
      </div>
      <div className="icon-container">
        <a href="https://www.instagram.com/kontiki.gp/">
          <FontAwesomeIcon 
            icon={faInstagram} 
            size="6x"
            color="white" 
          />
        </a>
       
      </div>
    </div>
  );
};

export default FollowUs;