import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    type: 'button',
    disabled: false,
    children: null,
  };

  render() {
    const { children, onClick, type, disabled } = this.props;

    return (
      <button
        type={type}
        className={styles.button}
        onClick={onClick}
        disabled={disabled}
      >
        {' '}
        {children}{' '}
      </button>
    );
  }
}

export default Button;
