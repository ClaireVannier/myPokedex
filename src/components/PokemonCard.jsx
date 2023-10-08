function PokemonCard() {
    let pokemon = pokemonList[0];
    return (
        <div>
            <figure>
                <figcaption>Bulbasaur</figcaption>
            {
                pokemon.imgSrc ?
                    <img width="200" src={pokemon.imgSrc} alt="photo de bulbasaur" />
                    : <p>???</p>
            }
            </figure>
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


