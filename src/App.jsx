import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import Pokedex from "./components/Pokedex";
import CharacterDetail from "./components/CharacterDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<UserInput />}></Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />}></Route>
            <Route path="/pokedex/:id" element={<CharacterDetail />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
