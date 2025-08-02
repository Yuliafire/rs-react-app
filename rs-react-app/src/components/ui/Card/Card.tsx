import { useParams } from 'react-router-dom';
import styles from './Card.module.scss';
import type { CharacterDetails } from '../../../types/types';
import { useSelector, useDispatch } from 'react-redux';
import { addCharacter, removeCharacter } from '../../../store/charactersSlice';
import type { RootState, AppDispatch } from '../../../store/store';
import { useTheme } from '../../../shared/hooks/useTheme';

interface CardProps {
  character: CharacterDetails;
  onCardClick: () => void;
}

const Card = ({ character, onCardClick }: CardProps) => {
  const { theme } = useTheme();
  const { page = '1' } = useParams<{ page?: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const selectedCharacters = useSelector(
    (state: RootState) => state.characters.selectedCharacters
  );

  if (!character) {
    console.error('Character is null or undefined in Card component');
    return null;
  }

  const isSelected = selectedCharacters?.some(
    (item) => item?.id === character.id
  );

  const handleCheckboxChange = () => {
    console.log(
      'Checkbox changed for character:',
      character.id,
      'isSelected:',
      isSelected
    );
    if (isSelected) {
      dispatch(removeCharacter(character.id));
      console.log('Dispatched removeCharacter:', character.id);
    } else {
      const payload = {
        id: character.id,
        name: character.name,
        species: character.species,
        status: character.status,
        detailsUrl: `/character/${page}/${character.id}`,
      };
      dispatch(addCharacter(payload));
      console.log('Dispatched addCharacter:', payload);
    }
  };

  const handleCardClick = () => {
    console.log('Card clicked for character:', character.id);
    onCardClick();
  };

  return (
    <div
      className={`${styles.card} ${styles[theme]}`}
      onClick={handleCardClick}
      data-testid="card"
      role="button"
      tabIndex={0}
      aria-label={`View details for ${character.name}`}
    >
      <div className={styles.cardImage}>
        {character.image ? (
          <img src={character.image} alt={character.name} />
        ) : (
          <span>No image available</span>
        )}
        <span
          className={`${styles.statusBadge} ${styles[character.status?.toLowerCase()]}`}
          data-testid="status-badge"
        >
          {character.status || 'Unknown'}
        </span>
      </div>
      <div className={styles.cardContent}>
        <h3>{character.name || 'Unknown'}</h3>
        <div className={styles.details}>
          <p>
            <strong>Species:</strong> {character.species || 'Unknown'}
          </p>
          <p>
            <strong>Gender:</strong> {character.gender || 'Unknown'}
          </p>
          <p>
            <strong>Origin:</strong> {character.origin?.name || 'Unknown'}
          </p>
          <p>
            <strong>Location:</strong> {character.location?.name || 'Unknown'}
          </p>
        </div>
        <div className={styles.episodes}>
          Episodes: {character.episode?.length || 'Unknown'}
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
