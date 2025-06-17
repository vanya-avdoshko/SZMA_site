import React from 'react';
import './vacancies_page.css';

const VacanciesPage = () => {
    const vacancies = [
        {
            title: 'Software Engineer',
            image: 'https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-employee-icon-vector-illustration-in-line-style-for-any-purpose-png-image_998326.jpg',
            salary: '$80,000 - $120,000',
            description: 'Мы ищем квалифицированного инженера-программиста для нашей команды. Идеальный кандидат должен иметь опыт разработки масштабируемых веб-приложений и страсть к программированию.',
            requirements: [
                'Степень бакалавра в области компьютерных наук или смежной области',
                '3+ года опыта в разработке программного обеспечения',
                'Знание JavaScript, React и Node.js',
                'Сильные навыки решения проблем',
                'Отличные коммуникативные навыки и умение работать в команде'
            ]
        },
        {
            title: 'Product Manager',
            image: 'https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-employee-icon-vector-illustration-in-line-style-for-any-purpose-png-image_998326.jpg',
            salary: '$90,000 - $130,000',
            description: 'Мы ищем опытного менеджера по продуктам для руководства нашими усилиями по разработке продуктов. Успешный кандидат будет отвечать за определение стратегии и дорожной карты продукта.',
            requirements: [
                'Степень бакалавра в области бизнеса, инженерии или смежной области',
                '5+ лет опыта в управлении продуктами',
                'Глубокое понимание agile-методологий',
                'Отличные лидерские и коммуникативные навыки',
                'Способность работать в быстро меняющейся среде'
            ]
        }
    ];

    return (
        <div className='vacancies-page'>
            <h1>Текущие вакансии</h1>
            {vacancies.map((vacancy, index) => (
                <div key={index} className='vacancy'>
                    <img className='vacancy_image' src={vacancy.image} alt='Вакансия'/>
                    <h2>{vacancy.title}</h2>
                    <p className='salary'>{vacancy.salary}</p>
                    <p className='description'>{vacancy.description}</p>
                    <h3>Требования:</h3>
                    <ul className='requirements'>
                        {vacancy.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default VacanciesPage;