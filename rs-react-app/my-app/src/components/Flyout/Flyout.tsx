'use client';

import { useSelector, useDispatch } from 'react-redux';
import { removeAllCharacters } from '../../store/charactersSlice';
import type { RootState, AppDispatch } from '../../store/store';
import { saveAs } from 'file-saver';
import { useTheme } from '../../shared/hooks/useTheme';
import styles from './Flyout.module.scss';
import { useTranslations } from 'next-intl';

const Flyout = () => {
  const t = useTranslations('Flyout');
  const { theme } = useTheme();
  const selectedCharacters = useSelector(
    (state: RootState) => state.characters.selectedCharacters
  );
  const dispatch = useDispatch<AppDispatch>();

  if (!selectedCharacters || selectedCharacters.length === 0) return null;

  const handleDownloadCSV = () => {
    const csvContent = [
      ['ID', 'Name', 'Species', 'Status', 'Details URL'],
      ...selectedCharacters.map((item) => [
        item.id,
        `"${item.name.replace(/"/g, '""')}"`,
        item.species,
        item.status,
        item.detailsUrl,
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob(['\uFEFF', csvContent], {
      type: 'text/csv;charset=utf-8',
    });
    saveAs(blob, `${selectedCharacters.length}_items.csv`);
  };

  return (
    <div className={`${styles.flyout} ${styles[theme]}`}>
      <div className={styles.title}>
        {t('selected')} {selectedCharacters.length}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => dispatch(removeAllCharacters())}
          aria-label={t('unselectAll')}
        >
          {t('unselectAll')}
        </button>
        <button
          className={styles.button}
          onClick={handleDownloadCSV}
          aria-label={t('download')}
        >
          {t('download')}
        </button>
      </div>
    </div>
  );
};

export default Flyout;
