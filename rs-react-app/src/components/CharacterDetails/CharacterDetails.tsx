import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
} from 'react';
import {
  useParams,
  useSearchParams,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import ApiService from '../../services/apiService';
import type { CharacterDetails } from '../../types/types';
import Loader from '../ui/Loader/Loader';
import styles from './CharacterDetails.module.scss';

interface OutletContext {
  detailsRef: React.RefObject<HTMLDivElement>;
}

const CharacterDetailsComponent = forwardRef<HTMLDivElement>((_props, ref) => {
  const { id } = useParams<{ id?: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useOutletContext<OutletContext>();
  const localRef = useRef<HTMLDivElement>(null);

  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!id) {
        setError('Invalid character ID');
        setLoading(false);
        return;
      }
      const characterId = parseInt(id, 10);
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
    const page = searchParams.get('page') || '1';
    const query = searchParams.get('query') || '';
    navigate(
      `/home?page=${page}${query ? `&query=${encodeURIComponent(query)}` : ''}`
    );
  };

  useImperativeHandle(ref, () => localRef.current as HTMLDivElement, []);

  if (loading) {
    return (
      <div className={styles.details} ref={localRef}>
        <Loader minDisplayTime={1000} data-testid="details-loader" />
      </div>
    );
  }
  if (error || !character) {
    return (
      <div className={styles.details} ref={localRef}>
        <p>{error || 'Character not found'}</p>
        <button onClick={handleClose} aria-label="Close details">
          Close
        </button>
      </div>
    );
  }
  return (
    <div className={styles.details} ref={localRef}>
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
});

CharacterDetailsComponent.displayName = 'CharacterDetailsComponent';

export default CharacterDetailsComponent;
