import React from 'react';
import NewsItem from '../NewsItemComponent/NewsItem';
import styles from './newspage.module.css'; 

const NewsPage = () => {
  // Добавьте полные данные для новостей
  const newsData = [
    { 
      id: 1, 
      title: "Завершение проекта автоматизации", 
      date: "15 мая 2023",
      excerpt: "Успешно завершен проект по автоматизации производственной линии для завода БелАЗ",
      image: "https://via.placeholder.com/400x200?text=Новость+1",
      link: "/news/1"
    },
    { 
      id: 2, 
      title: "Новые лицензии получены", 
      date: "10 мая 2023",
      excerpt: "Компания получила новые лицензии на проведение строительно-монтажных работ",
      image: process.env.PUBLIC_URL + "/images/kirito.jpg",
      link: "/news/2"
    },
    { 
      id: 3, 
      title: "Семинар по промышленной автоматизации", 
      date: "5 мая 2023",
      excerpt: "Приглашаем на бесплатный семинар по современным системам автоматизации",
      image: "https://via.placeholder.com/400x200?text=Новость+3",
      link: "/news/3"
    },
  ];

  return (
    <div className={styles.newsPage}>
      <div className="license-header">
        <h1>Новости компании</h1>
        <p>Актуальная информация о нашей работе</p>
      </div>
      
      <div className={styles.newsContainer}>
        {newsData && newsData.length > 0 ? (
          newsData.map(item => (
            <NewsItem 
              key={item.id} 
              title={item.title}
              date={item.date}
              excerpt={item.excerpt}
              image={item.image}
              link={item.link}
            />
          ))  
        ) : (
          <p>Новостей пока нет</p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;