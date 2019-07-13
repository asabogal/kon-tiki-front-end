import React from 'react';
import './style.css'

const Hero = (props) => {

  const template = 
    <div className="hero"
        style={{
          background: `url(${props.image}) no-repeat `,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          position: 'relative,'
        }}
      >
        
        {props.content}

    </div>
      
  return template

};

export default Hero;