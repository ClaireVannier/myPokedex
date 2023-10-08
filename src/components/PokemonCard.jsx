function PokemonCard() {
    let pokemon = pokemonList[1];
    return (
        <div>
            <p>{pokemon.name}</p>
            {
                pokemon.imgSrc ? 
                <img width = "200" src={pokemon.imgSrc} alt="photo de bulbasaur" /> 
                : <p>???</p>
            }
        </div>
    );
};

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];


export default PokemonCard;