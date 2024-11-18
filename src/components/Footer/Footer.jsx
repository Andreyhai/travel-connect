import React from 'react';
import './Footer.css'; // Подключаем CSS для стилизации

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Секция о компании */}
        <div className="footer-section">
          <h3>TripConnect</h3>
          <p>Найди попутчиков для своих путешествий и отправляйся в путь с новыми друзьями!</p>
        </div>

        {/* Ссылки */}
        <div className="footer-section">
          <h4>Навигация</h4>
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/about">О нас</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/contact">Контакты</a></li>
          </ul>
        </div>

        {/* Социальные сети */}
        <div className="footer-section">
          <h4>Следите за нами</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">VK</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Teams</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Contacts</a>
          </div>
        </div>

        {/* Контакты */}
        <div className="footer-section">
          <h4>Контакты</h4>
          <p>Email: <a href="mailto:support@travelconnect.com">support@tripconnect.com</a></p>
          <p>Телефон: +7 (123) 456-78-90</p>
        </div>
      </div>

      {/* Нижний бар с авторскими правами */}
      <div className="footer-bottom">
        <p>&copy; 2024 TripConnect. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;