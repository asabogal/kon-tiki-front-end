import React, { Component } from 'react';
import Hero from '../components/hero/Hero'
import heroImage from '../components/hero/images/menu1.png'
import MenuOptions from '../components/menu/MenuOptions'

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount = () => {
    window.scroll(0, 0)
  }

  style = {
    hero: {
      color: 'aqua',
      fontSize: '40px',
      lineHeight: '30px',
      letterSpacing: '2px',
      textAlign: 'center'
    }
  }

  heroContent = () => {
    return (
      <div style={this.style.hero}>
       <h1>OUR MENUS!</h1>
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
        <div className="page-content">
          <MenuOptions/>
        </div>
      </div>
    );
  }
}

export default MenuPage;