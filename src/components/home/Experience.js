import React from 'react';
import {Picture} from '../utils/Picture'
import {Link} from 'react-router-dom'
import bar from './images/bar2.png'

import './style.css'

const Experience = () => {
  return (
    <div className="experience-container"> 
      <div className="experience-heading"> 
        <h1>EXPERIENCE</h1>
      </div>
      <div className="experience-gallery">
       <div>
       Our Flavors
         <Link to="/menu">
          <Picture
            image={bar}/>
         </Link>
       </div>
       <div>
       Our Journey
         <Picture
          image={bar}/>
       </div>
       <div>
       Through Our Eyes
         <Picture
          image={bar}/>
       </div>
       <div>
       The Hotel
         <Picture
          image={bar}/>
       </div>

      </div>
    </div>
  );
};

export default Experience;