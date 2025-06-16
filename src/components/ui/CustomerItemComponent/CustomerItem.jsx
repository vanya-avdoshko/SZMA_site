import React from 'react';
import styles from './customer_item.module.css';

const CustomerItem = ({ name, location, logo, description, website }) => {
  return (
    <article className={styles.customerItem}>
      <div className={styles.customerLogoContainer}>
        <img src={logo} alt={name} className={styles.customerLogo} />
      </div>
      <div className={styles.customerContent}>
        <h3 className={styles.customerName}>
          <a href={website} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>
        <div className={styles.customerLocation}> {location} </div>
        <p className={styles.customerDescription}>{description}</p>
      </div>
    </article>
  );
};

export default CustomerItem;