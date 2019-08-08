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
    window.scroll(0, 0)

    this.header = document.querySelector('.header-container')
    this.header.style.display = 'none'

    this.footer = document.querySelector('.footer-container')
    this.footer.querySelector('.social-bar').style.display = 'none'
    this.footer.querySelector('.footer-address').style.color = '#ce6897'
    this.footer.querySelector('.footer-number').style.color = '#ce6897'

    document.getElementById('root').style.padding = '0px'

    if (window.innerWidth > 768) {
      this.footer.style.display = 'none'
    }
  }

  componentWillUnmount = () => {
    this.header.style.display = 'flex'
    this.footer.style.display = 'flex'
    this.footer.querySelector('.social-bar').style.display = 'flex'
    this.footer.querySelector('.footer-address').style.color = 'white'
    this.footer.querySelector('.footer-number').style.color = 'white'
    document.getElementById('root').style.paddingBottom = '57px'
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