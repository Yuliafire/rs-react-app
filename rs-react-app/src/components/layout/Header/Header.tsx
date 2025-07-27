import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Rick and Morty Portal</h1>
      <nav className={styles.nav}>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
