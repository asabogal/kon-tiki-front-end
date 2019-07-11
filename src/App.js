import React, { Component } from 'react';
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Kon-Tiki Greenport</title>
          <meta name="description" content="Kon-Tiki Restaurant and Bar at The Gallery Hotel" />
          <meta name="keywords" cpntent="greenport, restaurant, bar, gallery hotel, gallery, hotel" />
        </Helmet>
      </div>
    );
  }
}

export default App; 