import React from 'react';

const MobileNavigation = (props) => {

  handleClick = () => {
    props.toggle()
  }
  return (
    <div className="overlay" onClick={handleClick}>
      <div className="overlay-content">
        {props.children}
      </div>
    </div>
  );
};

export default MobileNavigation;