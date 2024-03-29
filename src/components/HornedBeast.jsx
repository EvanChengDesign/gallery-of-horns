import React from 'react';
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


export default HornedBeast;
