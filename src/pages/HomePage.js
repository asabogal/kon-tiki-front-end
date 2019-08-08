import React, { Component } from 'react';
import Hero from '../components/hero/Hero'
import Intro from '../components/home/Intro'
import Experience from '../components/home/Experience'
import image from '../components/hero/images/bar1.png'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  heroContent = () => {
    return (
      <div className="hero-content">
       <h1 style={{textDecoration: 'underline'}}>WELCOME TO KON-TIKI</h1>
       <h2>ECLECTIC ASIAN CUSINE</h2>
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

export default HomePage;