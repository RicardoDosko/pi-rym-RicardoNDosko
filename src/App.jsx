/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
//Dependencias
import React, { useState , useEffect} from 'react';
import axios from 'axios';
import {Route,Routes,useLocation, useNavigate} from 'react-router-dom';

//Styles
import './App.css';
//components
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Error from './components/Error/error.jsx';
import Form from './components/Form/Form.jsx'; 


function App() {
   const [characters, setCharacters] = useState([]);
   // const [user, setUser]= useState('')
   // const [password, setpassword]= useState('')
   const location = useLocation()
   const navigate = useNavigate()
   const [ access,setAccess] = useState(false)
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
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
      const updatedCharacters = characters.filter(
         (character) => character.id !== id
      );// aca quiero Filtrar los personajes que tienen un ID diferente al que quiero eliminar
   
      setCharacters(updatedCharacters);//Acá estoy Actualizando el estado local con los personajes filtrados
   };
   const login = (userData)=>{
      if(userData.email === 'ricardo.dosko@gmail.com' && userData.password === 'ricardo123'){
         navigate('/home')
         setAccess(true)
      }else {
         alert('su email y/o contraseña no coincide')
      }
   }
   const logOut=()=>{
      setAccess (false)
      // console.log('entro')
   }
   return (
      <div className='App'>
        {location.pathname !== '/' ?  <Nav onSearch={onSearch} logOut={logOut} /> : null}

         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/Home' element={ <Cards characters={characters} onClose={onClose} />} />
            <Route path='/About' element={<About/>}/>
            <Route path='/Detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
