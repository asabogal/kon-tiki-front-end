import React from 'react';
import Button from '../utils/Button'
import './style.css'

const MenuOptions = () => {

  return (
    <div className="section-container">
      <div className="title">
        <h1>MENUS</h1>
      </div>
      <div className="menu-buttons">  
        <Button padding="3px 50px" fontSize="40px" text="DINNER" linkTo="/dinner"/>
        <Button padding="3px 50px" fontSize="40px" text="DRINKS" linkTo="/drinks"/>
      </div>
    </div>
  );
};

export default MenuOptions;