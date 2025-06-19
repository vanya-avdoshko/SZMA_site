import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/images/biklogo3.gif" alt="Логотип предприятия" className={styles.logo} />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.companyName}>СООО «БИК СЗМА»</h1>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <i className={`${styles.contactIcon} ${styles.locationIcon}`}></i>
          <span className={styles.contactText}>Минск, Беларусь</span>
        </div>
        <div className={styles.contactItem}>
          <i className={`${styles.contactIcon} ${styles.phoneIcon}`}></i>
          <a href="tel:+375173553690" className={`${styles.contactText} ${styles.phoneLink}`}>
            +375 (17) 355-36-90
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;