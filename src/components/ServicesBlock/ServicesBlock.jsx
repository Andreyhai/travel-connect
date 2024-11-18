import React, { useState } from 'react';
import './ServicesCarousel.css';
import { FaAirbnb, FaSuitcaseRolling, FaCompass, FaMapSigns, FaPeopleCarry, FaHotel, FaCarSide, FaBus, FaRegLaughBeam } from 'react-icons/fa'; 

const servicesData = [
  {
    title: 'Поиск попутчиков',
    description: 'Найдите единомышленников для путешествий.',
    imageUrl: 'https://www.allcarz.ru/wp-content/uploads/2019/07/foto-carp-zakon_02.jpg',
    icon: <FaPeopleCarry />,
  },
  {
    title: 'Поддержка и консультации',
    description: 'Получите помощь от экспертов по путешествиям.',
    imageUrl: 'https://p0.zoon.ru/a/e/65267f72aa8124d1380748e5_65268071493bc9.02620717.jpg',
    icon: <FaAirbnb />,
  },
  {
    title: 'Организация туров',
    description: 'Мы организуем туры по всему миру.',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=abb9bc2a883d9432b08dd33c0cb09357_l-11026079-images-thumbs&n=13',
    icon: <FaSuitcaseRolling />,
  },
  {
    title: 'Групповые туры',
    description: 'Путешествуйте с группой людей, разделяя расходы.',
    imageUrl: 'https://grushevaya-roscha.ru/wp-content/uploads/2021/02/dosug-nalchik-1.jpg',
    icon: <FaCompass />,
  },
  {
    title: 'Платформа для общения',
    description: 'Общайтесь с другими путешественниками.',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=9e116b9333830fcb3da590321848d7da-5304681-images-thumbs&n=13',
    icon: <FaMapSigns />,
  },
  {
    title: 'Бронирование отелей',
    description: 'Легко бронируйте отели для путешествий.',
    imageUrl: 'https://krd.ru/upload/resize_cache/iblock/f04/1284_720_2/ere32drqr7e2t7hh1r3x9gjlgtqc4mz1.jpg',
    icon: <FaHotel />,
  },
  {
    title: 'Аренда автомобилей',
    description: 'Арендуйте автомобиль для вашего путешествия.',
    imageUrl: 'https://nypost.com/wp-content/uploads/sites/2/2019/01/car-rental.jpg?quality=90&strip=all',
    icon: <FaCarSide />,
  },
  {
    title: 'Групповые поездки на автобусах',
    description: 'Удобные автобусные туры по популярным направлениям.',
    imageUrl: 'https://vfrmat.ru/content/images/pages/392/min_3.jpg?1678086845',
    icon: <FaBus />,
  },
  {
    title: 'Веселые приключения',
    description: 'Уникальные и веселые приключения для друзей и семьи.',
    imageUrl: 'https://i.pinimg.com/originals/19/d2/cb/19d2cb3ceefab3b8cff4b059aea6671f.jpg',
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
