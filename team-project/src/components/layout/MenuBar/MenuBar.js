import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <a href='/' className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href='/shop/'>Furniture</a>
            </li>
            <li>
              <a href='/shop/chair'>Chair</a>
            </li>
            <li>
              <a href='/shop/table'>Table</a>
            </li>
            <li>
              <a href='/shop/sofa'>Sofa</a>
            </li>
            <li>
              <a href='/shop/bedroom'>Bedroom</a>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
