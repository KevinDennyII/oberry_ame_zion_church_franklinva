
import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h2 className={styles.title}>Welcome To</h2>
        <h1 className={styles.subtitle}>O'Berry A. M. E. Zion Church!</h1>
        <div className={styles.taglineBar}>
          <p className={styles.tagline}>A little church with a big ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
