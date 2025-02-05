import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { setViewport } from '../../../redux/viewportRedux';
import { useDispatch } from 'react-redux';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleViewport = () => {
      if (window.innerWidth <= 415) {
        dispatch(setViewport('mobile'));
      } else if (window.innerWidth <= 992) {
        dispatch(setViewport('tablet'));
      } else if (window.innerWidth > 992) {
        dispatch(setViewport('desktop'));
      }
    };
    window.addEventListener('resize', handleViewport);
    handleViewport();
    return () => {
      window.removeEventListener('resize', handleViewport);
    };
  });


  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
