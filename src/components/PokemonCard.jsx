import PropTypes from "prop-types";


function PokemonCard({ pokemon }) {
    return (
        <div>
            <figure>
                <figcaption>{pokemon.name}</figcaption>
                {
                    pokemon.imgSrc ?
                        <img width="200" src={pokemon.imgSrc} alt="photo du pokemon" />
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

export default PokemonCard;