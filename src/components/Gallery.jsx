import React from 'react';
import HornedBeast from './HornedBeast';

const Gallery = ({ beasts, onBeastClick, onFavorite }) => {
  return (
    <div className="gallery-container">
      {beasts.map((beast, index) => (
        <div key={index}>
          <HornedBeast
            key={beast._id}
            _id={beast._id}
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description}
            favorites={beast.favorites}
            onBeastClick={() => onBeastClick(beast)}
            onFavorite={() => onFavorite(beast._id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;



