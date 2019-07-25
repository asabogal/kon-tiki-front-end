import React, { Component } from 'react';
import SocialBar from '../utils/SocialBar'
import BurgerButton from '../utils/BurgerButton'
import MobileNavigation from '../mobile/MobileNavigation'
import { Link } from 'react-router-dom'
import './style.css'
import '../mobile/style.css'

class LandingHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })

    let image = document.querySelector('.landing-image')
    return this.state.isOpen ? image.style.display = 'block' : image.style.display = 'none'
  };

  renderMobile = () => {
    return (
      <MobileNavigation color="#ce6897" font="50px" duration="0" background="white" toggle={this.toggle}>
        <Link to="/home"> <li>HOME</li> </Link>
        <Link to="/menu"> <li>MENU</li> </Link>
        <Link to="/"> <li>RESERVE</li> </Link>
        <Link to="/"> <li>CONTACT</li> </Link>
      </MobileNavigation>
    )
  };

  renderHeader = () => {
    return (
      <div className="landing-header">
        <BurgerButton 
          toggle={this.toggle} 
          size="2x" 
          color="#ce6897"/>

        <SocialBar
          size="2x"
          color="#ce6897"
        />
      </div>
    )
  };

  renderContent = () => {
    return this.state.isOpen ? this.renderMobile() : this.renderHeader()
  };

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default LandingHeader;