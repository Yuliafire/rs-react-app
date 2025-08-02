import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import ApiService from '../../shared/services/apiService';
import type { CharacterDetails } from '../../types/types';
import Loader from '../ui/Loader/Loader';
import styles from './CharacterDetails.module.scss';
import { useTheme } from '../../shared/hooks/useTheme';

const CharacterDetailsComponent = () => {
  const { theme } = useTheme();

  const { id, page } = useParams<{ id?: string; page?: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const characterId = id ? parseInt(id, 10) : undefined;
      if (!characterId || isNaN(characterId)) {
        setError('Invalid or missing character ID');
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const response = await ApiService.getCharacter(characterId);
        if (response.status === 'success') {
          setCharacter(response.data);
        } else {
          setError(response.message || 'Failed to load character');
        }
      } catch (error) {
        setError('API request failed');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [id]);

  const handleClose = () => {
    const queryString = searchParams.toString()
      ? `?${searchParams.toString()}`
      : '';
    const basePath = page ? `/${page}` : '/';
    console.log('handleClose', { page, queryString, currentId: id, basePath });
    navigate(`${basePath}${queryString}`);
  };

  if (loading) {
    return (
      <div className={styles.details}>
        <Loader minDisplayTime={1000} data-testid="details-loader" />
      </div>
    );
  }
  if (error || !character) {
    return (
      <div className={styles.details}>
        <p>{error || 'Character not found'}</p>
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
