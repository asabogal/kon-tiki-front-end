import React, { Component } from 'react';
import Routes from './Routes'
import Helmet from 'react-helmet'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Kon-Tiki Greenport</title>
          <meta name="description" content="Kon-Tiki Restaurant and Bar at The Gallery Hotel" />
          <meta name="keywords" content="kon-tiki, kon, tiki, greenport, restaurant, bar, gallery hotel, gallery, hotel" />
        </Helmet>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App; 