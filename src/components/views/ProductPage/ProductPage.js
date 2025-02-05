import React from 'react';
import ProductOverview from '../../common/ProductOverview/ProductOverview';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';

const ProductPage = () => (
  <div className={styles.root}>
    <div className={styles.greyBg}></div>
    <ProductOverview />
    {/* <h1>skfhdklfd</h1> */}
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
