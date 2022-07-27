import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

// const colors = [
//   "#845EC2",
//   "#D65DB1",
//   "#FF6F91",
//   "#FF9671",
//   "#FFC75F",
//   "#F9F871",
//   "#548A66",
//   "#275F69",
//   "#2F4858",
//   "#C2A45E",
// ];
// const ramdonColorIndex = Math.floor(Math.random() * colors.length);
// const color = colors[ramdonColorIndex];
// document.body.style = `background: ${color}`;
// const appBack = { backgroundColor: color };

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
