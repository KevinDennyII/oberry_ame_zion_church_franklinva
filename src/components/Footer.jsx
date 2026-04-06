
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Made by OhhDenny Services, LLC with ❤️</p>
      <p>Copyright © {new Date().getFullYear()} O'Berry A. M. E. Zion Church. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
