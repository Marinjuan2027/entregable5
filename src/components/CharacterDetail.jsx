import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getTypeColor from "../utils/getTypeColor";

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
    <div
      className=" container"
      style={{
        background: getTypeColor(character.types?.[0]?.type?.name),
      }}
    >
      <div className="app">
        <div className="pokeball-background"></div>
        <a className="settings" href="#/settings">
          <i className="fas fa-cog"></i>
        </a>
        <div className="ui container">
          <div className="ui grid">
            <div className="left aligned left floated eight wide column">
              <a href="#/pokedex">
                <i
                  floated="left"
                  aria-hidden="true"
                  className="black arrow left large icon"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </i>
              </a>
            </div>
            <div className="right floated eight wide column"></div>
            <div className="computer only left floated eight wide column">
              <img
                src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png"
                alt=""
                className="ui medium image"
              />
            </div>
            <div className="computer only right floated eight wide column"></div>
          </div>
          <div className="ui grid">
            <div className="mobile only left floated eight wide column">
              <img
                src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png"
                alt=""
                className="ui medium image"
              />
            </div>
            <div className="mobile only right floated eight wide column"></div>
            <div className="mobile only sixteen wide column">
              <div className="ui basic very padded segment"></div>
            </div>
          </div>

          <div className="ui centered stackable two column grid">
            <div className="twelve wide column">
              <div className="ui raised staked segment">
                <img
                  src={character.sprites?.other.dream_world.front_default}
                  alt=""
                  className="ui medium centered image imagefix"
                />
                <div className="ui center aligned two column grid">
                  <div className="column">
                    <h2 className="ui header">
                      {character.weight}
                      <div className="sub header">Weight</div>
                    </h2>
                  </div>
                  <div className="column">
                    <h2 className="ui header">
                      {character.height}
                      <div className="sub header">Height</div>
                    </h2>
                  </div>
                  <div className="ui horizontal divider">
                    <h1 className="ui header cap textshadow">
                      {character.name}
                    </h1>
                    <div className="sub header">
                      <div className="ui large basic label">
                        # {character.id}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui stackable two column grid">
                  <div className="colum">
                    <div className="ui segment">
                      <div className="ui horizontal dividier">
                        <h1 className="ui header cap">Type</h1>
                      </div>
                      <div className="ui stackable equal width grid">
                        <div className="center aligned column">
                          <div className="ui inverted segment cap">grass</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h1>CharacterDetail</h1>
      <h3>{character.name}</h3> */}
    </div>
  );
};

export default CharacterDetail;
