import React from 'react';
import './style.css'

const TextBox = (props) => {
  return (
    <div className="text-box-container">
      <h1>
        {props.heading}
      </h1>
      <div className="text-content">
        {props.content}
      </div>
       
    </div>
  );
};

export default TextBox;