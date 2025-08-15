'use server';
import Link from 'next/link';
import styles from '@styles/Notfound.module.scss';

export const NotFound = () => {
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
