import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/images/biklogo3.gif" alt="Логотип предприятия" className={styles.logo} />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.companyName}>СООО БИК СЗМА</h1>
        <h2 className={styles.companyDescription}>Белорусская инжиниринговая компания</h2>
        <hr className={styles.divider} />
        <h1 className={styles.companyName}>СЕВЗАПМОНТАЖАВТОМАТИКА</h1>
      </div>
    </header>
  );
};

export default Header;