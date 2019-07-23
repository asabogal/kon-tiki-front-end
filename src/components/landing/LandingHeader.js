import React, { Component } from 'react';
import SocialBar from '../utils/SocialBar'
import BurgerButton from '../utils/BurgerButton'
import './style.css'

class LandingHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    return (
      <div className="landing-header">
        <BurgerButton
          size="2x"
          color="#ce6897"
          />
        <SocialBar
          size="2x"
          color="#ce6897"
        />
      </div>
    );
  }
}

export default LandingHeader;