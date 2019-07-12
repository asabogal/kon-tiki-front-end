import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const BurgerButton = (props) => {

  const handleClick = () => {
    props.toggle()
  }

  return (
    <div>
      <FontAwesomeIcon 
      icon={faBars} 
      size={props.size} 
      color={props.color} 
      onClick={handleClick}/>
    </div>
  );
};

export default BurgerButton;