import React from 'react';
import HornedBeast from './HornedBeast';

const animals = [
    {
        "_id": 1,
        "image_url": "https://i.natgeofe.com/n/c6eff55e-c9e2-4865-aa95-4fa05172bc01/13-animals-with-horns-nationalgeographic_1284317_3x2.jpg",
        "title": "Eastern Black Rhino",
        "description": "The eastern black rhino is adorned with an elegant set of hefty horns. Poachers will risk life and limb to get their hands on rhino horn, and as a result, the eastern black rhino is critically endangered.",
        "keyword": "easternBlackRhino",
        "horns": 2
      },
      {
        "_id": 2,
        "image_url": "https://i.natgeofe.com/n/f1bda28c-db65-4913-9c34-372b35239d11/01-animals-with-horns-nationalgeographic_1100992_3x2.jpg",
        "title": "Malaysian Horned Leaf Frog",
        "description": "The upper eyelids and snout of the Malaysian horned leaf frog protrude sharply from its head, creating the illusion of horns.",
        "keyword": "hornedFrog",
        "horns": 3
      },
      {
        "_id": 3,
        "image_url": "https://i.natgeofe.com/n/aa092c1f-6cff-4465-bb42-1f6bf02cc610/19-animals-with-horns-nationalgeographic_2176681_3x2.jpg",
        "title": "Rainbow Scarabs",
        "description": "These horns are used in fights with rivals and may also play a role in attracting a mate.",
        "keyword": "rainbowScarab",
        "horns": 1
    }
];


function Gallery() {
  return (
    <div>
      {animals.map(animal => (
        <HornedBeast
          key={animal._id}
          title={animal.title}
          imageUrl={animal.image_url}
          description={animal.description}
        />
      ))}
    </div>
  );
}

export default Gallery;
