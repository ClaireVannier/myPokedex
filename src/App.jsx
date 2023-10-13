import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";



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
  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  );
  const [selectedPokemon, setselectedPokemon] = useState(null);

  return (

    <div>
      <div>
        <NavBar
          setselectedPokemon={setselectedPokemon}
          selectedPokemon={selectedPokemon}
          pokemonList={pokemonList}
        />
      </div>

      {selectedPokemon && <PokemonCard pokemon={selectedPokemon} />}
    </div>
  );
}

export default App;