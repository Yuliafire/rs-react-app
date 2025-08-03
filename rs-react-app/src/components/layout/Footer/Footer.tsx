import styles from './Footer.module.scss';
import { useTheme } from '../../../shared/hooks/useTheme';

const Footer = () => {
  const { theme } = useTheme();

  const GitHubIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );

  const RSSchoolIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 120 120"
      fill="currentColor"
      role="img"
      aria-hidden="true"
    >
      <path d="M60 0C26.9 0 0 26.9 0 60s26.9 60 60 60 60-26.9 60-60S93.1 0 60 0zm0 112.5C31.6 112.5 7.5 88.4 7.5 60S31.6 7.5 60 7.5s52.5 24.1 52.5 52.5-24.1 52.5-52.5 52.5z" />
      <path d="M75 30H45c-8.3 0-15 6.7-15 15v30c0 8.3 6.7 15 15 15h30c8.3 0 15-6.7 15-15V45c0-8.3-6.7-15-15-15zm0 7.5c4.1 0 7.5 3.4 7.5 7.5v30c0 4.1-3.4 7.5-7.5 7.5H45c-4.1 0-7.5-3.4-7.5-7.5V45c0-4.1 3.4-7.5 7.5-7.5h30z" />
      <path d="M60 45c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 22.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z" />
    </svg>
  );

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>© 2025 Lingua Voice</p>
          <div className={styles.links}>
            <a
              href="https://github.com/Yuliafire"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.instagram.com/yulia_speakandcode?igsh=cGloenRtcmcwM2N0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RS School"
            >
              <RSSchoolIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
