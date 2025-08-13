// // import { NavLink } from 'react-router-dom';
// import { useTheme } from '../../../shared/hooks/useTheme';
// import { useTranslations } from 'next-intl';
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// import { NavBar } from '../../ui/NavBar/NavBar';


// import styles from './Header.module.scss';

// const Header = () => {
//   const { theme, toggleTheme } = useTheme();
//   const t = useTranslations('Header');
//   // const pathname = usePathname();

//   return (
//     <header className={`${styles.header} ${styles[theme]}`}>
//       <h1>{t('title')}</h1>
//       <nav className={styles.nav}>
//         {/* <Link
//           href="/about"
//           className={pathname === '/about' ? styles.active : ''}
//         >
//           {t('about')}
//         </Link> */}
//       </nav>
//       {/* <button
//         onClick={toggleTheme}
//         aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
//         className={styles.themeToggle}
//       >
//         {theme === 'light' ? 'Dark' : 'Light'}
//       </button> */}
//       <NavBar />
//     </header>
//   );
// };

// export default Header;


'use client';
import { useTheme } from '../../../shared/hooks/useTheme';
import { useTranslations } from 'next-intl';
import { NavBar } from '../../ui/NavBar/NavBar';
import styles from './Header.module.scss';

const Header = () => {
  const { theme } = useTheme();
  const t = useTranslations('Header');

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <h1>{t('title')}</h1>
      <NavBar />
    </header>
  );
};

export default Header;
