import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CharacterItem from "./CharacterItem";

const Pokedex = () => {
  const user = useSelector((state) => state.user);

  const [characters, setCharacters] = useState([]);
  const [characterSearch, setCharacterSearch] = useState("");
  const [locations, setLocations] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setCharacters(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setLocations(res.data.results));
  }, []);

  console.log(locations);

  const search = (e) => {
    e.preventDefault();
    navigate(`/pokedex/${characterSearch}`);
  };

  const filterLocation = (e) => {
    // alert("se selecciono una ubicacion" + e.target.value);
    axios.get(e.target.value).then((res) => setCharacters(res.data.pokemon));
  };
  console.log(characters);

  return (
    <div className="container">
      <div className="pokeball-background"></div>
      <h2 className="title">Pokedex</h2>
      <p className="title pokedex">
        Welcome {user}, here you can find your favorite pokemon
      </p>
      <div className="form">
        <form onSubmit={search} className="beginning">
          <input
            type="text"
            value={characterSearch}
            onChange={(e) => setCharacterSearch(e.target.value)}
          />
          <button>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>

      <select onChange={filterLocation}>
        <option value={location.url}>All pokemon</option>
        {locations.map((location) => (
          <option value={location.url} key={location.url}>
            {location.name}
          </option>
        ))}
      </select>

      <ul className="container-card">
        {characters.map((character) => (
          <CharacterItem
            characterUrl={character.url ? character.url : character.pokemon.url}
            key={character.url ? character.url : character.pokemon.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
