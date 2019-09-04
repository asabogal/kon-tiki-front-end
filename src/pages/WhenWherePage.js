import React, { Component } from 'react';
import Head from '../components/when_where/Head'
import ContactUs from '../components/forms/ContactUs'

class WhenWherePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="page-content">
      <Head/>
      <ContactUs/>
      </div>
    );
  }
}

export default WhenWherePage;