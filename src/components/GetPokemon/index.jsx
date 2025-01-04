import { useState, useEffect } from 'react';
import styles from './index.module.css';
import axios from 'axios';

function GetPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      if(response.status === 200) {
        setLoading(true);
        setPokemonList(response.data.results);
      }
      
    })
  }, []);

  return (
    <div>
      {loading && pokemonList.map((pokemon, index) => (
        <div key={index} className={styles.pokemon}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.url} alt={pokemon.name} />
        </div>
      ))}

      {!loading && <h2>Loading...</h2>}

      {pokemonList.length === 0 && loading && <h2>No Pokemons found.</h2>}

      {pokemonList.length > 0 && <h2>Total Pokemons: {pokemonList.length}</h2>}

      {pokemonList.length > 0 && <button onClick={() => setLoading(true)}>Load More</button>}
    </div>
  );
};

export default GetPokemon;
