import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

const Button = (props) => {

  const template = 
    <button className="btn"
      style={{
        fontSize: props.fontSize,
        color: props.color,
        padding: props.padding
      }}
    >
      {props.text}
    </button>

  return (
    <Link to={props.linkTo}>
      {template}
    </Link>
  )
  
};

export default Button;