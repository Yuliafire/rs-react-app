import React from "react";
import styles from './ErrorBoundary.module.scss';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false};

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Caught by ErrorBoundary:", error, info.componentStack);
  }

  handleReset = () => this.setState({ hasError: false, error: undefined });

  render() {
    if (this.state.hasError) {
     return(

<div className={styles.errorContainer}>
  <h1 className={styles.errorTitle }>
    {this.state.error?.message || 'Something went wrong!'}
  </h1>

  <button
     className={styles.tryAgainButton}
     onClick={this.handleReset}
     >
      Try Again
  </button>
</div>
     );

    }
    return this.props.children;
  }
}

export default ErrorBoundary;