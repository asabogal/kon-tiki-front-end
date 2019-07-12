import React from 'react';
import { Link } from 'react-router-dom'
import logo from './images/logo.png'


const Logo = (props) => {

  const template = <div>LOGO!!</div>
  

  if(props.link) {
    return (
      <Link to={props.linkTo}>
        {template}
      </Link>
    )

  } else {
    return template
  }
 
};

export default Logo;