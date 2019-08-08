import React from 'react';
import Fade from 'react-reveal/Fade'
import './style.css'

const Hero = (props) => {

  const styles = {
    hero: {
      gridTemplateRows: props.rows,
      gridTemplateColumns: props.columns,
      background: `url(${props.image}) no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }

  const template = 
    <Fade distance="25px" bottom>
      <div className="hero" style={styles.hero}>
        {props.content}
       </div>
    </Fade>
    
      
  return template

};

export default Hero;