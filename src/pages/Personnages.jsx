import React, { useState, useEffect } from 'react';
import Header from "../components/Page_Accueil/Header";
import { Presentation } from "../components/Presentation";
import { CharacterCarousel } from "../components/Page_Personnages/CharacterCarousel";
import axios from 'axios';

export default function Personnages() {
  const [characters, setCharacters] = useState([]);
  const [message, setMessage] = useState('')

  useEffect(() => {

    async function ImportCharacters() {
      try {
        const res = await axios.get("https://dattebayo-api.onrender.com/characters");
        console.log("API response:", res.data);
        setCharacters(res.data.characters);
      } catch (err) {
        console.error("Erreur de récupération :", err);
        setMessage("Impossible de récupérer les ninjas.");
      }
    }
    ImportCharacters();

  }, []);


  return (
    <>
      <Header />
      <Presentation
        title="Personnages"
        description={`Ils sont ninjas, senseï, orphelins, légendes ou encore démons enfermés dans des 
            corps humains. Ils viennent de Konoha, Suna, Kiri ou d’autres villages cachés. Certains 
            cherchent la paix, d’autres poursuivent le pouvoir ou la vengeance.\n
            Dans l’univers de Naruto, chaque personnage a sa propre histoire, ses combats intérieurs, 
            ses techniques secrètes et ses liens uniques avec les autres. Qu’il soit héros ou antagoniste, 
            chaque ninja joue un rôle essentiel dans le destin du monde shinobi.\n
            De Naruto Uzumaki, l’enfant rejeté devenu Hokage, à Itachi Uchiha, le traître incompris, 
            en passant par Hinata, Gaara, ou Kakashi, les visages de cette saga sont riches en émotions, 
            en parcours de vie, et en enseignements.\n
          Plonge dans la galerie des personnages emblématiques, découvre leur passé, leurs techniques, leurs clans, et les moments clés qui ont fait d’eux des figures inoubliables du manga.`}
      />
      {message && <p className="text-danger">{message}</p>}
      <div className="d-flex justify-content-center my-5">
        <CharacterCarousel characters={characters} />
      </div>
      
    </>
  );
}
