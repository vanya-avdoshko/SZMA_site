import React from 'react';
import './learning_page.css';

const LearningPage = () => {
    // Пример данных сертификатов (в реальном приложении данные будут загружены из API или базы данных)
    const learning = [
        { id: 1, title: "Протокол проверки знаний по вопросам промышленной безопасности Nº 01/2025", imageUrl: "/images/learning_docs/03_01_25.jpg", date: "2025-01-03" },
        { id: 2, title: "Выписка из журнала учёта присвоения (подтверждения) электротехническому персоналу группы по электробезопасности", imageUrl: "/images/learning_docs/11_01_25.jpg", date: "2025-01-11" },
        { id: 3, title: "Выписка из журнала учёта присвоения (подтверждения) электротехническому персоналу группы по электробезопасности", imageUrl: "/images/learning_docs/11_01_25(2).jpg", date: "2025-01-11" },
        { id: 4, title: "Протокол Nº1309 от 26.03.2024 г. проверки знаний в объеме нормативных правовых актов", imageUrl: "/images/learning_docs/26_03_24.jpg", date: "2024-03-26" },
        { id: 5, title: "Свидетельства о повышении квалификации C Nº 4303412, № 4303430 по эксппуатации, ремонту, монтажу, наладке, обслуживанию, проектированию систем автоматического (автоматизированного) управления (САУ) и противоаварийной защиты (ПА3) для взрывоопасных сред, включая оборудование во взрывозащищенном исполнении", imageUrl: "/images/learning_docs/26_03_24(2).jpg", date: "2024-03-26" },
        { id: 6, title: "Свидетельства о повышении квалификации C Nº 4303412, № 4303430 по эксппуатации, ремонту, монтажу, наладке, обслуживанию, проектированию систем автоматического (автоматизированного) управления (САУ) и противоаварийной защиты (ПА3) для взрывоопасных сред, включая оборудование во взрывозащищенном исполнении", imageUrl: "/images/learning_docs/26_03_24(3).jpg", date: "2024-03-26" },
        { id: 7, title: "Протокол проверки знаний по вопросам промышленной безопасности", imageUrl: "/images/learning_docs/12_12_24.jpg", date: "2024-12-12" },
        { id: 8, title: "Протокол проверки знаний по вопросам промышленной безопасности NM30У2088", imageUrl: "/images/learning_docs/23_12_24.jpg", date: "2024-12-23" },
        { id: 9, title: "Свидетельство о повышении квалификации C Nº 4820231 по программе \"Обеспечение охраны труда в организации. Руководители и специалисты организаций.\"", imageUrl: "/images/learning_docs/13_06_25.jpg", date: "2025-06-13" },
        { id: 10, title: "Свидетельство о повышении квалификации C Nº 4290705 по программе \"Обеспечение охраны труда в организации. Руководители и специалисты организаций.\"", imageUrl: "/images/learning_docs/21_07_23.jpg", date: "2023-07-21" },
    ];

    const blocks = [
        { title: learning[0].title, date: learning[0].date, certs: [learning[0]] },
        { title: learning[1].title, date: learning[1].date, certs: [learning[1]] },
        { title: learning[2].title, date: learning[2].date, certs: [learning[2]] },
        { title: learning[3].title, date: learning[3].date, certs: [learning[3]] },
        { title: learning[4].title, date: learning[4].date, certs: [learning[4], learning[5]] },
        { title: learning[6].title, date: learning[6].date, certs: [learning[6]] },
        { title: learning[7].title, date: learning[7].date, certs: [learning[7]] },
        { title: learning[8].title, date: learning[8].date, certs: [learning[8]] },
        { title: learning[9].title, date: learning[9].date, certs: [learning[9]] },
    ];

    // Сортировка блоков по дате
    const sortedBlocks = [...blocks].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        return date.toLocaleDateString('ru-RU', options);
    }

    // Пример использования:
    const dateString = "2024-06-18";
    const formattedDate = formatDate(dateString);
    console.log(formattedDate); // Вывод: 18 июня 2024

    // Функция для стилизации заголовка
    const renderStyledTitle = (title) => {
        const [firstWord, ...restWords] = title.split(' ');
        const rest = restWords.join(' ');
        return (
            <>
                <span className="first-word">{firstWord}</span>
                <br />
                <hr className="title-divider" />
                <span className="title-rest">{rest}</span>
            </>
        );
    };

    return (
        <div className="learning-page">
            <div className="license-header">
                <h1 className="animate-header">Сертификаты об обучении</h1>
                <p className="animate-subheader">Профессионалы, прошедшие специализированное обучение</p>
            </div>
            <div className="learning-container">
                {sortedBlocks.map((block, index) => (
                    <div key={index} className="learning-block">
                        <div className="learning-content">
                            <div className="learning-info">
                                <h2>{renderStyledTitle(block.title)}</h2>
                            </div>
                            <div className="learning-images">
                                {block.certs.map((cert) => (
                                    <div key={cert.id} className="learning-image-item">
                                        <img
                                            src={cert.imageUrl}
                                            alt={cert.title}
                                            onClick={() => window.open(cert.imageUrl, '_blank')}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="learning-details">
                            <div className="detail-item">
                                <span>Дата получения</span>
                                <strong>{formatDate(block.date)}</strong>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default LearningPage;