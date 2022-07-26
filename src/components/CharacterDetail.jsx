import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setCharacter(res.data));
  }, [id]);

  console.log(character);

  return (
    <div className=" container">
      <div className="pokeball-background"></div>

      <h1>CharacterDetail</h1>
      <h3>{character.name}</h3>
      <img src={character.sprites?.other.dream_world.front_default} alt="" />
    </div>
  );
};

export default CharacterDetail;
