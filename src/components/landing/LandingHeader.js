import React, { Component } from 'react';
import SocialBar from '../utils/SocialBar'
import BurgerButton from '../utils/BurgerButton'
import './style.css'

class LandingHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  componentDidMount = () => {
    document.querySelector('.header-container').style.display = 'none'
  }

  render() {
    return (
      <div className="landing-header">
        <BurgerButton
          size="2x"
          color="#ca5b93de"
          />
        <SocialBar
          size="2x"
          color="#ca5b93de"
        />
      </div>
    );
  }
}

export default LandingHeader;