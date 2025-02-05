import React from 'react';
import { useSelector } from 'react-redux';
import { getPromotedProduct } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import styles from './PromotedProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const PromotedProductBox = () => {
  const promotedProduct = useSelector(getPromotedProduct);

  return (
    <div className={styles.root}>
      <div className={styles.promotedProductContainer}>
        <div className={styles.photo}>
          <img
            className={styles.image}
            src={promotedProduct.image}
            alt='promotedFurniture'
          />
          <div className={styles.textBar}>
            <p className={styles.title}>
              {promotedProduct.softTitle}
              <strong className={styles.strongTitle}>
                {` ${promotedProduct.strongTitle}`}
              </strong>
            </p>
            <p className={styles.description}>{promotedProduct.description}</p>
          </div>
          <Button className={styles.shopNowButton}>shop now</Button>
        </div>
        <div className={styles.arrowButtonsWrapper}>
          <Button className={`${styles.arrowButton}`} variant='small'>
            <FontAwesomeIcon icon={faAngleLeft}>left</FontAwesomeIcon>
          </Button>
          <Button className={`${styles.arrowButton}`} variant='small'>
            <FontAwesomeIcon icon={faAngleRight}>right</FontAwesomeIcon>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromotedProductBox;
