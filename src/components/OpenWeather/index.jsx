import { useState, useEffect } from 'react';
import styles from './index.module.css';
import axios from 'axios';

function GetPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    axios.get('https://api.openweathermap.org')
    .then(response => {
      console.log(response);
      
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
          
        </div>
      ))}

    </div>
  );
};

export default GetPokemon;
