import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function HornedBeast({ _id, title, image_url, description, favorites, onFavorite, onBeastClick}) { 
  return (
    <Card style={{ width: '18rem', margin: '10px' }} onClick={() => onBeastClick()}>
      <Card.Img variant="top" src={image_url} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={(e) => { 
          e.stopPropagation(); onFavorite(_id); }}>❤️ {favorites}</Button>
      </Card.Body>
    </Card>
  );
}

HornedBeast.propTypes = {
  _id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  favorites: PropTypes.number,
  onFavorite: PropTypes.func.isRequired,
  onBeastClick: PropTypes.func.isRequired,
};

export default HornedBeast;
