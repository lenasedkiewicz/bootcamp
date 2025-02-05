import React from 'react';
import styles from './Timer.module.scss';

const Timer = () => {
  const days = 25;
  const hours = 20;
  const minutes = 45;
  const seconds = 30;

  return (
    <div className={styles.root}>
      <div className={styles.timerContainer}>
        <div className={styles.timerPart}>
          <div className={styles.timerValue}>{days}</div>
          <div className={styles.timerUnit}>DAYS</div>
        </div>
        <div className={styles.timerPart}>
          <div className={styles.timerValue}>{hours}</div>
          <div className={styles.timerUnit}>HRS</div>
        </div>
        <div className={styles.timerPart}>
          <div className={styles.timerValue}>{minutes}</div>
          <div className={styles.timerUnit}>MINS</div>
        </div>
        <div className={styles.timerPart}>
          <div className={styles.timerValue}>{seconds}</div>
          <div className={styles.timerUnit}>SECS</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
