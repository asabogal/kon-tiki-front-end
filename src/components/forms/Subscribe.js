import React, { Component } from 'react';
import Button from '../utils/Button'

import './style.css'

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: ''
     };
  }
  
  render() {
    return (
      <div className="subscribe-container">
        <div>
          <h3>
            KEEP UP TO DATE WITH US
          </h3>
          <p>
            Signup to receive special updates and news from Kon-Tiki!
          </p>
        </div>
        <div className="subscribe-form">
          <form>
            <input 
              placeholder="Email Address"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </form>
          <Button
            text="SIGNUP"
            padding="2px 60px"
          />
        </div>
      </div>
    );
  }
}

export default Subscribe;
