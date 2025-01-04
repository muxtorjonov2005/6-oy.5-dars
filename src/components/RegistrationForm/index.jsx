import { useState } from 'react';
import styles from './index.module.css';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = () => {
    if (name && email && phone && password.length >= 8) {
      setIsFormValid(true);
      setError('');
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError('Parol kamida 8 ta belgidan iborat bo\'lishi kerak.');
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);

    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ro'yxatdan O'tish</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Ism</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => { setName(e.target.value); handleInputChange(); }}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); handleInputChange(); }}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Telefon Raqami</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); handleInputChange(); }}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Parol</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); handleInputChange(); }}
            className={styles.input}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button} disabled={!isFormValid}>Ro'yxatdan o'tish</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
