import React from 'react';
import './services_page.css';
import { FaDraftingCompass, FaTools, FaCogs, FaWrench } from 'react-icons/fa';

const services = [
  {
    title: 'Проектирование',
    description: 'Разработка индивидуальных решений для ваших задач.',
    icon: <FaDraftingCompass />
  },
  {
    title: 'Монтаж',
    description: 'Профессиональная установка с соблюдением всех норм безопасности.',
    icon: <FaTools />
  },
  {
    title: 'Наладка',
    description: 'Настройка и тестирование систем для оптимальной работы.',
    icon: <FaCogs />
  },
  {
    title: 'Ремонт',
    description: 'Обслуживание и восстановление работоспособности систем.',
    icon: <FaWrench />
  }
];

const ServicesPage = () => {
  return (
    <div className='services_block'>

      <div className="license-header">
        <h1 className="animate-header">Услуги компании</h1>
        <p className="animate-subheader">Автоматизация для безопасности: наши услуги</p>
      </div>
      <div className='services_content'>
        <p>Мы предоставляем услуги для технических устройств, эксплуатируемых на потенциально опасных объектах и производствах с химическими, физико-химическими или физическими процессами, где возможно образование взрывоопасных сред. Эти устройства включают системы автоматического управления, противоаварийной защиты и приборы контроля технологических процессов, основанные на вычислительной и микропроцессорной технике.</p>
        <div className="services_list">
          {services.map((service, index) => (
            <div key={index} className="service_card">
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>        
      </div>
    </div>
  );
}

export default ServicesPage;