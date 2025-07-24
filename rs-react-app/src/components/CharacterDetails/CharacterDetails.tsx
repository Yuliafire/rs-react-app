import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ApiService from '../../services/apiService';
import type { CharacterDetails } from '../../types/types';
import Loader from '../ui/Loader/Loader';
import styles from './CharacterDetails.module.scss';

interface CharacterDetailsProps {
  characterId: number;
}

const CharacterDetailsComponent = ({ characterId }: CharacterDetailsProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!characterId) {
        setError('Invalid character ID');
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
  }, [characterId]);

  const handleClose = () => {
    const page = searchParams.get('page') || '1';
    const query = searchParams.get('query') || '';
    navigate(
      `/?page=${page}${query ? `&query=${encodeURIComponent(query)}` : ''}`
    );
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
    <div className={styles.details}>
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
