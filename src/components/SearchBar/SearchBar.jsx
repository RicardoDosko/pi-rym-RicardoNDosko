/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from "react";
// import {onSearch} from '../../App.jsx'



export default function SearchBar(props) {
   const [ID, setID]= useState('');

  const handleChange = (event)=>{
   console.log(event.target.value)
   setID(event.target.value);
  }
  const handleRandom = ()=>{
   var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
   props.onSearch(numeroAleatorio)
   console.log(numeroAleatorio)
  }
   return (
      <div className="searchBarContainer">
          <input className="searchBarInput" onChange={handleChange} type='search'/>
         <button className="buttonSearch"  onClick={()=>props.onSearch(ID)}>Agregar personaje</button> 
         <button className="buttonSearch"  onClick={()=>handleRandom()}>Persononaje random</button> 
      </div>
   );
}
