import React from 'react';
import styles from './BrandsSection.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getAllBrands } from '../../../redux/brandsRedux';
import { useSelector } from 'react-redux';

const BrandsSection = () => {
  const allBrands = useSelector(getAllBrands);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row ${styles.brandsSectionRow}`}>
          <div className={`col ${styles.sectionElementsWrapper}`}>
            <Button className={`${styles.arrowButtonLeft}`} variant='small'>
              <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
            </Button>
            <div className={`col ${styles.brandsWrapper}`}>
              {allBrands.map(item => (
                <div key={item.id} className={`col-2 ${styles.brandImage}`}>
                  <img src={item.image} alt='brand' />
                </div>
              ))}
            </div>
            <Button className={`${styles.arrowButtonRight}`} variant='small'>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
