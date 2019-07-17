import React, { Component } from 'react';
import Hero from '../components/hero/Hero'
import heroImage from '../components/hero/images/fish1.png'

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  heroContent = () => {
    return (
      <div>
        <h1>PLACEHOLDER</h1>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Hero
          image={heroImage}
          content={this.heroContent()}
        />
      </div>
    );
  }
}

export default MenuPage;