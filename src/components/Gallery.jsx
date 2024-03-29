import React from 'react';
import PropTypes from 'prop-types';
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

Gallery.propTypes = {
  beasts: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    description: PropTypes.string,
    favorites: PropTypes.number
  })).isRequired,
  onBeastClick: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired
};

export default Gallery;



