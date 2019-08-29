import React from 'react';
import TextBox from '../utils/TextBox'
import Button from '../utils/Button'
import {Picture} from '../utils/Picture'

import dinner from './menu_pictures/plate.png'
import drinks from './menu_pictures/drink1.png'
import './style.css'

const MenuBoxes = () => {

  const dinnerContent = (
    <p>
      Service from 6pm - 11pm, Thu - Mon<br></br>
      An intriguing mix of asian and latin american flavors.<br></br>
      Carefully curated with local and imported produce.
    </p>
    );

    const drinksContent = (
      <p>
        Bar open 'till late, Thu - Mon<br></br>
        Exotic, flavorful, and eccentric cocktails.<br></br>
        Tropical flavors enriched with flare.
      </p>
      );

  return (
    <div className="boxes-wrapper">
      <div className="box-container">
        <div className="box-text">
          <TextBox
            heading="DINNER"
            content={dinnerContent}
            />
          <Button 
            text="DINNER MENU" 
            link={true} 
            linkTo="/dinner"/>
        </div>
        <div>
          <Picture  
          image={dinner}
          />
        </div>

      </div>

      <div className="box-container">
        <div>
          <Picture  
          image={drinks}
          />
        </div>
        <div className="box-text">
          <TextBox
            heading="DRINKS"
            content={drinksContent}
          />
          <Button 
            text="DRINK MENU" 
            link={true} 
            linkTo="/drinks"/>
        </div>
       
      </div>
      
    </div>
  );
};

export default MenuBoxes;