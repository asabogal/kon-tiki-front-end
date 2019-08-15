import React, { Component } from 'react';
import Hero from '../components/hero/Hero'
import Intro from '../components/home/Intro'
import Experience from '../components/home/Experience'
import image from '../components/hero/images/bar1.png'

import Radium from 'radium'

class HomePage extends Component {
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

  heroContent = () => {
    return (
      <div style={this.styles.heroContent}>
       <h1 style={{textDecoration: 'underline'}}>THIS IS KON-TIKI!</h1>
       <h2>"ECLECTIC CUISINE"</h2>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Hero
          image={image}
          content={this.heroContent()}
        />
        <div className="page-content">
          <Intro/>
          <Experience/>
        </div>
      </div>
    );
  }
}

export default Radium(HomePage);