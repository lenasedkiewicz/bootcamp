import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.root}>
      <div className={styles.banner}>
        <p className={styles.bannerTitle}>
          bedroom <strong>furniture</strong>
        </p>
        <p className={styles.bannerSubtitle}>
          always
          <strong>
            <span className={styles.percent}> 25%</span>
          </strong>{' '}
          off or more
        </p>
      </div>
      <div className={styles.bannerMenu}>
        <p>
          Home &gt; <span className={styles.orangeText}>Furniture</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
