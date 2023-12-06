/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function Card({ name, status, species, gender, origin, image, onClose }) {
  return (
    <div className='cardContainer'>
        <>
          <button onClick={onClose}>X</button>
          <h2>Name: {name}</h2>
          <h2>Status: {status}</h2>
          <h2>Species: {species}</h2>
          <h2>Género: {gender}</h2>
          <h2>Origen: {origin}</h2>
          <img className='imgcard' src={image} alt={name} />
        </>
    </div>
  );
}

