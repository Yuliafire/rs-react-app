import { NavLink } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import styles from './Header.module.scss';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <h1>Rick and Morty Portal</h1>
      <nav className={styles.nav}>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          About
        </NavLink>
      </nav>
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        className={styles.themeToggle}
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  );
};

export default Header;
