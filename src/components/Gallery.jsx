import React from 'react';
import HornedBeast from './HornedBeast';


const Gallery = ({ beasts, onBeastClick }) => {
  return (
    <div className="gallery-container">
      {beasts.map((beast, index) => (
        <div key={index} onClick={() => onBeastClick(beast)}>
        <HornedBeast
          key={index}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
        />
    </div>
      ))}
   </div>   
  );
};


export default Gallery;

