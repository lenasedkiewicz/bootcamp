import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Swipeable.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';

const Swipeable = ({ children, leftAction, rightAction }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minDistanceSwipe = 50;

  const onTouchStart = e => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = e => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => rightAction(),
    onSwipedRight: () => leftAction(),
    swipeDuration: 500,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minDistanceSwipe;
    const isRightSwipe = distance < -minDistanceSwipe;
    if (isLeftSwipe) {
      rightAction();
    }
    if (isRightSwipe) {
      leftAction();
    }
  };

  return (
    <div className={styles.swipeable}>
      <Button variant='outline' onClick={leftAction} className={styles.swipButton}>
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </Button>

      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        {...handlers}
      >
        {children}
      </div>

      <Button variant='outline' onClick={rightAction} className={styles.swipButton}>
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </Button>
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
