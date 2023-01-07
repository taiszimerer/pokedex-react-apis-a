import Router from "./routes/Router";
import { useState } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { BASE_URL } from './constants/BASE_URL'
import {useEffect } from 'react'
import axios from "axios"

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    if (pokemon.length<=40){
   getPokemons()
    }
  }, [])

  const getPokemons = async () => {
    const endpoints = []
    for (let i = 1; i < 41; i++) {
      endpoints.push(`${BASE_URL}/pokemon/${i}`)
    }
    console.log(endpoints)
    const res = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemon(res))
  }

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.data.name === pokemonToAdd.data.name
    )

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
       setPokedex(newPokedex);  
       alert("Capturado")    
    }
  }

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.data.name !== pokemonToRemove.data.name
    );
    setPokedex(newPokedex);
  }

  const context = {
    pokedex,
    setPokedex,
    pokemon,
    setPokemon,
    addToPokedex,
    removeFromPokedex
  }

  return (
    <div className="App">
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </div>
  );
}
export default App;
