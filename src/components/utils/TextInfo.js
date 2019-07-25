import React from 'react';
import './style.css'

const TextInfo = (props) => {
  return (
    <div className="text-info-contaienr">
      <h1>
        {props.heading}
      </h1>
      <div className="text-content">
        {props.content}
      </div>
       
    </div>
  );
};

export default TextInfo;