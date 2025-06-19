import React from 'react';
import './licenses_page.css';
// import LicenseImage1 from '/images/license_1.jpg';
// import LicenseImage2 from '/images/license_2.jpg';
// import LicenseImage3 from '/images/license_3.jpg';
// import LicenseImage4 from '/images/license_4.jpg';
// import CertificateIcon from './certificate-icon.svg';
// import ReviewIcon from './review-icon.svg';



const LicensesPage = () => {
  return (
    <div className="licenses-container">
      <div className="license-header">
        <h1 className="animate-header">Лицензии и сертификаты</h1>
        <p className="animate-subheader">Документы, обеспечивающие безопасность и качество</p>
      </div>

      {/* Основной блок лицензии */}
      <div className="main-license">
        <div className="license-info">
          <h2>Проматомнадзор МЧС Республики Беларусь</h2>
          <p>Специальное разрешение (лицензия) № 33133/ 236-1 на право осуществления деятельности в области
            промышленной безопасности. Лицензия выдана на основании решения от 12 февраля 2007 года №8 и зарегистрирована
            в реестре специальных разрешений (лицензий) Госпромнадзора МЧС Республики Беларусь за № 236-1.</p>
          <div className="license-details">
            <div className="detail-item">
              <span>Номер:</span>
              <strong>33133/236-1</strong>
            </div>
            <div className="detail-item">
              <span>Дата выдачи:</span>
              <strong>12 февраля 2007 г.</strong>
            </div>
            <div className="detail-item">
              <span>Срок действия:</span>
              <strong>Бессрочно</strong>
            </div>
          </div>
        </div>

        <div className="license-images">
          <div className="image-grid">
            <a href='/images/license_1.jpg' target='_blank'>
              <div className="image-item">
                <img src='/images/license_1.jpg' alt="Лицензия - страница 1" />
                <div className="image-caption">Страница 1</div>
              </div>
            </a>
            <a href='/images/license_2.jpg' target='_blank'>
              <div className="image-item">
                <img src='/images/license_2.jpg' alt="Лицензия - страница 2" />
                <div className="image-caption">Страница 2</div>
              </div>
            </a>
            <a href='/images/license_3.jpg' target='_blank'>
              <div className="image-item">
                <img src='/images/license_3.jpg' alt="Лицензия - страница 3" />
                <div className="image-caption">Страница 3</div>
              </div>
            </a>
            <a href='/images/license_4.jpg' target='_blank'>
              <div className="image-item">
                <img src='/images/license_4.jpg' alt="Лицензия - страница 4" />
                <div className="image-caption">Страница 4</div>
              </div>
            </a>
          </div>
          <div className="license-note">
            <p>Для просмотра в полном размере кликните на изображение</p>
          </div>
        </div>
      </div>

      {/* Дополнительные документы */}
      <div className="additional-documents">
        <h2>Сопутствующие документы</h2>

        <div className="documents-grid">
          <div className="document-card">
            {/* <div className="document-icon">
              <img src={CertificateIcon} alt="Сертификат" />
            </div> */}
            <div className="document-content">
              <h3>Сертификат БЕЛГИМ</h3>
              <p>Сертификат соответствия требованиям международного стандарта ISO 9001:2015. Подтверждает, что система менеджмента качества компании соответствует международным стандартам.</p>
              <div className="document-details">
                <div className="detail">
                  <span>Формат:</span> PDF
                </div>
                <div className="detail">
                  <span>Страниц:</span> 2
                </div>
              </div>
              <a
                href="/sertificate_BELGIM_new.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="document-button"
              >
                Открыть сертификат
              </a>
            </div>
          </div>

          <div className="document-card">
            {/* <div className="document-icon">
              <img src={ReviewIcon} alt="Отзывы" />
            </div> */}
            <div className="document-content">
              <h3>Отзывы предприятий</h3>
              <p>какое-нибудь описание </p>
              <div className="document-details">
                <div className="detail">
                  <span>Формат:</span> PDF
                </div>
                <div className="detail">
                  <span>Страниц:</span> 4
                </div>
              </div>
              <a
                href="/business_reviews.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="document-button"
              >
                Просмотреть отзывы
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicensesPage;