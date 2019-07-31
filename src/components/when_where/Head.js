import React from 'react';
import TextBox from '../utils/TextBox'
import Button from '../utils/Button'
import './style.css'

const Head = () => {

  const whenContent = 
    <p>
      <strong>DINNER</strong>
    </p>

   const whereContent = 
    <a href="google.com" style={{textDecoration: 'none'}}>
      <p>
        437 Main Street<br></br>
        Greenport, NY 11944
      </p>
    </a>
   
   
      
  return (
    <div className="head-container">
      <div>
      <TextBox style={{marginBottom: "10px"}}
        heading="WHEN"
        content={whenContent}
      />
      <div className="when-buttons">
      <Button
        text="RESERVE"
      /> 
      <Button
        text="CALL US"
      />
      </div>
      <TextBox style={{marginBottom: "5px"}}
        heading="WHERE"
        content={whereContent}
      />
       <div className="when-buttons">
      <Button
        text="FIND US"
      /> 
      </div>
      </div>
      <div>
        MAP
      </div>
      
    </div>
  );
};

export default Head;