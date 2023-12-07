/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import axios from 'axios';



function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=henrystaff`).then(
         ({ data }) => {
            if (data.name) {
               const characterRepeat = characters.map((data)=> data.id)
               if(characterRepeat.includes(data.id)){
                  window.alert('ya existe el personaje')
               }else{
                  setCharacters((oldChars) => [...oldChars, data]);
               }
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }
   const onClose = (id) => {
      //const parsedId = parseInt(ID, 10);// Parsea el ID a number
      const updatedCharacters = characters.filter(
         (character) => character.id !== id
      );// aca quiero Filtrar los personajes que tienen un ID diferente al que quiero eliminar
   
      setCharacters(updatedCharacters);//Acá estoy Actualizando el estado local con los personajes filtrados
   };
   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
