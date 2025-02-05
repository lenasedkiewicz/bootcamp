import React from 'react';
import styles from './BlogPostBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const PostBox = () => {
  return (
    <div className={styles.root}>
      <div className={styles.postBox}>
        <div className={styles.photo}>
          <img
            className={styles.image}
            src='./images/furniture_images/bed_images/bed-9.jpg'
            alt='furniture'
          />
          <div className={styles.infoBox}>
            <div className={`row ${styles.infoWrapper}`}>
              <div className={`col ${styles.infoCalendar} ${styles.info}`}>
                <FontAwesomeIcon className={styles.icon} icon={faCalendarDays} />
                <p>02 MAR 2023</p>
              </div>
              <div className={`col ${styles.infoComments} ${styles.info}`}>
                <FontAwesomeIcon className={styles.icon} icon={faComments} />
                <p>4 Comments</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blogDescription}>
          <h3 className={styles.blogHeader}>Product name</h3>
          <p className={styles.blogTrailer}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est culpa
            neque magni ratione odit expedita error possimus, architecto dolorum
            corporis veniam obcaecati voluptatibus molestiae ut. Sapiente ipsum ab
            quasi.
          </p>
          <Button className={styles.buttonReadMore}>Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
