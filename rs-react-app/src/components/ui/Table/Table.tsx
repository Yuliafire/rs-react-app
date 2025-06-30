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
              <td>{character.id}</td>
              <td>
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
              <td>{character.gender || 'Unknown'}</td>
              <td>{character.yearOfBirth || 'Unknown'}</td>
              <td>{character.yearOfDeath || '-'}</td>
              <td>{character.maritalStatus || 'Unknown'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
