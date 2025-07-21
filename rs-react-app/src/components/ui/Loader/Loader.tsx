import { useState, useEffect } from 'react';
import styles from './Loader.module.scss';
import timerService from '../../../utils/timerService';

interface LoaderProps {
  minDisplayTime?: number;
}

const Loader = ({ minDisplayTime = 2000 }: LoaderProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mounted = true;
    const timers: number[] = [];

    timers.push(
      timerService.setTimeout(() => {
        if (mounted) {
          setShouldRender(true);

          // Visibility delay
          timers.push(
            timerService.setTimeout(() => {
              setIsVisible(true);
            }, minDisplayTime)
          );
        }
      }, 100)
    );

    return () => {
      mounted = false;
      timerService.clearAll();
    };
  }, [minDisplayTime]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className={styles.loaderWrapper}>
      <div
        className={`${styles.loaderContainer} ${isVisible ? styles.visible : ''}`}
        aria-busy="true"
        aria-live="polite"
        data-testid="loader"
      >
        <div className={styles.loaderSpinner} role="status"></div>
        <p className={styles.loaderText}>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
