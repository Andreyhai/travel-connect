import React, { useState } from 'react';
import './Header.css'; // Подключаем CSS файл для стилизации

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>TripConnect</h1>
        <p>Найди попутчика для своего путешествия</p>
      </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/about">О нас</a></li>
          <li><a href="/services">Услуги</a></li>
          <li><a href="/contact">Контакты</a></li>
        </ul>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div><span>войти</span></div>
    </header>
  );
};

export default Header;
