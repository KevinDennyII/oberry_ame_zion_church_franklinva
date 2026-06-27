import { Link } from 'react-router-dom';
import logo from '../assets/amezion-logo-2.png';
import NavLink from './NavLink';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label="O'Berry A. M. E. Zion Church — Home">
          <img
            src={logo}
            alt="African Methodist Episcopal Zion Church logo"
            className={styles.logo}
            width={55}
            height={48}
          />
          <span className={styles.churchName}>
            <span className={styles.titleFull}>O&apos;Berry A. M. E. Zion Church of Franklin, VA</span>
            <span className={styles.titleCompact}>O&apos;Berry A. M. E. Zion Church</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
