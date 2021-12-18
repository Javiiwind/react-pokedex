import "../styles/pokedex.css";
import Pokemon from "./Pokemon";

const Pokedex = ({pokemons}) => {
    return (
        <>
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <div>Paginacion</div>
            </div>   
            <div className="pokedex-grid">
               {pokemons.map((pokemon, idx) => {
                   return(
                       <Pokemon pokemons={pokemon} key={pokemon.name}></Pokemon>
                   )
               })}
            </div>   
        </div>  
        </>
    )
}

export default Pokedex
