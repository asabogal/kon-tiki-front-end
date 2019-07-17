import React, { Component } from 'react';
import Hero from '../components/hero/Hero'
import heroImage from '../components/hero/images/fish1.png'
import MenuOptions from '../components/menu/MenuOptions'

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  heroContent = () => {
    return (
      <div>
        <h1 style={{color: 'white'}} 
        >PLACEHOLDER</h1>
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
        <MenuOptions/>
      </div>
    );
  }
}

export default MenuPage;