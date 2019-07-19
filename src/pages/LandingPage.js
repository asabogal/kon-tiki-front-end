import React, { Component } from 'react';
import LandingHeader from '../components/landing/LandingHeader'
import './style.css'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="landing-page">
        <LandingHeader/>
      </div>
    );
  }
}

export default LandingPage;