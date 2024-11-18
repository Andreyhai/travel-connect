import React, { useState } from 'react';
import './Header.css'; // Подключаем CSS файл для стилизации
import AuthModal from '../AuthModal/AuthModal';
import { Link } from 'react-router-dom';
import { ACCOUNT_ROUTE, HOME_ROUTE } from '../../utils/CONSTS';

const Header = ({scrollToAbout, scrollToServices, scrollToContacts, scrollToRegister}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => window.location.replace(HOME_ROUTE)}>
        <h1>TripConnect</h1>
        <p>Найди попутчика для своего путешествия</p>
      </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a onClick={scrollToAbout}>О нас</a></li>
          <li><a onClick={scrollToServices}>Услуги</a></li>
          <li><a onClick={scrollToContacts}>Контакты</a></li>
          <li><a onClick={scrollToRegister}>Регистрация</a></li>
        </ul>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className='login' onClick={handleOpenModal}>
        <span>{'войти'}</span>
      </div>

      {/* Модальное окно для авторизации */}
      <AuthModal open={isModalOpen} handleClose={handleCloseModal} />
    </header>
  );
};

export default Header;