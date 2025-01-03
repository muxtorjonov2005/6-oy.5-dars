import {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './index.module.css'
function OpenWeather() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://api.openweathermap.org")
         .then(response => {    
            console.log(response.date);
                  
            if (response.status == 200) {                
                setUsers(response.data)
            }
          })
         .catch(error => {
            console.log(error)
          })
    }, [])

  return (
    <div className={styles.container}>
        <h3>Weather Information</h3>
            
    </div>
  )
}

export default OpenWeather