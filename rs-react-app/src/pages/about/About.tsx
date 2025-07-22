// src/components/About/About.tsx
import { Link } from 'react-router-dom';
import styles from './About.module.scss';

export const About = () => {
  return (
    <div className={styles.about}>
      <h1>About This Project</h1>

      <section className={styles.authorInfo}>
        <h2>Author Information</h2>
        <p>Created by: [Your Name]</p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            @yourusername
          </a>
        </p>
      </section>

      <section className={styles.courseInfo}>
        <h2>RS School React Course</h2>
        <p>
          This project was developed as part of the{' '}
          <Link
            to="https://rs.school/react/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RS School React Course
          </Link>
        </p>
      </section>

      <Link to="/" className={styles.backLink}>
        ← Back to Search
      </Link>
    </div>
  );
};
