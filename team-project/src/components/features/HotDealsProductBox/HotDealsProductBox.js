import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import styles from './HotDealsProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';
import { getHotDeal } from '../../../redux/productsRedux';
import Timer from '../../common/Timer/Timer';

const HotDealsProductBox = () => {
  const hotDealsProduct = useSelector(getHotDeal);

  return (
    <div className={styles.root}>
      <div className={styles.hotDealsHeaderContainer}>
        <div className={styles.hotText}>hot deals</div>
        <div className={styles.dotsContainer}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
      <div className={styles.photo}>
        <img className={styles.image} src={hotDealsProduct.image} alt='furniture' />
        <Button className={styles.btnAddToChart} variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>

        <div className={styles.timerComponent}>
          <Timer />
        </div>
      </div>
      <div className={styles.content}>
        <h5>{hotDealsProduct.name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= hotDealsProduct.stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {hotDealsProduct.oldPrice ? (
            <Button noHover className={styles.btnoldprice} variant='small'>
              $ {hotDealsProduct.oldPrice}
            </Button>
          ) : (
            <></>
          )}
          <Button className={styles.btnprice} noHover variant='small'>
            $ {hotDealsProduct.price}
          </Button>
        </div>
      </div>
    </div>
  );
};

HotDealsProductBox.propTypes = {
  hotDealsProduct: PropTypes.object,
};

export default HotDealsProductBox;
