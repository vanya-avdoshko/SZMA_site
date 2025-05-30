import React from 'react'
import './homepage.css'

const HomePage = () => {
    return (
        <div className='homeContainer'>
            <section>
            <h2 className="page-title">Добро пожаловать на наш сайт</h2>
            <p>Здесь будет основной контент главной страницы...</p>
            
            {/* Место для будущих артикулов */}
            <div className="articles-section">
                <h3>Наши последние новости</h3>
                <div className="articles-grid">
                {/* Будут рендериться компоненты Card */}
                </div>
            </div>
        </section>
        </div>
        
    );
}

export default HomePage;