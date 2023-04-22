import React from 'react';

import styles from './Ui.module.css';

type ButtonProps = {
  text: string;
  style?: string;
  onClick: () => void;
};

const Button = ({ text, style, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={`${style} + ${styles.button}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
