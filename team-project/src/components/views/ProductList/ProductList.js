import React from 'react';
import Banner from '../../common/Banner/Banner';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => (
  <div>
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Banner />
          </div>
        </div>
        <div className='row'>
          <div className='col-9'>Product List</div>
          <div className='col-3'>Filers</div>
        </div>
        <div className='row'>
          <div className='col'>Brands</div>
        </div>
      </div>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
