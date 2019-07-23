import React, { Component } from 'react';
import dinner from './menu_imgs/Food Menu 7.15.pdf'
import drinks from './menu_imgs/Beverage Menu 2.1.pdf'

export class DinnerMenu extends Component {

  componentDidMount = () => {
    window.scroll(0, 0)
  }

  render() {
    return (
      <div className="pdf-container">
        <embed
          className="menu-img"
          src={dinner}
          type="application/pdf"
        />
    </div>
    );
  }
}


export class DrinksMenu extends Component {

  componentDidMount = () => {
    window.scroll(0, 0)
  }

  render() {
    return (
      <div className="pdf-container">
        <embed
          className="menu-img"
          src={drinks}
          type="application/pdf"
        />
    </div>
    );
  }
}