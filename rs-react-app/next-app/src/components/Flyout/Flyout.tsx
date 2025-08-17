"use client";

import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllCharacters } from "../../store/charactersSlice";
import type { RootState, AppDispatch } from "../../store/store";
import { useTheme } from "../../shared/hooks/useTheme";
import styles from "./Flyout.module.scss";
import { useTranslations } from "next-intl";

const Flyout = () => {
  const t = useTranslations("Flyout");
  const { theme } = useTheme();
  const selectedCharacters = useSelector(
    (state: RootState) => state.characters.selectedCharacters,
  );
  const dispatch = useDispatch<AppDispatch>();
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [objectUrl]);

  const handleDownloadCSV = () => {
    if (!selectedCharacters || selectedCharacters.length === 0) return;

    try {
      const headers = "ID,Name,Species,Status,Details URL\n";
      const rows = selectedCharacters
        .map(
          (char) =>
            `${char.id},"${char.name.replace(/"/g, '""')}",${char.species},${char.status},${char.detailsUrl}`,
        )
        .join("\n");

      const csvContent = headers + rows;
      const blob = new Blob(["\uFEFF" + csvContent], {
        type: "text/csv;charset=utf-8;",
      });

      const url = URL.createObjectURL(blob);
      setObjectUrl(url);

      if (downloadLinkRef.current) {
        downloadLinkRef.current.href = url;
        downloadLinkRef.current.download = `${selectedCharacters.length}_characters.csv`;
        downloadLinkRef.current.click();
      }
    } catch (error) {
      console.error("Download failed:", error);
      alert(t("downloadError"));
    }
  };

  if (!selectedCharacters || selectedCharacters.length === 0) return null;

  return (
    <div className={`${styles.flyout} ${styles[theme]}`}>
      <a ref={downloadLinkRef} style={{ display: "none" }} aria-hidden="true" />

      <div className={styles.title}>
        {t("selected")} {selectedCharacters.length}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => dispatch(removeAllCharacters())}
          aria-label={t("unselectAll")}
        >
          {t("unselectAll")}
        </button>
        <button
          className={styles.button}
          onClick={handleDownloadCSV}
          aria-label={t("download")}
          disabled={selectedCharacters.length === 0}
        >
          {t("download")}
        </button>
      </div>
    </div>
  );
};

export default Flyout;
