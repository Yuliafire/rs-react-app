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
