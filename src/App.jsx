/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
//Dependencias
import React, { useState } from 'react';
import axios from 'axios';
import {Route,Routes,useLocation} from 'react-router-dom';

//Styles
import './App.css';
//components
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Error from './components/Error/error.jsx';


function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation()
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
        {location.pathname !== '/' ?  <Nav onSearch={onSearch} /> : null}
         <Routes>
            <Route path='/Home' element={ <Cards characters={characters} onClose={onClose} />} />
            <Route path='/About' element={<About/>}/>
            <Route path='/Detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
