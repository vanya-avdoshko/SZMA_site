import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './news_item.module.css';

// Temporary data (same as in NewsPage.jsx, extended with content)
const newsData = [
  { 
    id: 1, 
    title: "Завершение проекта автоматизации", 
    date: "15 мая 2023",
    excerpt: "Успешно завершен проект по автоматизации производственной линии для завода БелАЗ",
    image: "https://via.placeholder.com/400x200?text=Новость+1",
    content: "Полное содержание новости 1: Успешно завершен проект по автоматизации производственной линии для завода БелАЗ. Этот проект длился несколько месяцев и включал установку современных систем управления.",
  },
  { 
    id: 2, 
    title: "Новые лицензии получены", 
    date: "10 мая 2023",
    excerpt: "Компания получила новые лицензии на проведение строительно-монтажных работ",
    image: process.env.PUBLIC_URL + "/images/kirito.jpg",
    content: "Полное содержание новости 2: Компания получила новые лицензии на проведение строительно-монтажных работ. Это открывает новые возможности для участия в крупных проектах.",
  },
  { 
    id: 3, 
    title: "Семинар по промышленной автоматизации", 
    date: "5 мая 2023",
    excerpt: "Приглашаем на бесплатный семинар по современным системам автоматизации",
    image: "https://via.placeholder.com/400x200?text=Новость+3",
    content: "Полное содержание новости 3: Приглашаем на бесплатный семинар по современным системам автоматизации, который пройдет в нашем офисе. Участники узнают о новейших технологиях.",
  },
];

const NewsDetail = () => {
  const { id } = useParams(); // Extract the news ID from the URL
  const newsItem = newsData.find(item => item.id === parseInt(id)); // Find the matching news item

  if (!newsItem) {
    return <div>Новость не найдена</div>; // Display message if no news item is found
  }

  return (
    <div className={styles.newsDetail}>
      <h1>{newsItem.title}</h1>
      <img src={newsItem.image} alt={newsItem.title} className={styles.newsImage} />
      <div className={styles.newsDate}>{newsItem.date}</div>
      <div className={styles.newsContent}>{newsItem.content}</div>
    </div>
  );
};

export default NewsDetail;