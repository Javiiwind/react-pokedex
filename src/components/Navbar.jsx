import "../styles/navbar.css";

const Navbar = () => {
    
    const pokeLogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    
    return (
        <>
          <div>
          <nav>
              <div>
              <img src={pokeLogo} 
              alt="pokemon-logo"
              className="navbar-image"
              />
              </div>
              <div>
              &#10084;&#65039; {100}
              </div>
          </nav>
          </div>
            
        </>
    )
}

export default Navbar
