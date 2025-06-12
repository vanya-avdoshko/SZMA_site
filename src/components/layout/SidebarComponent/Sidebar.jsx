import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    //пункты меню
    const navItems = [
        {id: 1, path: '/', label: 'Главная'},
        {id: 2, path: '/news', label: 'Новости'},
        // {id: 3, path: '/products', label: 'Продукция'},
        {id: 4, path: '/projects', label: 'Проекты'},
        {id: 5, path: '/licenses', label: 'Лицензии'},
        {id: 6, path: '/learning', label: 'Обучение'},
        {id: 7, path: '/customers', label: 'Заказчики'},
        {id: 8, path: '/vacancies', label: 'Вакансии'},
        {id: 9, path: '/services', label: 'Услуги'},
        {id: 10, path: '/contacts', label: 'Контакты'},


    ];

    return (
        <aside className='sidebar'>
            <nav className='navigation'>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <NavLink to={item.path}
                                className={({isActive}) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                    }>
                                {item.label}                            
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
    
};

export default Sidebar;