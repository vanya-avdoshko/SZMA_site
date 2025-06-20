import React from 'react';
import { Link } from 'react-router-dom';
import styles from './other_customers_page.module.css';

const OtherCustomersPage = () => {
  const otherCustomerData = [
    {
      id: 1,
      name: 'Санаторий «Лесное» КГБ РБ',
      location: 'Беларусь, Дошицкий р-н',
    },
    {
      id: 2,
      name: 'Хойникский завод ЖБИ ОАО Мозырский домостроительный комбинат',
      location: 'Беларусь, г. Хойники',
    },
    {
      id: 3,
      name: 'Филиал «Дуброва-АГРО» РУП «Гомельэнерго»',
      location: 'Беларусь, Светлогорский р-н',
    },
    {
      id: 4,
      name: 'ГЗУ «Белгосцирк»',
      location: 'Беларусь, г. Минск',
    },
    {
      id: 5,
      name: 'ОАО «Гроднохимволокно»',
      location: 'Беларусь, г. Гродно',
    },
    {
      id: 6,
      name: 'ОАО «Лидалакокраска»',
      location: 'Беларусь, г. Лида',
    },
    {
      id: 7,
      name: 'ОАО «Светлогорский ЦКК»',
      location: 'Беларусь, г. Светлогорск',
    },
    {
      id: 8,
      name: 'АО «АХЕМА»',
      location: 'Литва, г. Ионава',
    },
    
    
  ];

  return (
    <div className={styles.otherCustomersPage}>
      <div className="license-header">
        <h1 className="animate-header">Другие заказчики</h1>
        <p className="animate-subheader">Наши партнеры в различных регионах</p>
      </div>
      <div className={styles.otherCustomersList}>
        {otherCustomerData && otherCustomerData.length > 0 ? (
          <ol className={styles.customerList}>
            {otherCustomerData.map(item => (
              <li key={item.id} className={styles.customerItem}>
                <span className={styles.customerName}>{item.name}</span>
                <span className={styles.customerLocation}>{item.location}</span>
              </li>
            ))}
          </ol>
        ) : (
          <p>Список заказчиков пуст</p>
        )}
      </div>
      <div className={styles.backLink}>
        <Link to="/customers" className="text-blue-600 hover:underline text-lg">
          Вернуться к основным заказчикам
        </Link>
      </div>
    </div>
  );
};

export default OtherCustomersPage;