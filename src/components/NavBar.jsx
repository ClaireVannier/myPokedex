function NavBar({pokemonList, pokemonIndex, setpokemonIndex}) {

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
            {pokemonIndex > 0 && <button onClick={lessClick}>Précédent</button>}
            {pokemonIndex < 4 && <button onClick={handleClick}>Suivant</button>}
        </div>
    );
};

export default NavBar;