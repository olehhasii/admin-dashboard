import React from 'react';

import Wrapper from '../components/ui/Wrapper';
import styles from './styles/Home.module.css';
import HomeCards from '../components/Home/HomeCards';
import HomeChart from '../components/Home/HomeChart';

const Home = (): JSX.Element => {
  return (
    <Wrapper>
      <div>
        <h2 className={styles.heading}>Dashboard</h2>
        <h3 className={styles.subheading}>Your personal admin panel</h3>
      </div>
      <HomeCards />
      <HomeChart />
    </Wrapper>
  );
};

export default Home;
