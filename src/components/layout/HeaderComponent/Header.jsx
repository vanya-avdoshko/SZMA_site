// import React, { useState } from 'react';
import styles from './header.module.css';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  // const [searchQuery, setSearchQuery] = useState('');

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  //   // Базовая логика поиска: вывод запроса в консоль
  //   console.log('Поиск по запросу:', query);
  //   // Здесь можно добавить фильтрацию контента или переход на страницу результатов
  // };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/images/biklogo3.gif" alt="Логотип предприятия" className={styles.logo} />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.companyName}>СООО «БИК СЗМА»</h1>
      </div>
      <button
        className={`${styles.burgerButton} ${isSidebarOpen ? styles.active : ''}`}
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Закрыть меню' : 'Открыть меню'}
      >===</button>
      {/* <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Поиск по сайту..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          aria-label="Поиск по сайту"
        />
        <button className={styles.searchButton}><i className={`${styles.contactIcon} ${styles.searchIcon}`}></i></button>
      </div> */}

      <div className={styles.englishPage}>

      </div>

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