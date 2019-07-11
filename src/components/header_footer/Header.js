import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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

        <ul className="header-nav">
          <Link to="/">
            <li>Location</li>
          </Link>
          <Link to="/">
            <li>Location</li>
          </Link>
        </ul>

      </div>
    );
  }
}

export default Header;