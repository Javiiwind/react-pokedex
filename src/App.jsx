import { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "./api";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { FavoriteProvider } from "./contexts/favoritesContext";

function App() {

    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    const fetchPokemons = async () => {
        try {
          setLoading(true);
          const data = await getPokemons(25, 25 * page);
          const promises = data.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url)
          })
          const results = await Promise.all(promises) 
          setPokemon(results)
          setLoading(false)
          setTotal(Math.ceil(data.count / 25))
        } catch(err){

        }
    }

    useEffect(() => {
       fetchPokemons();
    }, [page]);

    const updateFavoritePokemons = (name) => {
      const updated = [...favorites];
      const isFavorite = updated.indexOf(name);
      if(isFavorite >= 0) {
        updated.splice(isFavorite, 1);
      } else {
        updated.push(name);
      }
      setFavorites(updated);
    };

    return (
      <FavoriteProvider value={{favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons}}>  
        <div>
            <Navbar />
            <div className="App">
            <Searchbar />
            <Pokedex 
              loading = {loading}
              pokemons = {pokemon} 
              page = {page}
              setPage = {setPage}
              total = {total}
            />
            </div>
        </div>
        </FavoriteProvider>  
    );
}

export default App
