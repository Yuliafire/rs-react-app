"use client";

import { useState, useEffect } from "react";
import styles from "./Loader.module.scss";
import timerService from "../../../utils/timerService";
import { useTheme } from "../../../shared/hooks/useTheme";
import { useTranslations } from "next-intl";

interface LoaderProps {
  minDisplayTime?: number;
}

const Loader = ({ minDisplayTime = 2000 }: LoaderProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const t = useTranslations("Loader");

  useEffect(() => {
    let mounted = true;
    const timers: number[] = [];

    timers.push(
      timerService.setTimeout(() => {
        if (mounted) {
          setShouldRender(true);

          timers.push(
            timerService.setTimeout(() => {
              setIsVisible(true);
            }, minDisplayTime),
          );
        }
      }, 100),
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
    <div className={`${styles.loaderWrapper} ${styles[theme]}`}>
      <div
        className={`${styles.loaderContainer} ${isVisible ? styles.visible : ""}`}
        aria-busy="true"
        aria-live="polite"
        data-testid="loader"
      >
        <div className={styles.loaderSpinner} role="status"></div>
        <p className={styles.loaderText}>{t("loading")}</p>
      </div>
    </div>
  );
};

export default Loader;
