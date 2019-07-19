import React, { Component } from 'react';
import LandingHeader from '../components/landing/LandingHeader'
import LandingBody from '../components/landing/LandingBody'
import './style.css'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount = () => {
    document.querySelector('.header-container').style.display = 'none'
    // document.querySelector('.footer-container social-bar').style.display = 'none'
    
  }

  render() {
    return (
      <div className="landing-page">
        <LandingHeader/>
        <LandingBody/>
      </div>
    );
  }
}

export default LandingPage;