/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";


export default function Nav({onSearch,logOut}) {
   
    return (
       <div className="navContainer">
          <NavLink to={'/About'}>About</NavLink>
          <NavLink  to={'/Home'}>Home</NavLink>
          <SearchBar onSearch={onSearch} />
          <button onClick={logOut}>LogOut</button>
       </div>
    );
 }
//<SearchBar onSearch={(onSearch) => window.alert(characterID)} />