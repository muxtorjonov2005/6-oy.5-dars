import {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './index.module.css'
function RandomUser() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://randomuser.me/api/")
         .then(response => {
            if (response.status == 200) {
                setUsers(response.data.results)
            }
          })
         .catch(error => {
            console.log(error)
          })
    }, [])

  return (
    <div className={styles.container}>
        <h3>User List</h3>
        {
            users.length > 0 ? (
                users.map((user, index) => (
                    <div key={index} className={styles.userCard}>
                        <img src={user.picture.medium} alt="Random user" className={styles.userImage} />
                        <div>
                            <p><strong>Name:</strong> {user.name.first} {user.name.last}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )
        }
    </div>
  )
}

export default RandomUser