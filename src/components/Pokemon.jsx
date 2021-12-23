import "../styles/pokemon.css";

const Pokemon = ({pokemons}) => {


    const redHeart = "&#10084;&#65039;";
    const blackHeart = "🖤";

    return (
            <div className="pokemon-card">
            <div className="pokemon-img-container">
               <img className="pokemon-img" src={pokemons.sprites.front_default} alt={pokemons.name} /> 
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemons.name}</h3>
                    <div>
                        #{pokemons.id}
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemons.types.map((type, idx) => {
                            return(
                                <div key={idx} className="pokemon-type-text">{type.type.name}</div>
                            )
                        })}
                    </div>
                    <button>
                        <div className="pokemon-favorite">{blackHeart}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon
