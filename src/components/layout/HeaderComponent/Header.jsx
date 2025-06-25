// import React, { useState } from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className={styles.header}>
      <NavLink to='/'>
        <div className={styles.logoContainer}>
          <img src="/images/biklogo3.gif" alt="Логотип предприятия" className={styles.logo} />
        </div>
      </NavLink>
      <div className={styles.titleContainer}>
        <h1 className={styles.companyName}>СООО «БИК СЗМА»</h1>
      </div>
      <button
        className={`${styles.burgerButton} ${isSidebarOpen ? styles.active : ''}`}
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Закрыть меню' : 'Открыть меню'}
      ><i className={`${styles.contactIcon} ${styles.burgerIcon}`}></i></button>

      {/* <div className={styles.englishPage}></div> */}

      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <i className={`${styles.contactIcon} ${styles.locationIcon}`}></i>
          <span className={styles.contactText}>г. Минск, ул. Буйницкого, 21</span>
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