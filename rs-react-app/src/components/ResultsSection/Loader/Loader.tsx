import React from 'react';
import styles from './Loader.module.scss';

class Loader extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.loaderContainer}></div>
        <div className={styles.loaderSpinner}></div>
        <p className={styles.loaderText}>Loading...</p>
      </div>
    );
  }
}

export default Loader;
