import React from 'react';
import type { CharacterDetails } from '../../../types/types';
import styles from './Table.module.scss';

interface TableProps {
  items: CharacterDetails[];
  headers: string[];
}

class Table extends React.Component<TableProps> {
  render() {
    const { items, headers } = this.props;

    return (
      <div className={styles.tableWrapper}>
        <table className={styles.resultsTable} aria-label="Character details">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((character) => (
              <tr key={character.id}>
                <td data-label="ID">{character.id}</td>
                <td data-label="Name">
                  <strong>{character.name}</strong>
                  {character.gender && (
                    <span className={styles.genderBadge}>
                      {character.gender === 'F'
                        ? '♀'
                        : character.gender === 'M'
                          ? '♂'
                          : character.gender}
                    </span>
                  )}
                </td>
                <td data-label="Gender">{character.gender || 'Unknown'}</td>
                <td data-label="Birth Year">{character.yearOfBirth || 'Unknown'}</td>
                <td data-label="Death Year">{character.yearOfDeath || '-'}</td>
                <td data-label="Marital Status">{character.maritalStatus || 'Unknown'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
