/* eslint-disable no-unused-vars */
import React from "react";
 import styles from "./About.module.css";
import logo from "../../assets/Logo.jpeg"

export default function About() {
  return (
    <div className={styles.containerAbout}>
      <div className={styles.containerDescription}>
        <h1>Dosko Ricardo Nery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={styles.containerImgUser}>
        <img src={logo} alt="Logo User" />
        <h1>Rosario, Argentina</h1>
      </div>
    </div>
  )
  }