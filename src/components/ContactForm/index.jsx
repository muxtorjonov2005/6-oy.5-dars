import { useState } from 'react';
import styles from './index.module.css';

function ContactForm()  {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!name || !email || !message) {
      setError('Iltimos, barcha maydonlarni to\'ldiring.');
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setSuccess(true);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kontakt Formasi</h1>
      {success && <p className={styles.success}>Rahmat! Xabaringiz qabul qilindi.</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Ism</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Xabar</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button}>Yuborish</button>
      </form>
    </div>
  );
};

export default ContactForm;
