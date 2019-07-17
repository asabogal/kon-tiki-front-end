import React from 'react';
import dinner from './menu_imgs/Food Menu 7.15.pdf'
import drinks from './menu_imgs/Beverage Menu 2.1.pdf'

export const DinnerMenu = () => {

  return (
    <div className="pdf-container">
      <embed
        className="menu-img"
        src={dinner}
        type="application/pdf"
      />
    </div>
  );
};

export const DrinksMenu = () => {

  return (
    <div className="pdf-container">
     <embed
        className="menu-img"
        src={drinks}
        type="application/pdf"
      />
    </div>
  );
};

