import React from 'react';
import styles from './Card.module.scss';
import type { CharacterDetails } from '../../../types/types';

interface CardProps {
  character: CharacterDetails;
}

class Card extends React.Component<CardProps> {
  render() {
    const { character } = this.props;

    return (
      <div className={styles.card} data-testid="card">
        <div className={styles.cardImage}>
          <img src={character.image} alt={character.name} />
          <span
            className={`${styles.statusBadge} ${styles[character.status.toLowerCase()]}`}
          >
            {character.status}
          </span>
        </div>
        <div className={styles.cardContent}>
          <h3>{character.name}</h3>
          <div className={styles.details}>
            <p>
              <strong>Species:</strong> {character.species}
            </p>
            <p>
              <strong>Gender:</strong> {character.gender}
            </p>
            <p>
              <strong>Origin:</strong> {character.origin.name}
            </p>
            <p>
              <strong>Location:</strong> {character.location.name}
            </p>
          </div>
          <div className={styles.episodes}>
            Episodes: {character.episode.length}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
