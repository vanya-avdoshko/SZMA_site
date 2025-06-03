import React from 'react';
import styles from './news_item.module.css'

const NewsItem = ({title, date, excerpt, image, link}) => {
     return (
    <article className={styles.newsItem}>
      <div className={styles.newsImageContainer}>
        <img 
          src={image} 
          alt={title} 
          className={styles.newsImage}
        />
      </div>
      
      <div className={styles.newsContent}>
        <div className={styles.newsDate}>{date}</div>
        <h3 className={styles.newsTitle}>{title}</h3>
        <p className={styles.newsExcerpt}>{excerpt}</p>
        <a href={link} className={styles.newsLink}>Подробнее</a> 
      </div>
    </article>
  );
};

export default NewsItem;
