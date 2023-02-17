import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { toggleFavorite } from '../../../redux/productsRedux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

const ProductBox = ({ name, price, promo, stars, isFavorite, isCompare, id }) => {
  const [favoriteValue, setFavoriteValue] = useState(isFavorite);
  const productId = id;
  const dispatch = useDispatch();
  const toggleFavoriteValue = e => {
    e.preventDefault();
    setFavoriteValue(!isFavorite);
    dispatch(toggleFavorite(productId));
  };

  return (
    <Provider store={store}>
      <div className={styles.root}>
        <div className={styles.photo}>
          {promo && <div className={styles.sale}>{promo}</div>}
          <div className={styles.buttons}>
            <Button variant='small'>Quick View</Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
        <div className={styles.content}>
          <h5>{name}</h5>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= stars ? (
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
            <Button
              variant='outline'
              onClick={e => toggleFavoriteValue(e)}
              className={favoriteValue ? styles.isFavorite : undefined}
            >
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button
              variant='outline'
              className={isCompare ? styles.isCompare : undefined}
            >
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.price}>
            <Button className={styles.btnprice} noHover variant='small'>
              $ {price}
            </Button>
          </div>
        </div>
      </div>
    </Provider>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  isCompare: PropTypes.bool,
  id: PropTypes.string,
};

export default ProductBox;
