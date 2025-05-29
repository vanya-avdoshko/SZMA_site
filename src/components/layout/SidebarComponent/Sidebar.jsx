import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    //пункты меню
    const navItems = [
        {path: '/', label: 'Главная'},
        {path: '/news', label: 'Новости'},
        {path: '/products', label: 'Продукция'}
    ];

    return (
        <aside className='sidebar'>
            <nav className='navigation'>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.path}>
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