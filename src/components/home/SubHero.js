import React from 'react';
import Fade from 'react-reveal/Fade'
import Button from '../utils/Button'
import image from './images/entrance.png'
import './style.css'

import Radium from 'radium'

const SubHero = () => {

  const styles = {
    hero: {
      gridTemplateRows: 'auto',
      gridTemplateColumns: '1fr 1fr',
      background: `url(${image}) no-repeat`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      '@media (max-width: 768px)': {
        gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: '1fr',
      }
    }, 
    content: {
      color: 'rgb(198, 245, 248)',
      fontSize: '18px',
      fontWeight: '500',
      justifySelf: 'center',
      '@media (max-width: 768px)': {
        justifySelf: 'center',
        alignSelf: "center",
        margin: '0 auto'
      }
    }
  }

  const template = 
    <Fade distance="25px" bottom>
      <div className="subhero" style={styles.hero}>
        <div style={styles.content}>
          <h4>GET IN TOUCH</h4>
          <p>Get in touch with us. We'd love to hear from you.</p>
          <Button
            text="CONTACT US"
            color="black"
            fontSize='17px'
            padding='5px 40px'
            background='rgb(198, 245, 248)'
            link={true}
            linkTo="/contact"
            />
        </div>
        <div style={styles.content}>
          <h4>RESERVE A TABLE</h4>
          <p>Eat and enjoy together.</p>
          <Button
            text="RESERVE"
            color="black"
            fontSize='17px'
            padding='5px 40px'
            background='rgb(198, 245, 248)'
            link={true}
            linkTo="/reserve"
            />
        </div>
       </div>
    </Fade>
    
  return template

};

export default Radium(SubHero);