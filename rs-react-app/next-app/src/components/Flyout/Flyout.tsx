"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllCharacters } from "../../store/charactersSlice";
import type { RootState, AppDispatch } from "../../store/store";
import { useTheme } from "../../shared/hooks/useTheme";
import styles from "./Flyout.module.scss";
import { useTranslations } from "next-intl";
import { generateCSV } from "../../app/lib/actions";

const Flyout = () => {
  const t = useTranslations("Flyout");
  const { theme } = useTheme();
  const selectedCharacters = useSelector(
    (state: RootState) => state.characters.selectedCharacters,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleDownloadCSV = async () => {
    if (!selectedCharacters || selectedCharacters.length === 0) return;

    setIsDownloading(true);
    try {
      const { fileName, data } = await generateCSV(selectedCharacters);

      const blob = new Blob(["\uFEFF" + data], {
        type: "text/csv;charset=utf-8;",
      });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);

      const hiddenLink = document.createElement("a");
      hiddenLink.href = url;
      hiddenLink.download = fileName;
      hiddenLink.style.display = "none";
      document.body.appendChild(hiddenLink);
      hiddenLink.click();
      document.body.removeChild(hiddenLink);

      setTimeout(() => {
        URL.revokeObjectURL(url);
        setDownloadUrl(null);
      }, 100);
    } catch (error) {
      console.error("Download failed:", error);
      alert(t("downloadError"));
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [downloadUrl]);

  if (!selectedCharacters || selectedCharacters.length === 0) return null;

  return (
    <div className={`${styles.flyout} ${styles[theme]}`}>
      <div className={styles.title}>
        {t("selected")} {selectedCharacters.length}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => dispatch(removeAllCharacters())}
          aria-label={t("unselectAll")}
          disabled={isDownloading}
        >
          {t("unselectAll")}
        </button>
        <button
          className={styles.button}
          onClick={handleDownloadCSV}
          aria-label={t("download")}
          disabled={selectedCharacters.length === 0 || isDownloading}
        >
          {isDownloading ? t("downloading") : t("download")}
        </button>
      </div>
    </div>
  );
};

export default Flyout;
