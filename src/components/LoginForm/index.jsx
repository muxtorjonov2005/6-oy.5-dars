import {useState} from 'react'
import styles from './index.module.css';

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Iltimos, to\'g\'ri email kiriting.');
      return;
    }
    setError('')
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
    
  }
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Kirish Formasi</h3>
      <form onSubmit={handleLogin} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
          className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Parol</label>
          <input
          className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button className={styles.button}>Kirish</button>
      </form>
    </div>
  )
}

export default LoginForm