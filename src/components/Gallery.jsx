import React from 'react';
import HornedBeast from './HornedBeast';
import beasts from './data.json';

const Gallery = () => {
  return (
    <div className="gallery-container">
      {beasts.map((beast, index) => (
        <HornedBeast
          key={index}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
        />
      ))}
    </div>
  );
};


export default Gallery;

