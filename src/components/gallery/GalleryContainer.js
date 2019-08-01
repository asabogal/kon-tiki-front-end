import React from 'react';
import Gallery from "react-photo-gallery";
import { photos } from './Photos'

const GalleryContainer = () => {
  return (
    <div>
      <Gallery photos={photos} direction={"column"} />
    </div>
  );
};

export default GalleryContainer;