import PropTypes from "prop-types";


function PokemonCard({ pokemon }) {
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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
};


// // SayHello.propTypes = {
//   wilder: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     languages: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }).isRequired,
// } 
export default PokemonCard;