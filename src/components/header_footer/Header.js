import React, { Component } from 'react';
import Logo from '../utils/Logo'
import { Link } from 'react-router-dom'
import BurgerButton from '../utils/BurgerButton'
import Button from '../utils/Button'
import MobileNavigation from '../mobile/MobileNavigation'
import './style.css'
import '../mobile/style.css'

const styles = {
  link: {
    textDecoration: 'none',
    color: 'black',
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isMobile: false
     };
  }

  toggle = () => {
    this.setState({
      isMobile: !this.state.isMobile
    })
  };

  renderMobile = () => {
    return (
      <MobileNavigation fontColor="aqua" background="white" font="40px" duration="500" toggle={this.toggle}>
          <Link to="/"> <li>WHERE | WHEN</li> </Link>
          <Link to="/menu"> <li>MENU</li> </Link>
          <Link to="/"> <li>GALLERY</li> </Link>
          <Link to="/"> <li>ABOUT</li> </Link>
          <Link to="/"> <li>PRESS</li> </Link>
          <Link to="/"> <li> | RESERVE | </li> </Link>
      </MobileNavigation>
    )
  }

  renderLogo = () => {
    if (window.innerWidth <= 768) {
      return  ( 
        <Logo
        link={true}
        linkTo="/"
        width="55px"
        height="55px"
      />
      )
    } else {
      return  (
        <Logo
        link={true}
        linkTo="/"
        width="80px"
        height="80px"
      />
      )
    }
  };

  renderHeader = () => {
    return (
      <div className="header-container">
        <div className="header-logo"> 
         {this.renderLogo()}
        </div>

        <ul className="header-nav">
          <Link style={styles.link} to="/"> <li>WHERE | WHEN</li> </Link>
          <Link style={styles.link} to="/menu"> <li>MENU</li> </Link>
          <Link style={styles.link} to="/"> <li>GALLERY</li> </Link>
          <Link style={styles.link} to="/"> <li>ABOUT</li> </Link>
          <Link style={styles.link} to="/"> <li>PRESS</li> </Link>
          <Link style={styles.link} to="/"> <Button text="RESERVE"/> </Link>
        </ul>

        <div className="burger-menu">
          <BurgerButton size="2x" color="black" toggle={this.toggle}/>
        </div>
    
      </div>
    )
  };

  render() {
       
    return (
      <div>
        {this.state.isMobile ? this.renderMobile() : null}
        {this.renderHeader()}
      </div>
    );
  }
}

export default Header;