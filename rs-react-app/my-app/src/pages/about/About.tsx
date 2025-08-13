'use client';

import Link from 'next/link';
import styles from './About.module.scss';
import { useTheme } from '../../shared/hooks/useTheme';
import { useTranslations } from 'next-intl';

export const About = () => {
  const { theme } = useTheme();
  const t = useTranslations('About');

  return (
    <div className={`${styles.about} ${styles[theme]}`}>
      <h2>{t('subtitle')}</h2>

      <section className={styles.authorInfo}>
        <h3>{t('heading')}</h3>
        <p>{t('author')}</p>
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
        <h3>{t('courseInfo')}</h3>
        <p>
         {t('description')} {' '}
          <Link
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('courseName')}
          </Link>
        </p>
      </section>

      <Link href="/" className={styles.backLink} role="link">
        ← {t('back')}{' '}
      </Link>
    </div>
  );
};
