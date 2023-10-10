import { useState } from "react";
import PokemonCard from "./components/PokemonCard";


  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);

  const handleClick = () => {
    if (pokemonIndex < pokemonList.length - 1) 
      setpokemonIndex(pokemonIndex + 1);
  }

  const lessClick = () => {
    if (pokemonIndex > 0) 
      setpokemonIndex(pokemonIndex - 1);
  };


  return (

    <div>

      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      {pokemonIndex > 0 &&<button onClick={lessClick}>Précédent</button>}
      {pokemonIndex < 4 && <button onClick={handleClick}>Suivant</button>}

    </div>
  );
}

export default App;