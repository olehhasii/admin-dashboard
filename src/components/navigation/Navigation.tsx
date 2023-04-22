import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';
import SearchInput from '../ui/SearchInput';
import lightIcon from '../../assets/light.png';
import { HomeIcon, LogoutIcon, ProgramsIcon, UsersIcon } from '../icons/SvgIcons';

const Navigation = (): JSX.Element => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__header}>
        <div className={styles.navigation__header_avatar}></div>
        <div>
          <h1 className={styles.navigation__header_heading}>Admin Panel</h1>
          <span className={styles.navigation__header_email}>email@demo.com</span>
        </div>
      </div>
      <SearchInput />
      <div className={styles.navigation__wrapper}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__list_item}>
            <NavLink to="/" className={styles.navigation__list_link}>
              <HomeIcon />
              <span className={styles['navigation__list_link-text']}>Dashboard</span>
            </NavLink>
          </li>
          <li className={styles.navigation__list_item}>
            <NavLink to="/users" className={styles.navigation__list_link}>
              <UsersIcon />
              <span className={styles['navigation__list_link-text']}>Users</span>
            </NavLink>
          </li>
          <li className={styles.navigation__list_item}>
            <NavLink to="/programs" className={styles.navigation__list_link}>
              <ProgramsIcon />
              <span className={styles['navigation__list_link-text']}>Programs</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.navigation__bottom}>
        <div className={styles.navigation__bottom_logout}>
          <button className={styles['navigation__bottom_logout-btn']}>
            <LogoutIcon />
            <span>Logout</span>
          </button>
        </div>
        <div className={styles.navigation__bottom_mode}>
          <img src={lightIcon} alt="light mode" className={styles.navigation__bottom_lightIcon} />
          <span className={styles['navigation__bottom_mode-text']}>Light mode</span>
          <div className={styles['toggle-switch']}>
            <label className={styles.navigation__bottom_mode_label}>
              <input type="checkbox" className={styles.navigation__bottom_switch} />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
