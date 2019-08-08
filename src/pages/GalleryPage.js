import React, { Component } from 'react';
import Gallery from '../components/gallery/GalleryContainer'

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount = () => {
    window.scroll(0, 0)
  }

  render() {
    return (
      <div>
        <Gallery/>
      </div>
    );
  }
}

export default GalleryPage;

