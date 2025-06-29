import React from 'react';
import NewsItem from '../NewsItemComponent/NewsItem';
import styles from './newspage.module.css';
import newsData from '../../../data/news.json';

const monthMap = {
  'января': 0,
  'февраля': 1,
  'марта': 2,
  'апреля': 3,
  'мая': 4,
  'июня': 5,
  'июля': 6,
  'августа': 7,
  'сентября': 8,
  'октября': 9,
  'ноября': 10,
  'декабря': 11
};

const parseRussianDate = (dateString) => {
  const [day, monthName, year] = dateString.split(' ');
  const month = monthMap[monthName.toLowerCase()];
  return new Date(year, month, day);
};

const NewsPage = () => {
  const sortedNewsData = [...newsData].sort((a, b) => {
    return parseRussianDate(b.date) - parseRussianDate(a.date);
  });

  return (
    <div className={styles.newsPage}>
      <div className="license-header">
        <h1>Новости компании</h1>
        <p>Актуальная информация о нашей работе</p>
      </div>
      
      <div className={styles.newsContainer}>
        {sortedNewsData && sortedNewsData.length > 0 ? (
          sortedNewsData.map(item => (
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