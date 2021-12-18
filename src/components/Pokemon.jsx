import "../styles/pokemon.css";

const Pokemon = ({pokemons}) => {
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
                <div>
                    <div>
                        {pokemons.types.map((type, idx) => {
                            return(
                                <div key={idx}>{type.name}</div>
                            )
                        })}
                    </div>
                    <div>♥</div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon
