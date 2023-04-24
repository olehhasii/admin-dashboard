import React from 'react';

import styles from './Ui.module.css';

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
