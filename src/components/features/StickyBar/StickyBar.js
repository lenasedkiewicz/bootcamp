import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { getCompareProducts, toggleCompare } from '../../../redux/productsRedux';
import styles from './StickyBar.module.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const StickyBar = () => {
  const compareProducts = useSelector(state => getCompareProducts(state));
  const dispatch = useDispatch();

  const removeProduct = product => {
    dispatch(toggleCompare(product.id));
  };

  if (!compareProducts.length) return '';
  return (
    <div className={styles.sticky_bar}>
      {compareProducts.map(product => (
        <div key={product.id} className={styles.product_col}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.product_image}
            onClick={() => removeProduct(product)}
          />
          <div className={styles.product_close} onClick={() => removeProduct(product)}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      ))}
      <div className={styles.compare}>
        <a href='#'>COMPARE</a>
      </div>
    </div>
  );
};

export default StickyBar;
