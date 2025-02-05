import React, { useState } from 'react';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './UserRatingBox.module.scss';
import { useDispatch } from 'react-redux';
import { setRating, setStarsValue } from '../../../redux/productsRedux';

const UserRatingBox = product => {
  const [starsNumber, setStarsNumber] = useState(product.stars);
  const [userRating, setUserRating] = useState(product.userRating);

  const dispatch = useDispatch();

  const handleStar = (e, id) => {
    e.preventDefault();
    setStarsNumber(id.id);
    setUserRating(true);
    dispatch(setStarsValue({ id: product.id, starsNumber: id.id }));
    dispatch(setRating(product.id));
  };
  return (
    <div className={styles.stars}>
      {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }].map(i => (
        <a key={i.id} href='#'>
          {i.id <= starsNumber ? (
            <FontAwesomeIcon
              icon={faStar}
              onClick={e => handleStar(e, i)}
              className={userRating ? styles.clicked : ''}
            >
              {i} stars
            </FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={farStar}
              onClick={e => handleStar(e, i)}
              className={userRating ? styles.clicked : ''}
            >
              {i} stars
            </FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

export default UserRatingBox;
