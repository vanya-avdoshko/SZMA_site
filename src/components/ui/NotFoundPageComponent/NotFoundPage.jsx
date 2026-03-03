import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './notfound_page.module.css'; // импорт CSS-модуля

const NotFoundPage = () => {
  // Устанавливаем заголовок страницы для SEO/UX
  useEffect(() => {
    document.title = 'Страница не найдена — СЗМА';
  }, []);

  return (
    <div className={styles['not-found-container']}>
      <div className={styles['not-found-code']}>404</div>
      <h1 className={styles['not-found-title']}>Страница не найдена</h1>
      <p className={styles['not-found-text']}>
        Извините, запрошенная страница не существует.
      </p>
      <Link to="/" className={styles['not-found-link']}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;