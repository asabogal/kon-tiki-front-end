import React, { Component } from 'react';
import Hero from '../components/hero/Hero'
import image from '../components/hero/images/bar1.png'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  heroContent = () => {
    return (
      <div>
       <h1 style={{color: 'aqua', fontSize: '80px'}}
          >PLACEHOLDER
       </h1>
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
      </div>
    );
  }
}

export default HomePage;