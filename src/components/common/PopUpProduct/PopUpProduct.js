import React from 'react';
import PropTypes from 'prop-types';
import styles from './PopUpProduct.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import UserRatingBox from '../../features/UserRatingBox/UserRatingBox';

const PopupProduct = ({ closePopup, productBox }) => {
  return (
    <div className={styles.root}>
      <div className={styles.popupWindow}>
        <div className={`${styles.popupContainer}`}>
          <div className={styles.popupClose}>
            <Button
              className={styles.popupClosingBtn}
              variant='outline'
              onClick={() => closePopup(false)}
            >
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </Button>
          </div>
          <div className={`row ${styles.popupProductReview}`}>
            <div className={`col-5 ${styles.popupPhoto}`}>
              <img className={styles.image} src={productBox.image} alt='furniture' />
            </div>
            <div className={`col-7 ${styles.popupDetails}`}>
              <div className={styles.title}>
                <h5>{productBox.name}</h5>
              </div>
              <div className={styles.popupStars}>
                <UserRatingBox {...productBox} />
              </div>
              <div className={styles.prices}>
                {productBox.oldPrice ? (
                  <Button noHover className={styles.btnoldprice} variant='small'>
                    $ {productBox.oldPrice}
                  </Button>
                ) : (
                  <></>
                )}
                <Button className={styles.btnprice} noHover variant='small'>
                  $ {productBox.price}
                </Button>
              </div>
              <div className={styles.popupDescription}>
                <p className={styles.description}>{productBox.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PopupProduct.propTypes = {
  closePopup: PropTypes.bool,
  productBox: PropTypes.object,
};

export default PopupProduct;
