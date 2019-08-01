import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

const Button = (props) => {

  const template = 
    <button className="btn"
      style={{
        fontSize: props.fontSize,
        color: props.color,
        padding: props.padding,
        backgroundColor: props.background
      }}
    >
      {props.text}
    </button>

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

export default Button;