import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useGetCharacterQuery } from '../../store/apiSlice';
import type { CharacterDetails } from '../../types/types';
import Loader from '../ui/Loader/Loader';
import styles from './CharacterDetails.module.scss';
import { useTheme } from '../../shared/hooks/useTheme';

interface CustomError {
  status: string;
  data: {
    message: string;
  };
}

const CharacterDetailsComponent = () => {
  const { theme } = useTheme();

  const { id, page } = useParams<{ id?: string; page?: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const characterId = id ? parseInt(id, 10) : undefined;

  const {
    data: characterResponse,
    isLoading,
    error,
  } = useGetCharacterQuery(characterId || 0);

  const character = characterResponse?.data as CharacterDetails | undefined;

  const handleClose = () => {
    const queryString = searchParams.toString()
      ? `?${searchParams.toString()}`
      : '';
    const basePath = page ? `/${page}` : '/';
    navigate(`${basePath}${queryString}`);
  };

  if (isLoading) {
    return (
      <div className={styles.details}>
        <Loader minDisplayTime={1000} data-testid="details-loader" />
      </div>
    );
  }
  if (error || !character || isNaN(characterId || 0)) {
    const errorMessage = error
      ? (error as CustomError).data.message || 'Failed to load character'
      : 'Character not found or invalid ID';
    return (
      <div className={styles.details}>
        <p>{errorMessage}</p>
        <button onClick={handleClose} aria-label="Close details">
          Close
        </button>
      </div>
    );
  }
  return (
    <div className={`${styles.details} ${styles[theme]}`}>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <button onClick={handleClose} aria-label="Close details">
        Close
      </button>
    </div>
  );
};

export default CharacterDetailsComponent;
