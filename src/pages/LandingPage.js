import React, { Component } from 'react';
import LandingHeader from '../components/landing/LandingHeader'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <LandingHeader/>
      </div>
    );
  }
}

export default LandingPage;