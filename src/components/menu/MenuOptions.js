import React from 'react';
import Button from '../utils/Button'
import './style.css'

const MenuOptions = () => {

  return (
    <div className="section-container">
      <div className="menu-intro">
        <p>Our Menus are carefully crafted by so and so.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      
      <div className="menu-buttons">  
        <Button padding="3px 50px" fontSize="40px" text="DINNER" linkTo="/dinner"/>
        <Button padding="3px 50px" fontSize="40px" text="DRINK" linkTo="/drinks"/>
      </div>
    </div>
  );
};

export default MenuOptions;