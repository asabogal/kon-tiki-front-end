import React, { Component } from 'react';
import Hero from '../components/hero/Hero'
import heroImage from '../components/hero/images/menu1.png'
import MenuBoxes from '../components/menu/MenuBoxes'

import Radium from 'radium'

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount = () => {
    window.scroll(0, 0)
  }

  styles = {
    heroContent: {
      color: 'rgb(198, 245, 248)',
      fontSize: '35px',
      lineHeight: '30px',
      letterSpacing: '2px',
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
       <h1 style={{textDecoration: 'underline'}}>OUR MENUS</h1>
       <h2>TASTE... REIMAGINED</h2>
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
          <MenuBoxes/>
        </div>
      </div>
    );
  }
}

export default Radium(MenuPage);