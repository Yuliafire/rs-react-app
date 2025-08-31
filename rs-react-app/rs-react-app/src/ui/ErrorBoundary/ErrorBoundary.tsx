import React from 'react';
import styles from './ErrorBoundary.module.scss';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(
      'Magical rift detected at Hogwarts:',
      error,
      info.componentStack
    );
  }

  handleReset = () => this.setState({ hasError: false, error: undefined });

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorContainer}>
          <h1 className={styles.errorTitle}>MAGICAL RIFT DETECTED</h1>
          <div className={styles.errorSubtitle}>
            Spell disruption level: critical
          </div>
          <div className={styles.errorMessage}>
            Emergency charms engaged by the Ministry
          </div>

          <div className={styles.separator}></div>

          <button className={styles.hogwartsButton} onClick={this.handleReset}>
            CAST RESTORATION CHARM
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
