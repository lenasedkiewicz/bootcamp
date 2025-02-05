import React from 'react';
import styles from './BlogSection.module.scss';
import PostBox from '../../common/BlogPostBox/BlogPostBox';

const BlogSection = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className={`row no-gutters align-items-end ${styles.headerRow}`}>
            <div className={`col ${styles.header}`}>
              <h3>latest blog</h3>
            </div>
            <div className={`col-auto ${styles.dots}`}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.postsContainer}`}>
          <div className='col-4'>
            <PostBox />
          </div>
          <div className='col-4'>
            <PostBox />
          </div>
          <div className='col-4'>
            <PostBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
