import React from 'react';
import styles from './PromotedSection.module.scss';
import HotDealsProductBox from '../../features/HotDealsProductBox/HotDealsProductBox';
import PromotedProductBox from '../../features/PromotedProductBox/PromotedProductBox';

const PromotedSection = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className='row'>
          <div className='col-4'>
            <HotDealsProductBox />
          </div>
          <div className='col-8'>
            <PromotedProductBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotedSection;
