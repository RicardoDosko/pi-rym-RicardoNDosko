/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Card from '../Card/Card'; // Importa el componente Card correctamente

export default function Cards({ characters,onClose }) {
  return (
    <div className='cardsContainer'>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name} 
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

