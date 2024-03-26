import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function HornedBeast({ title, imageUrl, description }) {

  const [favorites, setFavorites] = useState(0);

  const addFavorite = () => {
    setFavorites(favorites + 1);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}> 
      <Card.Img variant="top" src={imageUrl} alt={title}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={addFavorite}>❤️ {favorites}</Button>
      </Card.Body>
    </Card>
  );
}

export default HornedBeast;
