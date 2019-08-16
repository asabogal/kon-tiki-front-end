import React from 'react';
import Fade from 'react-reveal/Fade'

const AboutHero = (props) => {

  const styles = {
    hero: {
      gridTemplateRows: '1fr 1fr 1fr 1fr',
      gridTemplateColumns: '1fr 1fr 1fr',
      background: `url(${props.image}) no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }

  const template = 
    <Fade distance="25px" bottom>
      <div className="hero" style={styles.hero}>
        <div>text</div>
        <div>text</div>
       </div>
    </Fade>
    
      
  return template

};

export default AboutHero;