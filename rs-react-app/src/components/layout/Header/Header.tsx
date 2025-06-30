import React from 'react';
import styles from './Header.module.scss';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Star Wars</h1>
      </header>
    );
  }
}

export default Header;
