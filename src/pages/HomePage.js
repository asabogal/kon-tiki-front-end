import React, { Component } from 'react';
import Header from '../components/header_footer/Header'
import Hero from '../components/hero/Hero'
import image from '../components/hero/images/fish1.png'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  heroContent = () => {

    return (
      <div>
       <h1>WELCOME TO KONTIKI</h1>
      </div>
    )
    
  }
  render() {
    return (
      <div>
        <Header/>
        <Hero
          image={image}
          content={this.heroContent()}
        />
        <Header/>
      </div>
    );
  }
}

export default HomePage;