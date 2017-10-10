import React from 'react';
import styles from './index.css';

const LoadingIndicator = (props) => {
  const { isLoading, width, height } = props;
  if (!isLoading) {
    return '';
  }
  return (
    <div className={styles['loading-indicator-container']}>
      <div className={styles['loading-indicator-background']} />
      <div className={styles['cssload-loader']} style={{ width: width || 40, height: height || 40 }}>
        <div className={`${styles['cssload-inner']} ${styles['cssload-one']}`} />
        <div className={`${styles['cssload-inner']} ${styles['cssload-two']}`} />
        <div className={`${styles['cssload-inner']} ${styles['cssload-three']}`} />
      </div>
    </div>
  );
};
export default LoadingIndicator;
