import React, { Component } from 'react';
import SocialBar from '../utils/SocialBar'
import BurgerButton from '../utils/BurgerButton'

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
        <BurgerButton/>
        <SocialBar/>
      </div>
    );
  }
}

export default LandingHeader;