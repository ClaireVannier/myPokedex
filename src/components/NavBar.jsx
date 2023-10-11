function NavBar({ pokemonList, pokemonIndex, setpokemonIndex }) {

    const handlePokemonClick = () => {
        if (pokemonIndex < pokemonList.length - 1)
            setpokemonIndex(pokemonIndex + 1);
        if (pokemonIndex > 0)
            setpokemonIndex(pokemonIndex - 1);
    }



    return (
        <div>
            {pokemonList.map((element) =>
                <button onClick={handlePokemonClick} key={element.name}>{element.name}</button>)}
        </div>
    );
};


export default NavBar;


// {cart.map((article) => (
//     <li key={article.name}>
//       {article.emoji} {article.name}
//       <input type="text" defaultValue={article.name} />
//       <button onClick={() => removeArticle(article)}>remove</button>