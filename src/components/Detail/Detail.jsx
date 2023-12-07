/* eslint-disable react/no-unescaped-entities */
import { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from './detail.module.css'

export default function Deatil() {
    const [character, setCharacter] = useState({});
    const { id } = useParams();
  
    useEffect(() => {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=henrystaff`).then(
        ({ data }) => {
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        }
      );
      return setCharacter({});
    }, [id]);
  
    return (
        <div className={styles.containerDeatil}>
        <div className={styles.containerDescriptions}>
          <img src={character.image} alt={character.name} />
          <div className={styles.containerData}>
            <h1>Hi! I'm {character.name}</h1>
            <div>
              <h2>Status: {character.status}</h2>
              <h2>Species: {character.species}</h2>
              <h2>Gender: {character.gender}</h2>
              <h2>Origin: {character.origin?.name}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }