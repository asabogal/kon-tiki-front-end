import React from 'react';
import Fade from 'react-reveal/Fade';

const MobileNavigation = (props) => {

  let {background, font, duration } = props

  let styles = {
    overlay: {
      backgroundColor: background
    },
    overlayContent: {
      fontSize: font
    }
  };

  const handleClick = () => {
    props.toggle()
  }
  return (
    <div className="mobile-nav-cotainer">
      <Fade duration={duration} top >
        <div className="overlay" onClick={handleClick} style={styles.overlay}>
          <div className="overlay-content" style={styles.overlayContent}>
            <div>
              {props.children}
            </div>
          </div>
        </div>
      </Fade>
    </div>
      
  );
};

export default MobileNavigation;