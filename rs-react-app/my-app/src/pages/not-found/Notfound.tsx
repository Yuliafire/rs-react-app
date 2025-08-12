'use server';
import Link from 'next/link';
import styles from './Notfound.module.scss';
// import { useTheme } from '../../shared/hooks/useTheme';

export const NotFound = () => {
  // const { theme } = useTheme();
  return (
    <div className={`${styles.notFound}`}>
      <h2>404 - Page Not Found</h2>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className={styles.homeLink}>
        Return to Home
      </Link>
    </div>
  );
};
