import React from 'react';
import HornedBeast from './HornedBeast';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <HornedBeast title="Eastern Black Rhino" imageUrl="src/images/eastern-black-rhino.png" description="An Eastern Black Rhino" />
      <HornedBeast title="Texas Horned Frog" imageUrl="src/images/texas-horned-lizard.png" description="A Texas Horned Frog." />
    </div>
  );
};

export default Gallery;
