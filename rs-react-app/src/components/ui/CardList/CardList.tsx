import Card from '../Card/Card';
import styles from './CardList.module.scss';
import type { CharacterDetails } from '../../../types/types';

interface CardListProps {
  characters: CharacterDetails[];
  onCardClick: (id: number) => void;
}

const CardList = ({ characters, onCardClick }: CardListProps) => {
  return (
    <div className={styles.cardList} role="list">
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          onClick={() => onCardClick(character.id)}
        />
      ))}
    </div>
  );
};

export default CardList;
