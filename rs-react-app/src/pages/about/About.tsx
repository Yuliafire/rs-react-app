import styles from './About.module.scss';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className={styles.about}>
      <h2>About This Project</h2>

      <section className={styles.authorInfo}>
        <h3>Author Information</h3>
        <p>Create by Yulia Podgurskaia</p>
        GitHub:{' '}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Yuliafire
        </a>
      </section>

      <section className={styles.courseInfo}>
        <h3>RS School React Course</h3>
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
        ← Back to Search //{' '}
      </Link>
    </div>
  );
};
