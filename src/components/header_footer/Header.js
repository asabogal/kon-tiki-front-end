import React, { Component } from 'react';
import './style.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="header-container">
        <div> LOGO </div>
        <div> MENU </div>
      </div>
    );
  }
}

export default Header;