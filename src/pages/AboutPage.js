import React, { Component } from 'react';
import Intro from '../components/about/intro'

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount = () => {
    window.scroll(0, 0)
  }

  styles = {
    heroContent: {
      color: 'aqua',
      fontSize: '35px',
      lineHeight: '30px',
      letterSpacing: '3px',
      textAlign: 'center',
      '@media (max-width: 768px)': {
        fontSize: '28px',
        letterSpacing: 'normal'
      }
    }
  }

  render() {
    return (
      <div>
        <Intro/>
      </div>
      
    );
  }
}

export default AboutPage;