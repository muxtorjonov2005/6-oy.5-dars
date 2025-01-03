import {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './index.module.css'
function Filter() {
    let [users, setUsers] = useState([])
    let [sorted, setSorted] = useState(false)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
         .then(response => {          
            if (response.status == 200) {                
                setUsers(response.data)
            }
          })
         .catch(error => {
            console.log(error)
          })
    }, [])

    const sortUsers = () => {
        const sortedUsers = [...users].sort((a, b) => {
            if (a.title < b.title) return -1
            if (a.title > b.title) return 1
            return 0
        })
        setUsers(sortedUsers)
        setSorted(true) }

  return (
    <div className={styles.container}>
        <h3>About Users</h3>
        <button onClick={sortUsers} className={styles.sortButton}>
                {sorted ? "Saralandi" : "Saralash"}
            </button>
        <div className={styles.block}>
        {
            users.length > 0 && (
                users.map((user, index) => (
                    <div key={index} className={styles.userCard}>
                        <h4>{user.title}</h4>
                        <p>{user.body}</p>
                    </div>
                ))
            ) 
        }
        </div>
    </div>
  )
}

export default Filter