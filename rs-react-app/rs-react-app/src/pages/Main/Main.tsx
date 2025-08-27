import { useState, useEffect } from 'react';
import DateFilter from '../../components/DateFilter/DateFilter';
import HouseChart from '../../components/Chart/Chart';
import { fetchCharacters } from '../../services/api';
import type { Character } from '../../types/types';
import { filterStudentsByHouseAndDate } from '../../utils/filters';
import styles from './Main.module.scss';

function Main() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredData, setFilteredData] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchCharacters();
        setCharacters(data);

        setFilteredData(filterStudentsByHouseAndDate(data, null, null));
      } catch (err) {
        setError('Failed to load character data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleFilter = (startDate: Date | null, endDate: Date | null) => {
    const filtered = filterStudentsByHouseAndDate(
      characters,
      startDate,
      endDate
    );
    setFilteredData(filtered);
  };

  if (loading) {
    return (
      <div className={styles.appLoading}>Loading Harry Potter data...</div>
    );
  }

  if (error) {
    return <div className={styles.appError}>Error: {error}</div>;
  }

  return (
    <div className={styles.main}>
      <main>
        <DateFilter onFilter={handleFilter} />
        <HouseChart data={filteredData} />
      </main>
    </div>
  );
}

export default Main;
