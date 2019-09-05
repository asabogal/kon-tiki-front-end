import React from 'react';
import TextBox from '../utils/TextBox'
import Button from '../utils/Button'
import {Picture} from '../utils/Picture'
import dinningRoom from './images/bar2.png'
import garden from './images/GARDEN 4.jpg'
import './style.css'

const Enjoy = () => {
  const dinningContent = (
    <p>
      Service from 6pm - 1am, Thu - Mon<br></br>
      Full service.<br></br>
      Dinner and/or Cocktails.
    </p>
    );

    const gardenContent = (
      <p>
        Service from 6pm - 11pm, Thu - Mon<br></br>
        Full service.<br></br>
        Dinner and/or Cocktails.
      </p>
      );

  return (
    <div className="boxes-wrapper">
      <div className="box-container">
        <div className="box-text">
          <TextBox
            heading="OUR DINNING ROOM"
            content={dinningContent}
            />
        </div>
        <div>
          <Picture  
          image={dinningRoom}
          />
        </div>

      </div>

      <div className="box-container">
        <div>
          <Picture  
          image={garden}
          />
        </div>
        <div className="box-text">
          <TextBox
            heading="OUR GARDEN"
            content={gardenContent}
          />
        </div>
       
      </div>
      
    </div>
  );
};

export default Enjoy;