import React from 'react';
// import PropTypes from 'prop-types';
import Gallery from '../../features/Gallery/Gallery';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromotionBox from '../../features/PromotionBox/PromotionBox';
import PromotedSection from '../../layout/PromotedSection/PromotedSection';
import BrandsSection from '../../features/BrandsSection/BrandsSection';
import BlogSection from '../../features/BlogSection/BlogSection';
import Feedback from '../../features/Feedback/Feedback';

const Homepage = () => (
  <div className={styles.root}>
    <PromotedSection />
    <FeatureBoxes />
    <PromotionBox />
    <NewFurniture />
    <Gallery />
    <BlogSection />
    <BrandsSection />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
