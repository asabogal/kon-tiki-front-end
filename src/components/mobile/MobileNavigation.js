import React from 'react';
import { red } from 'ansi-colors';

const MobileNavigation = (props) => {

  const handleClick = () => {
    props.toggle()
  }
  return (
    <div className="mobile-nav-cotainer">
      <div className="overlay" onClick={handleClick}>
        <div className="overlay-content">
          <div style={{color: props.color}}>
            {props.children}
          </div>
        </div>
      </div>
    </div>
      
  );
};

export default MobileNavigation;