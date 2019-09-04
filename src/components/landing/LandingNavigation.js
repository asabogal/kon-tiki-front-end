import React from 'react';
import { Link } from 'react-router-dom'

const LandingNavigation = () => {

  return (
    <ul className="landing-navigation">
      <Link to="/home"> <li>HOME</li> </Link>
      <Link to="/menu"> <li>MENU</li> </Link>
      <Link to="/"> <li>RESERVE</li> </Link>
      <Link to="/contact"> <li>CONTACT</li> </Link>
    </ul>
  );
};

export default LandingNavigation;