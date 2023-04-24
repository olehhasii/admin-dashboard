import React from 'react';

import styles from './styles/HomeCards.module.css';
import { ActiveIcon, DumbellIcon, UserCardIcon, WebIcon } from '../icons/SvgIcons';

type CardProps = {
  value: number;
  heading: string;
  icon: JSX.Element;
};

const Card = ({ value, heading, icon }: CardProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.card__data}>
        {icon}
        <span className={styles.card__data_value}>{value}</span>
      </div>
      <span className={styles.card__data_heading}>{heading}</span>
    </div>
  );
};

const HomeCards = (): JSX.Element => {
  return (
    <div className={styles.cards}>
      {/* <div className={styles.card}>
        <div className={styles.card__data}>
          <WebIcon />
          <span className={styles.card__data_value}>1342</span>
        </div>
        <span className={styles.card__data_heading}>Website Visits</span>
      </div> */}
      <Card value={1342} heading="Website Visits" icon={<WebIcon />} />
      <Card value={345} heading="Users" icon={<UserCardIcon />} />
      <Card value={13} heading="Training Programs" icon={<DumbellIcon />} />
      <Card value={567} heading="Active sessions this week" icon={<ActiveIcon />} />
    </div>
  );
};

export default HomeCards;
