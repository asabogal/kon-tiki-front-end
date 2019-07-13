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
        <div>
          
        </div>
        <div className="content-container">
          {props.content}
        </div>
        

    </div>
      
  return template

};

export default Hero;