/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function Card({id, name, status, species, gender, origin, image, onClose }) {
  return (
    <div className='cardContainer'>
        <>
          <button className='buttonCard' onClick={() => onClose(id)}>X</button>
          <h2>Name: {name}</h2>
          <h4>Status: {status}</h4>
          <h4>Species: {species}</h4>
          <h4>Género: {gender}</h4>
          <h4>Origen: {origin}</h4>
          <img className='imgcard' src={image} alt={name} />
        </>
    </div>
  );
}

