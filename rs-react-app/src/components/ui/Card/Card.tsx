import styles from './Card.module.scss';
import type { CharacterDetails } from '../../../types/types';

interface CardProps {
  character: CharacterDetails;
  onClick: () => void;
}

const Card = ({ character, onClick }: CardProps) => {
  return (
    <div
      className={styles.card}
      data-testid="card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${character.name}`}
    >
      <div className={styles.cardImage}>
        <img src={character.image} alt={character.name} />
        <span
          className={`${styles.statusBadge} ${styles[character.status.toLowerCase()]}`}
          data-testid="status-badge"
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
};

export default Card;
