import React from 'react';

import styles from './Ui.module.css';
import searchIcon from '../../assets/searchIcon.png';

const SearchInput = () => {
  return (
    <div className={styles.searchWrapper}>
      <img src={searchIcon} alt="search" className={styles.searchIcon} />
      <input type="text" placeholder="Search" className={styles.searchInput} />
    </div>
  );
};

export default SearchInput;
