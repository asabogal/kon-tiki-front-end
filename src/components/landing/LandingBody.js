import React from 'react';
import LandingImage from './LandingImage'
import LandingNavigation from './LandingNavigation'
import './style.css'

const LandingBody = () => {
  return (
    <div className="landing-body">
      <div><LandingNavigation/> </div>
      <div><LandingImage/></div>
    </div>
  );
};

export default LandingBody;