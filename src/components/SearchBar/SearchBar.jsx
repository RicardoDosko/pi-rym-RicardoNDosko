/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState} from "react";
// import {onSearch} from '../../App.jsx'



export default function SearchBar(props) {
   const [ID, setID]= useState('');

  const handleChange = (event)=>{
   setId(event.target.value);
  }
   return (
      <div className="searchBarContainer">
          <input className="searchBarInput" onChange={handleChange} type='search'/>
         <button className="buttonSearch"  onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
