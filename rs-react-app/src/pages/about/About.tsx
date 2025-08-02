import styles from './About.module.scss';
import { Link } from 'react-router-dom';
import { useTheme } from '../../shared/hooks/useTheme';

export const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.about} ${styles[theme]}`}>
      <h2>About This Project</h2>

      <section className={styles.authorInfo}>
        <h3>Author Information</h3>
        <p>Created by Yulia Podgurskaia</p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/Yuliafire"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Yuliafire
          </a>
        </p>
      </section>

      <section className={styles.courseInfo}>
        <h3>RS School React Course</h3>
        <p>
          This project was developed as part of the{' '}
          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            RS School React Course
          </a>
        </p>
      </section>

      <Link to="/" className={styles.backLink} role="link">
        ← Back to Search{' '}
      </Link>
    </div>
  );
};
