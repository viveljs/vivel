import * as React from 'react';
import { Button } from '../components/atoms';
import bg from '@api/backgrounds/office.png';
import styles from '@styles/opening.module.css';

const Opening: React.FC = () => {
  return (
    <main className={styles.wrapper} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.title}>PRASMUL QUEST</div>
      <div className={styles.subtitle}>- tutorial -</div>
      <Button scene="introduction" text="Mulai" />
    </main>
  );
};

export default Opening;
