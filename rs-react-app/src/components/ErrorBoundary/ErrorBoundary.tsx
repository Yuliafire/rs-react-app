import React from 'react';
import styles from './ErrorBoundary.module.scss';
import Button from '../ui/Button/Button';

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
      'Reality destabilization detected:',
      error,
      info.componentStack
    );
  }

  handleReset = () => this.setState({ hasError: false, error: undefined });

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorContainer}>
          <h1 className={styles.errorTitle}>
            DIMENSIONAL INSTABILITY DETECTED
          </h1>
          <div className={styles.errorSubtitle}>
            Reality corruption level: critical
          </div>
          <div className={styles.errorMessage}>
            Emergency stabilization protocols engaged
          </div>

          <div className={styles.separator}></div>

          <Button onClick={this.handleReset}>REINITIALIZE SYSTEM</Button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
