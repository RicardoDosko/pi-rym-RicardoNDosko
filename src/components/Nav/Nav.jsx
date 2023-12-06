/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SearchBar from "../SearchBar/SearchBar";


export default function Nav(props) {
    return (
       <div className="navContainer">
          <SearchBar onSearch={props.onSearch} />
       </div>
    );
 }
//<SearchBar onSearch={(onSearch) => window.alert(characterID)} />