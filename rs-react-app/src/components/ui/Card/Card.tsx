import { useParams } from 'react-router-dom';
import styles from './Card.module.scss';
import type { CharacterDetails } from '../../../types/types';
import { useSelector, useDispatch } from 'react-redux';
import { addCharacter, removeCharacter } from '../../../store/charactersSlice';
import type { RootState, AppDispatch } from '../../../store/store';
import { useTheme } from '../../../hooks/useTheme';

interface CardProps {
  character: CharacterDetails;
  onSelect: () => void;
}

const Card = ({ character, onSelect }: CardProps) => {
  const { theme } = useTheme();
  const { page = '1' } = useParams<{ page?: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const selectedCharacters = useSelector(
    (state: RootState) => state.characters.selectedCharacters
  );

  const isSelected = selectedCharacters.some(
    (item) => item.id === character.id
  );

  const handleCheckboxChange = () => {
    if (isSelected) {
      dispatch(removeCharacter(character.id));
    } else {
      dispatch(
        addCharacter({
          id: character.id,
          name: character.name,
          species: character.species,
          status: character.status,
          detailsUrl: `/character/${page}/${character.id}`,
        })
      );
    }
  };

  return (
    <div
      className={`${styles.card} ${styles[theme]}`}
      onClick={onSelect}
      data-testid="card"
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
      <input
        className={styles.flag}
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        onClick={(e) => e.stopPropagation()}
        aria-label={`${isSelected ? 'Deselect' : 'Select'} ${character.name}`}
      />
    </div>
  );
};

export default Card;
