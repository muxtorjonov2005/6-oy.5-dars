import {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './index.module.css'
function GetPokemon() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
         .then(response => {    
            console.log(response);
                  
            if (response.status === 200) {                
                setUsers(response.data)
            }
          })
         .catch(error => {
            console.log(error)
          })
    }, [])

  return (
    <div className={styles.container}>
        <h3>Pokemon Information</h3>
            
    </div>
  )
}

export default GetPokemon