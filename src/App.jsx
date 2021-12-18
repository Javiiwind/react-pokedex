import { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "./api";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

function App() {

    const [pokemon, setPokemon] = useState([]);

    const fetchPokemons = async () => {
        try {
          const data = await getPokemons();
          const promises = data.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url)
          })
          const results = await Promise.all(promises) 
          setPokemon(results)
        } catch(err){

        }
    }

    useEffect(() => {
       fetchPokemons();
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <Pokedex pokemons={pokemon}></Pokedex>
        </>
    );
}

export default App
