'use client';

import Card from '../Card/Card';
import styles from './CardList.module.scss';
import type { CharacterDetails } from '../../../types/types';
import { useTheme } from '../../../shared/hooks/useTheme';interface CardListProps {
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
            onCardClick(character.id);
          }}
        />
      ))}
    </div>
  );
};

export default CardList;
