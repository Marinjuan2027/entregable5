import React, { useState } from "react";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Actions:
// 1. Crear la accion en el slice
// 2. Exportar la accion
// 3. Importarla en el componente donde la utilizaremos
// 4. Importar y ejecutar useDispatch
// 5. despachamos la acción

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
        {/* <img
          src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png"
          alt=""
        /> */}
        <img
          src="https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/c/c0/latest/20210725170725/Entrenador_Pok%C3%A9mon_RojoFuego_y_VerdeHoja.png/1200px-Entrenador_Pok%C3%A9mon_RojoFuego_y_VerdeHoja.png"
          alt=""
        />
      </div>
      <p className="title">Give me your name to start</p>
      <div className="form">
        <form onSubmit={submit}>
          {/* <h1>Hello trainer!</h1> */}
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
