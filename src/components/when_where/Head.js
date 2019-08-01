import React from 'react';
import TextBox from '../utils/TextBox'
import Button from '../utils/Button'
import { Picture } from '../utils/Picture'

import map from './images/kontiki_map.png'
import './style.css'

const Head = () => {

  const whenContent = 
    <p>
     <strong>DINNER</strong> <br></br>
     6pm to 11pm <br></br>
      Thursday - Monday <br></br>
      <br></br>
      <strong>BAR</strong> open till late  <br></br>
      Thursday - Monday 
    </p>

   const whereContent = 
    <a href="https://goo.gl/maps/kV6uZPS2U2vVeQYZA" 
      style={{color: 'black'}}>
      <p>
        437 Main Street<br></br>
        Greenport, NY 11944
      </p>
    </a>
   
   
  return (
    <div className="head-container">
      <div className="head-text">
      <TextBox style={{marginBottom: "10px"}}
        heading="WHEN"
        content={whenContent}
      />
      <div className="when-buttons">
        <Button
          text="RESERVE"
          link={true}
          linkTo="/home"
        /> 
      <a href="tel: +1-631-477-4000">
        <Button
          text="CALL US"
        /> 
      </a>
      </div>
      
      <TextBox style={{marginBottom: "5px"}}
        heading="WHERE"
        content={whereContent}
      />
       <div className="when-buttons">
       <a href="https://goo.gl/maps/1VRrR5PhMrXCVvKm7">
        <Button
            text="FIND US"
          /> 
        </a>  
      </div>
      </div>
      <div>
      <iframe className="google-map" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.3776436396333!2d-72.36227024889462!3d41.104442779189384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e89f347ae10345%3A0xeed7f69119a63ec!2s437+Main+St%2C+Greenport%2C+NY+11944!5e0!3m2!1sen!2sus!4v1564625044310!5m2!1sen!2sus" 
        frameborder="0" style={{border:"0"}} allowfullscreen>
      </iframe>
      </div>
      
    </div>
  );
};

export default Head;