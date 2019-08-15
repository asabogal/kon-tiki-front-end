import React from 'react';
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import './style.css'

import Radium from 'radium'


const Logo = (props) => {

  const styles = {
    logo: {
      width: props.width,
        height: props.height,
        background: `url(${logo}) no-repeat`,
        '@media (max-width: 768px)': {
          width: '55px',
          height: '55px'
        }
    }
  }

  const template = 
    <div className="img-cover" 
      style={styles.logo}
    >
    </div>
  

  if(props.link) {
    
    return (
      <Link to={props.linkTo} className="link-logo">
        {template}
      </Link>
    )

  } else {

    return template
  }
 
};

export default Radium(Logo);