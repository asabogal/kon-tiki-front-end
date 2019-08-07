import React from 'react';
import {Picture} from '../utils/Picture'
import {Link} from 'react-router-dom'
import rice from './images/friedrice.png'
import boat from './images/kt_boat.png'
import bar from './images/bar2.png'
import eyes from './images/eyes.png'
import hotel from './images/hotel.png'

import './style.css'

const Experience = () => {
  return (
    <div className="experience-container"> 
      <div className="experience-heading"> 
        <h1>EXPERIENCE</h1>
      </div>
      
      <div className="experience-gallery">
       <div className="experience-thumbnail">
       Our Flavors
         <Link to="/menu">
          <Picture
            image={rice}/>
         </Link>
       </div>

       <div className="experience-thumbnail">
       Our Story
       <Link to="/about">
        <Picture
          image={boat}/>
       </Link>
       </div>

       <div className="experience-thumbnail">
       Through Our Eyes
       <Link to="/gallery">
        <Picture
          image={eyes}/>
       </Link>
       </div>

       <div className="experience-thumbnail">
       The Hotel
       <a href="http://galleryhotelny.com">
         <Picture
          image={hotel}/>
       </a>
       </div>

      </div>
    </div>
  );
};

export default Experience;