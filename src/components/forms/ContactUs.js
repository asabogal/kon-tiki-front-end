import React, { Component } from 'react'
import Button from '../utils/Button'
import './style.css'

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }
  

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    alert('message submited')
    event.preventDefault()
  };

  render () {
    return (
      <div className="contact-container">
        <div className="contact-heading">
          <h3>CONTACT US</h3>
        </div>

        <div>
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
             <input
              placeholder="Email"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
             <textarea
              placeholder="Message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <submit>
              <Button
                text="CONTACT US"
                padding="2px 60px"
              />
            </submit>
          </form>
        </div>
      </div>
    )
  }
};


export default ContactUs;