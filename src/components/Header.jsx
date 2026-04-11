
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/amezion-logo-1.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="O'Berry A. M. E. Zion Church Logo" className={styles.logo} />
        </Link>
        <h1 className={styles.churchName}>
          <span className={styles.titleFull}>O'Berry A. M. E. Zion Church of Franklin, VA</span>
          <span className={styles.titleCompact}>O'Berry A. M. E. Zion Church</span>
        </h1>
      </div>
      <nav className={styles.nav}>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
