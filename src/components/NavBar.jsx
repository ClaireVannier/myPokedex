import React from "react";

function NavBar({ pokemonList, selectedPokemon, setselectedPokemon}) {

    const handlePokemonClick = (pokemon) => {
        setselectedPokemon(pokemon);
        if (pokemon.name === "pikachu") {
            setTimeout(() => {
            alert("pika pikachu !!!")
            }, 100)}
    }

    return (
        <div>
            {pokemonList.map((element) =>
                <button
                    onClick={() => handlePokemonClick(element)}
                    key={element.name}
                    className={element === selectedPokemon ? "active" : ""}
                >
                    {element.name}
                </button>

            )};
        </div>
    )
}

export default NavBar;
