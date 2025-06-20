import React from 'react';
import CustomerItem from '../CustomerItemComponent/CustomerItem';
import styles from './customers_page.module.css';
import { Link } from 'react-router-dom';


const CustomersPage = () => {
  const customerData = [
    {
      id: 1,
      name: 'ООО «КИНЕФ»',
      location: 'г. Кириши, Россия',
      logo: 'https://cdc.ru/upload/iblock/32c/32c1d6bfe5fd45c1539aa53f14c4f622.jpg',
      description: 'Нефтеперерабатывающий завод, входящий в состав ПАО «Сургутнефтегаз».',
      website: 'https://www.kinef.ru/'
    },
    {
      id: 2,
      name: 'ОАО «Мозырский НПЗ»',
      location: 'г. Мозырь, Беларусь',
      logo: 'https://www.mnpz.by/bitrix/templates/mnpz/img/logo.png',
      description: 'Один из крупнейших нефтеперерабатывающих заводов в Европе, обеспечивающий производство высококачественных нефтепродуктов.',
      website: 'https://www.mnpz.by'
    },
    {
      id: 3,
      name: 'ОАО «Гродно Азот»',
      location: 'г. Гродно, Беларусь',
      logo: 'https://a-ir.by/upload/iblock/aa2/ookq3fqdf5dbo7almdn8qyvp4qhmcq01.png',
      description: 'Крупное предприятие химической промышленности, производящее азотные удобрения и химические продукты.',
      website: 'https://azot.by'
    },
    {
      id: 4,
      name: 'ООО «СПИК СЗМА»',
      location: 'г. Санкт-Петербург, Россия',
      logo: 'https://lh6.googleusercontent.com/proxy/7gS0-xCwCoHkl9ShZnU9m1N5IpoHZ8G-vYjLMkeRh86v-CZ7Ho2kR9Bo',
      description: 'Инжиниринговая компания, специализирующаяся на автоматизации опасных производственных объектов, с более чем 60-летним опытом работы.',
      website: 'https://szma.com/'
    },
    {
      id: 5,
      name: 'НПЗ Paz Ashdod',
      location: 'г. Ашдод, Израиль',
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQE8wJ8zuVKVhQ/company-logo_200_200/company-logo_200_200/0/1694685598180/paz_ashdod_refinery_ltd__logo?e=2147483647&v=beta&t=HRtvxcgkmfCWk_XvbWtZk7fuJ6mMn4whr5haGpzHarA',
      description: 'Нефтеперерабатывающий завод в г. Ашдод, Израиль, один из крупнейших энергетических компаний в Израиле, обеспечивающий поставку топлива и связанных с ним услуг.',
      website: 'https://arf.co.il/en'
    },
  {
      id: 6,
      name: 'НПЗ BAZAN Group',
      location: 'г. Хайфа, Израиль',
      logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/cufdwxrs6gc29ej14daw',
      description: 'Нефтеперерабатывающий завод, расположенный в г. Хайфа, Израиль, являющийся крупнейшим в стране и входящий в состав BAZAN Group, одной из ведущих энергетических компаний Израиля.',
      website: 'https://eng.bazan.co.il/'
    },


  ];

  return (
    <div className={styles.customersPage}>
      <div className="license-header">
        <h1 className="animate-header">Заказчики</h1>
        <p className="animate-subheader">Наши клиенты — лидеры индустрии</p>
      </div>
      <div className={styles.customersContainer}>
        {customerData && customerData.length > 0 ? (
          customerData.map(item => (
            <CustomerItem
              key={item.id}
              name={item.name}
              logo={item.logo}
              location={item.location}
              description={item.description}
              website={item.website}
            />
          ))
        ) : (
          <p>Список заказчиков пуст</p>
        )}
      </div>
      <div className={styles.otherCustomersLink}>
        <Link to="/other-customers" className="text-blue-600 hover:underline text-lg">
          Посмотреть других заказчиков
        </Link>
      </div>
    </div>
  );
};

export default CustomersPage;