function PokemonCard({pokemon}) {
    console.log(pokemon);
    return (
        <div>
            <figure>
                <figcaption>{pokemon.name}</figcaption>
            {
                pokemon.imgSrc ?
                    <img width="200" src={pokemon.imgSrc} alt="photo de bulbasaur" />
                    : <p>???</p>
            }
            </figure>
        </div>
        );
};


export default PokemonCard;