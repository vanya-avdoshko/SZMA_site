import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© БИК СЗМА 2025</p>
        <div className="footer-contacts">
          <div className="contact-item">
            <i className="location-icon"></i>
            <span>г. Минск, ул. Буйницкого, 21</span>
          </div>
          <div className="contact-item">
            <i className="phone-icon"></i>
            <a href="tel:+375173553690">+375 (17) 355-36-90</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;