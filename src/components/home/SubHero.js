import React from 'react';
import Fade from 'react-reveal/Fade'
import image from './images/entrance.png'
import './style.css'

const SubHero = () => {

  const styles = {
    hero: {
      gridTemplateRows: 'auto',
      gridTemplateColumns: '1fr 1fr',
      background: `url(${image}) no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }

  const template = 
    <Fade distance="25px" bottom>
      <div>

      </div>
      <div className="subhero" style={styles.hero}>
        <div className="subhero-left">
              CONTACT US
        </div>
        <div className="subhero-left">
              RESERVE
        </div>
       </div>
    </Fade>
    
      
  return template

};

export default SubHero;