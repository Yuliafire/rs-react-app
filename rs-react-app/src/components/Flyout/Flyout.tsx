import { useSelector, useDispatch } from 'react-redux';
import { removeAllCharacters } from '../../store/charactersSlice';
import type { RootState, AppDispatch } from '../../store/store';
import { saveAs } from 'file-saver';
import { useTheme } from '../../shared/hooks/useTheme';
import styles from './Flyout.module.scss';

const Flyout = () => {
  const { theme } = useTheme();
  const selectedCharacters = useSelector(
    (state: RootState) => state.characters.selectedCharacters
  );
  const dispatch = useDispatch<AppDispatch>();

  if (selectedCharacters.length === 0) return null;

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
        Selected {selectedCharacters.length} item
        {selectedCharacters.length > 1 ? 's' : ''}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => dispatch(removeAllCharacters())}
          aria-label="Unselect all characters"
        >
          Unselect all
        </button>
        <button
          className={styles.button}
          onClick={handleDownloadCSV}
          aria-label="Download selected characters"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Flyout;
