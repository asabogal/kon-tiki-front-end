import React, { Component } from 'react';
import Logo from '../utils/Logo'
import { Link } from 'react-router-dom'
import './style.css'

const styles = {
  link: {
    textDecoration: 'none',
    color: 'black',
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
       
    return (
      <div className="header-container">
        <div className="header-logo"> 
          <Logo
            link={true}
            linkTo="/"
            width="80px"
            height="80px"
          />
        </div>

      <ul className="header-nav">
        <Link style={styles.link} to="/"> <li>WHERE | WHEN</li> </Link>
        <Link style={styles.link} to="/"> <li>MENU</li> </Link>
        <Link style={styles.link} to="/"> <li>GALLERY</li> </Link>
        <Link style={styles.link} to="/"> <li>ABOUT</li> </Link>
        <Link style={styles.link} to="/"> <li>PRESS</li> </Link>
        <Link style={styles.link} to="/"> <li>RESERVE</li> </Link>
      </ul>
    
      </div>
    );
  }
}

export default Header;