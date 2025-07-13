import React from 'react';
import styles from './Loader.module.scss';
import timerService from '../../../utils/timerService';

interface LoaderProps {
  minDisplayTime?: number;
}

interface LoaderState {
  shouldRender: boolean;
  isVisible: boolean;
}

class Loader extends React.Component<LoaderProps, LoaderState> {
  private mounted = false;

  constructor(props: LoaderProps) {
    super(props);
    this.state = {
      shouldRender: false,
      isVisible: false,
    };
  }

  componentDidMount() {
    this.mounted = true;

    timerService.setTimeout(() => {
      if (this.mounted) {
        this.setState({ shouldRender: true }, () => {
          timerService.setTimeout(() => {
            this.setState({ isVisible: true });
          }, this.props.minDisplayTime || 2000);
        });
      }
    }, 100);
  }

  componentWillUnmount() {
    this.mounted = false;
    timerService.clearAll();
  }

  render() {
    if (!this.state.shouldRender) {
      return null;
    }

    return (
      <div className={styles.loaderWrapper}>
        <div
          className={`${styles.loaderContainer} ${this.state.isVisible ? styles.visible : ''}`}
          aria-busy="true"
          aria-live="polite"
        >
          <div className={styles.loaderSpinner}></div>
          <p className={styles.loaderText}>Loading...</p>
        </div>
      </div>
    );
  }
}

export default Loader;
