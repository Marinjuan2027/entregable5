import React, { useState } from "react";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import poke from "../images/pokeapi.png";

const UserInput = () => {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(changeUser(userName));
    navigate("/pokedex");
  };

  return (
    <div className="beginning container">
      <div className="pokeball-background"></div>
      <div className="banner">
        <h1 className="title">Hello trainer!</h1>

        <img src={poke} alt="" />
      </div>
      <p className="title">Give me your name to start</p>
      <div className="form">
        <form onSubmit={submit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
