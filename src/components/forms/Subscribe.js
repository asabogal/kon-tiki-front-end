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

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    alert('email submited')
    event.preventDefault()
  }

  
  render() {
    return (
      <div className="subscribe-container">
        <div>
          <h3>
            KEEP UP TO DATE WITH US
          </h3>
          <p>
            Sign up for all the latests news, deals and events at Kon-Tiki.
          </p>
        </div>
        <div className="subscribe-form">
          <form onSubmit={this.handleSubmit}>
            <input 
              placeholder="Email Address"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <submit>
              <Button
                text="SIGNUP"
                padding="2px 60px"
              />
            </submit>
          </form>
       
        </div>
      </div>
    );
  }
}

export default Subscribe;
