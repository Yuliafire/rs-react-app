import { Link } from 'react-router-dom';
import styles from './Notfound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h2>04 - Page Not Found</h2>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className={styles.homeLink}>
        Return to Home
      </Link>
    </div>
  );
};
