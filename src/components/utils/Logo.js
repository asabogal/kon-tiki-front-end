import React from 'react';
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import './style.css'


const Logo = (props) => {

  const template = 
    <div className="img-cover" 
      style={{
        width: props.width,
        height: props.height,
        background: `url(${logo}) no-repeat`
      }}
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

export default Logo;