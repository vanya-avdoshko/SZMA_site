import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './news_item.module.css';
import newsData from '../../../data/news.json'; // Adjust path based on your project structure

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return <div>Новость не найдена</div>;
  }

  return (
    <div className={styles.newsDetail}>
      <h1>{newsItem.title}</h1>
      <img src={newsItem.image} alt={newsItem.title} className={styles.newsImage} loading='lazy'/>
      <div className={styles.newsDate}>{newsItem.date}</div>
      <div className={styles.newsContent}>{newsItem.content}</div>
    </div>
  );
};

export default NewsDetail;