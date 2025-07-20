import React from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.scss';
import type { CharacterDetails } from '../../../types/types';

interface CardListProps {
  characters: CharacterDetails[];
}

class CardList extends React.Component<CardListProps> {
  render() {
    const { characters } = this.props;
    return (
      <div className={styles.cardList} role="list">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    );
  }
}

export default CardList;
