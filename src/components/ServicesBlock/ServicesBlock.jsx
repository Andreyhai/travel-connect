import React, { useState } from 'react';
import './ServicesCarousel.css';
import { FaAirbnb, FaSuitcaseRolling, FaCompass, FaMapSigns, FaPeopleCarry, FaHotel, FaCarSide, FaBus, FaRegLaughBeam } from 'react-icons/fa'; 

const servicesData = [
  {
    title: 'Поиск попутчиков',
    description: 'Найдите единомышленников для путешествий.',
    imageUrl: 'https://via.placeholder.com/350x200',
    icon: <FaPeopleCarry />,
  },
  {
    title: 'Поддержка и консультации',
    description: 'Получите помощь от экспертов по путешествиям.',
    imageUrl: 'https://via.placeholder.com/350x200',
    icon: <FaAirbnb />,
  },
  {
    title: 'Организация туров',
    description: 'Мы организуем туры по всему миру.',
    imageUrl: 'https://via.placeholder.com/350x200',
    icon: <FaSuitcaseRolling />,
  },
  {
    title: 'Групповые туры',
    description: 'Путешествуйте с группой людей, разделяя расходы.',
    imageUrl: 'https://via.placeholder.com/350x200',
    icon: <FaCompass />,
  },
  {
    title: 'Платформа для общения',
    description: 'Общайтесь с другими путешественниками.',
    imageUrl: 'https://via.placeholder.com/350x200',
    icon: <FaMapSigns />,
  },
  {
    title: 'Бронирование отелей',
    description: 'Легко бронируйте отели для путешествий.',
    imageUrl: 'https://via.placeholder.com/350x200',
    icon: <FaHotel />,
  },
  {
    title: 'Аренда автомобилей',
    description: 'Арендуйте автомобиль для вашего путешествия.',
    imageUrl: 'https://via.placeholder.com/350x200',
    icon: <FaCarSide />,
  },
  {
    title: 'Групповые поездки на автобусах',
    description: 'Удобные автобусные туры по популярным направлениям.',
    imageUrl: 'https://via.placeholder.com/350x200',
    icon: <FaBus />,
  },
  {
    title: 'Веселые приключения',
    description: 'Уникальные и веселые приключения для друзей и семьи.',
    imageUrl: 'https://via.placeholder.com/350x200',
    icon: <FaRegLaughBeam />,
  },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
  };

  const prevService = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1);
  };

  // Меняем фоновый цвет динамически
  const getBackgroundColor = () => {
    const colors = ['#f5f5f5', '#ffcccb', '#d3f8e2', '#e0e8f9', '#fff0e6'];
    return colors[currentIndex % colors.length];
  };

  return (
    <section className="services-carousel" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="carousel-container">
        <button className="carousel-arrow prev" onClick={prevService}>
          &#8249;
        </button>
        <button className="carousel-arrow next" onClick={nextService}>
          &#8250;
        </button>

        <div className="cards">
          {servicesData.map((service, index) => {
            const offset = index - currentIndex;
            const isActive = offset === 0;
            const isNext = offset === 1 || (offset === -servicesData.length + 1);
            const isPrev = offset === -1 || (offset === servicesData.length - 1);

            return (
              <div
                key={index}
                className={`service-card ${isActive ? 'active' : ''} ${isNext ? 'next' : ''} ${isPrev ? 'prev' : ''}`}
                style={{
                  transform: `translateX(${offset * 150}px) rotateY(${offset * 10}deg)`, /* Вращение при смене */
                }}
              >
                <div className="card-icon">{service.icon}</div>
                <img src={service.imageUrl} alt={service.title} className="service-image" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="btn">Подробнее</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
