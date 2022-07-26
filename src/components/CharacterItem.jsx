import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const CharacterItem = ({ characterUrl }) => {
  const [character, setCharacter] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(characterUrl).then((res) => setCharacter(res.data));
  }, []);
  console.log(character);
  return (
    <div
      onClick={() => navigate(`/pokedex/${character.id}`)}
      className="father"
    >
      <div className="card-1">
        <h3 className="car">{character.name}</h3>

        <div className="cards">
          <strong>Types:</strong>
          {character.types?.[0].type.name}, {character.types?.[1]?.type.name}
        </div>
        <div className="cards">
          <strong>hp:</strong>
          {character.stats?.[0].base_stat}
        </div>
        <div className="cards">
          <strong>attack:</strong>
          {character.stats?.[1].base_stat}
        </div>
        <div className="cards">
          <strong>defense:</strong>
          {character.stats?.[2].base_stat}
        </div>
        <div className="cards">
          <strong>speed:</strong>
          {character.stats?.[3].base_stat}
        </div>
      </div>

      <div className="card-2 color">
        <img src={character.sprites?.other.dream_world.front_default} alt="" />
      </div>
    </div>
  );
};

export default CharacterItem;
