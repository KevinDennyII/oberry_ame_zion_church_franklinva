import { NavLink as RouterNavLink } from 'react-router-dom';
import styles from './NavLink.module.css';

function NavLink({ to, children, end = false }) {
  return (
    <RouterNavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </RouterNavLink>
  );
}

export default NavLink;
