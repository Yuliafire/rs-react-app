import Card from '../Card/Card';
import styles from './CardList.module.scss';
import type { CharacterDetails } from '../../../types/types';
import { useTheme } from '../../../hooks/useTheme';

interface CardListProps {
  characters: CharacterDetails[];
  onCardClick: (id: number) => void;
}

const CardList = ({ characters, onCardClick }: CardListProps) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.cardList} ${styles[theme]}`} role="list">
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          onCardClick={() => {
            console.log('CardList: Card clicked, id:', character.id);
            onCardClick(character.id);
          }}
        />
      ))}
    </div>
  );
};

export default CardList;
